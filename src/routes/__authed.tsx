import { getCurrentUserFn } from '@/server/authentication'
import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/__authed')({
  component: AuthLayout,
  beforeLoad: async ({ location }) => {
    const user = await getCurrentUserFn()

    if (!user) {
      throw redirect({
        to: '/login',
        search: { redirect: location.href ?? "" },
      })
    }

    return { user }
  },
})

function AuthLayout() {
  return <Outlet />
}
