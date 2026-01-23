import { createFileRoute, useRouter } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { logoutFn } from '@/server/authentication'
import { queryClient } from '@/router'

export const Route = createFileRoute('/__authed/dashboard/')({
  component: RouteComponent,
})

function RouteComponent() {
  const { user } = Route.useRouteContext()
  const router = useRouter()

  const handleLogout = async () => {
    try {
      await queryClient.invalidateQueries({ queryKey: ['user'] })
      await logoutFn()
    } catch (error) {
      router.navigate({
        to: '/login',
        search: {
          redirect: '',
        },
      })
    }
  }

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <Button onClick={handleLogout} variant="outlined">
            Logout
          </Button>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Welcome back!</h2>
          <p className="text-gray-700">Logged in as: {user.email}</p>
        </div>
      </div>
    </div>
  )
}
