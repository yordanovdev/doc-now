import { createServerFn } from '@tanstack/react-start'
import { redirect } from '@tanstack/react-router'
import { useAppSession } from '@/lib/session';

export const URLs = Object.freeze({
  // Meta
  CONFIG: '/config',

  // Account management
  CHANGE_PASSWORD: '/account/password/change',
  EMAIL: '/account/email',
  PROVIDERS: '/account/providers',

  // Account management: 2FA
  AUTHENTICATORS: '/account/authenticators',
  RECOVERY_CODES: '/account/authenticators/recovery-codes',
  TOTP_AUTHENTICATOR: '/account/authenticators/totp',

  // Auth: Basics
  LOGIN: '/auth/login',
  REQUEST_LOGIN_CODE: '/auth/code/request',
  CONFIRM_LOGIN_CODE: '/auth/code/confirm',
  SESSION: '/auth/session',
  REAUTHENTICATE: '/auth/reauthenticate',
  REQUEST_PASSWORD_RESET: '/auth/password/request',
  RESET_PASSWORD: '/auth/password/reset',
  SIGNUP: '/auth/signup',
  VERIFY_EMAIL: '/auth/email/verify',

  // Auth: 2FA
  MFA_AUTHENTICATE: '/auth/2fa/authenticate',
  MFA_REAUTHENTICATE: '/auth/2fa/reauthenticate',
  MFA_TRUST: '/auth/2fa/trust',

  // Auth: Social
  PROVIDER_SIGNUP: '/auth/provider/signup',
  REDIRECT_TO_PROVIDER: '/auth/provider/redirect',
  PROVIDER_TOKEN: '/auth/provider/token',

  // Auth: Sessions
  SESSIONS: '/auth/sessions',

  // Auth: WebAuthn
  REAUTHENTICATE_WEBAUTHN: '/auth/webauthn/reauthenticate',
  AUTHENTICATE_WEBAUTHN: '/auth/webauthn/authenticate',
  LOGIN_WEBAUTHN: '/auth/webauthn/login',
  SIGNUP_WEBAUTHN: '/auth/webauthn/signup',
  WEBAUTHN_AUTHENTICATOR: '/account/authenticators/webauthn',
})

// Login server function
export const loginFn = createServerFn({ method: 'POST' })
  .inputValidator((data: { email: string; password: string }) => data)
  .handler(async ({ data }) => {
    try {
      const baseUrl = 'http://localhost:8000/_allauth/browser/v1'
      
      // Step 1: Get CSRF token by fetching the config endpoint first
      const configResponse = await fetch(baseUrl + URLs.CONFIG, {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Accept': 'application/json',
        },
      })

      // Extract cookies from the response
      const setCookieHeaders = configResponse.headers.getSetCookie()
      let csrfToken = ''
      let sessionCookie = ''

      // Parse cookies
      for (const cookie of setCookieHeaders) {
        if (cookie.startsWith('csrftoken=')) {
          csrfToken = cookie.split(';')[0].split('=')[1]
        }
        sessionCookie += cookie.split(';')[0] + '; '
      }

      console.log('CSRF Token:', csrfToken)
      console.log('Session Cookie:', sessionCookie)

      // Step 2: Make login request with CSRF token
      const response = await fetch(baseUrl + URLs.LOGIN, {
        method: 'POST',
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': csrfToken,
          'Cookie': sessionCookie,
          'Accept': 'application/json',
        },
        credentials: 'include',
      })

      // Log the response for debugging
      console.log('Response status:', response.status)
      console.log('Response headers:', Object.fromEntries(response.headers.entries()))

      // Check if response is JSON
      const contentType = response.headers.get('content-type')
      if (!contentType || !contentType.includes('application/json')) {
        const text = await response.text()
        console.error('Non-JSON response:', text.substring(0, 200))
        return { 
          success: false, 
          error: 'Server returned an invalid response. Check server logs.' 
        }
      }

      const result = await response.json()
      console.log('Auth response:', result)

      // Check if login was successful
      if (!response.ok || result.status !== 200) {
        return { 
          success: false, 
          error: result.errors?.[0]?.message || 'Invalid credentials' 
        }
      }

      // Create session with user data
      const session = await useAppSession()
      await session.update({
        userId: result.data?.user?.id || result.data?.id,
        email: result.data?.user?.email || data.email,
      })

      return { success: true, user: result.data }
    } catch (error) {
      console.error('Login error:', error)
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'An error occurred during login' 
      }
    }
  })

// Logout server function
export const logoutFn = createServerFn({ method: 'POST' }).handler(async () => {
  const session = await useAppSession()
  await session.clear()
  throw redirect({ to: '/' })
})

// Get current user from session
export const getCurrentUserFn = createServerFn({ method: 'GET' }).handler(
  async () => {
    const session = await useAppSession()
    const userId = session.data.userId
    const email = session.data.email

    if (!userId) {
      return null
    }

    // Return user data from session
    return {
      id: userId,
      email: email,
    }
  },
)
