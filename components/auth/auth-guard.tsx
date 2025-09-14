"use client"

import type React from "react"

import { useAuth } from "@/contexts/auth-context"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { LoadingSpinner } from "@/components/shared/loading-spinner"

interface AuthGuardProps {
  children: React.ReactNode
  requiredRole?: "admin" | "user"
  fallbackPath?: string
}

export function AuthGuard({ children, requiredRole, fallbackPath }: AuthGuardProps) {
  const { user, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading) {
      if (!user) {
        router.push(fallbackPath || "/")
        return
      }

      if (requiredRole && user.role !== requiredRole) {
        // Redirect to appropriate dashboard based on user role
        if (user.role === "admin") {
          router.push("/admin")
        } else {
          router.push("/dashboard")
        }
        return
      }
    }
  }, [user, isLoading, requiredRole, router, fallbackPath])

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center space-y-4">
          <LoadingSpinner size="lg" />
          <p className="text-muted-foreground">Đang tải...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  if (requiredRole && user.role !== requiredRole) {
    return null
  }

  return <>{children}</>
}
