"use client"

import { useAuth } from "@/contexts/auth-context"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

interface UseAuthRedirectOptions {
  requiredRole?: "admin" | "user"
  redirectTo?: string
  allowedRoles?: ("admin" | "user")[]
}

export function useAuthRedirect(options: UseAuthRedirectOptions = {}) {
  const { user, isLoading } = useAuth()
  const router = useRouter()
  const { requiredRole, redirectTo, allowedRoles } = options

  useEffect(() => {
    if (!isLoading) {
      // Not authenticated
      if (!user) {
        router.push(redirectTo || "/")
        return
      }

      // Check specific role requirement
      if (requiredRole && user.role !== requiredRole) {
        if (user.role === "admin") {
          router.push("/admin")
        } else {
          router.push("/dashboard")
        }
        return
      }

      // Check allowed roles
      if (allowedRoles && !allowedRoles.includes(user.role)) {
        if (user.role === "admin") {
          router.push("/admin")
        } else {
          router.push("/dashboard")
        }
        return
      }
    }
  }, [user, isLoading, requiredRole, redirectTo, allowedRoles, router])

  return {
    user,
    isLoading,
    isAuthenticated: !!user,
    hasRequiredRole: requiredRole ? user?.role === requiredRole : true,
  }
}
