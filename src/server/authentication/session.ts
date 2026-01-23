import { createServerFn } from '@tanstack/react-start'
import { redirect } from '@tanstack/react-router'
import { useAppSession } from '@/lib/session'
import { authenticatedRequest } from './api-client'
import { URLs } from './urls'

interface LoginCredentials {
  email: string
  password: string
}

interface SignupCredentials {
  email: string
  password: string
  username?: string
}

interface LoginResponse {
  status: number
  data?: {
    user?: {
      id: string
      email: string
    }
    id?: string
  }
  errors?: Array<{ message: string }>
  meta?: {
    email_verification_required?: boolean
  }
}

interface AuthResult {
  success: boolean
  error?: string
  user?: any
  emailVerificationRequired?: boolean
}

export const loginFn = createServerFn({ method: 'POST' })
  .inputValidator((data: LoginCredentials) => data)
  .handler(async ({ data }): Promise<AuthResult> => {
    try {
      const result = await authenticatedRequest<LoginResponse>(URLs.LOGIN, {
        method: 'POST',
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      })

      if (result.status !== 200) {
        return {
          success: false,
          error: result.errors?.[0]?.message || 'Invalid credentials',
        }
      }

      const session = await useAppSession()
      await session.update({
        userId: result.data?.user?.id || result.data?.id,
        email: result.data?.user?.email || data.email,
      })

      return { success: true, user: result.data }
    } catch (error) {
      return {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : 'An error occurred during login',
      }
    }
  })

export const signupFn = createServerFn({ method: 'POST' })
  .inputValidator((data: SignupCredentials) => data)
  .handler(async ({ data }): Promise<AuthResult> => {
    try {
      const result = await authenticatedRequest<LoginResponse>(URLs.SIGNUP, {
        method: 'POST',
        body: JSON.stringify({
          email: data.email,
          password: data.password,
          username: data.username || data.email.split('@')[0],
        }),
      })

      if (result.status !== 200) {
        return {
          success: false,
          error: result.errors?.[0]?.message || 'Signup failed',
        }
      }

      if (result.meta?.email_verification_required) {
        return {
          success: true,
          emailVerificationRequired: true,
          user: result.data,
        }
      }

      const session = await useAppSession()
      await session.update({
        userId: result.data?.user?.id || result.data?.id,
        email: result.data?.user?.email || data.email,
      })

      return { success: true, user: result.data }
    } catch (error) {
      return {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : 'An error occurred during signup',
      }
    }
  })

export const logoutFn = createServerFn({ method: 'POST' }).handler(async () => {
  const session = await useAppSession()
  await session.clear()
  throw redirect({ to: '/login', search: { redirect: '' } })
})

export const getCurrentUserFn = createServerFn({ method: 'GET' }).handler(
  async () => {
    const session = await useAppSession()
    const userId = session.data.userId
    const email = session.data.email

    if (!userId) {
      return null
    }

    return {
      id: userId,
      email: email,
    }
  },
)
