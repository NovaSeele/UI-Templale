// Utility functions for route management and role checking

export interface RouteConfig {
  path: string
  roles?: ("admin" | "user")[]
  requireAuth?: boolean
}

export const routes: RouteConfig[] = [
  { path: "/", requireAuth: false },
  { path: "/admin", roles: ["admin"], requireAuth: true },
  { path: "/admin/users", roles: ["admin"], requireAuth: true },
  { path: "/admin/posts", roles: ["admin"], requireAuth: true },
  { path: "/dashboard", roles: ["user"], requireAuth: true },
  { path: "/messages", requireAuth: true },
  { path: "/settings", requireAuth: true },
]

export function getRouteConfig(path: string): RouteConfig | undefined {
  return routes.find((route) => {
    if (route.path === path) return true
    if (path.startsWith(route.path + "/")) return true
    return false
  })
}

export function canAccessRoute(path: string, userRole?: "admin" | "user"): boolean {
  const config = getRouteConfig(path)

  if (!config) return true // Unknown routes are allowed by default

  if (config.requireAuth && !userRole) return false

  if (config.roles && userRole && !config.roles.includes(userRole)) return false

  return true
}

export function getDefaultRouteForRole(role: "admin" | "user"): string {
  return role === "admin" ? "/admin" : "/dashboard"
}

export function isPublicRoute(path: string): boolean {
  const config = getRouteConfig(path)
  return !config?.requireAuth
}
