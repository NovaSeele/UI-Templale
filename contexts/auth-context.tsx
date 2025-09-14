"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { type User, getCurrentUser, setCurrentUser } from "@/lib/auth"

interface AuthContextType {
  user: User | null
  login: (user: User) => void
  logout: () => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Load user from localStorage on mount
    const currentUser = getCurrentUser()
    setUser(currentUser)

    if (currentUser) {
      document.cookie = `currentUser=${JSON.stringify(currentUser)}; path=/; max-age=86400`
    }

    setIsLoading(false)
  }, [])

  const login = (user: User) => {
    setUser(user)
    setCurrentUser(user)
    document.cookie = `currentUser=${JSON.stringify(user)}; path=/; max-age=86400`
  }

  const logout = () => {
    setUser(null)
    setCurrentUser(null)
    document.cookie = "currentUser=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT"
  }

  return <AuthContext.Provider value={{ user, login, logout, isLoading }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
