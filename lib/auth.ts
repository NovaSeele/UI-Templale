// Mock authentication data and utilities
export interface User {
  id: string
  email: string
  name: string
  role: "admin" | "user"
  avatar?: string
}

// Mock users data
export const mockUsers: User[] = [
  {
    id: "1",
    email: "admin@example.com",
    name: "Admin User",
    role: "admin",
    avatar: "/admin-avatar.png",
  },
  {
    id: "2",
    email: "user@example.com",
    name: "Regular User",
    role: "user",
    avatar: "/diverse-user-avatars.png",
  },
]

// Mock authentication functions
export const authenticateUser = (email: string, password: string): User | null => {
  // Simple mock authentication - in real app, this would be secure
  const user = mockUsers.find((u) => u.email === email)
  if (user && password === "password123") {
    return user
  }
  return null
}

export const getCurrentUser = (): User | null => {
  if (typeof window === "undefined") return null

  const userData = localStorage.getItem("currentUser")
  return userData ? JSON.parse(userData) : null
}

export const setCurrentUser = (user: User | null): void => {
  if (typeof window === "undefined") return

  if (user) {
    localStorage.setItem("currentUser", JSON.stringify(user))
  } else {
    localStorage.removeItem("currentUser")
  }
}

export const logout = (): void => {
  setCurrentUser(null)
}
