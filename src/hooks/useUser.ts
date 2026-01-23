import { useAuth } from '@/contexts/auth'

export function useUser() {
  const { user, isLoading } = useAuth()
  
  return {
    user,
    isLoading,
    isAuthenticated: !!user,
  }
}
