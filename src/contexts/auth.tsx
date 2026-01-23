import { createContext, useContext, ReactNode } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getCurrentUserFn } from '@/server/authentication'

type User = {
  id: string
  email: string
  role?: string
}

type AuthContextType = {
  user: User | null
  isLoading: boolean
  refetch: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const { data: user, isLoading, refetch } = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const userData = await getCurrentUserFn()
      if (userData && userData.id && userData.email) {
        return userData as User
      }
      return null
    },
    staleTime: 5 * 60 * 1000,
    retry: false,
  })

  const handleRefetch = async () => {
    await refetch()
  }

  return (
    <AuthContext.Provider value={{ user: user ?? null, isLoading, refetch: handleRefetch }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}