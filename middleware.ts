import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Get user data from cookie or header (in real app, this would be from JWT token)
  const userCookie = request.cookies.get("currentUser")
  let user = null

  if (userCookie) {
    try {
      user = JSON.parse(userCookie.value)
    } catch (error) {
      // Invalid cookie, clear it
      const response = NextResponse.redirect(new URL("/", request.url))
      response.cookies.delete("currentUser")
      return response
    }
  }

  // Public routes that don't require authentication
  const publicRoutes = ["/"]

  // Admin-only routes
  const adminRoutes = ["/admin", "/admin/users", "/admin/posts"]

  // User-only routes
  const userRoutes = ["/dashboard"]

  // Routes that require authentication but are accessible to both roles
  const protectedRoutes = ["/messages", "/settings"]

  // Check if route is public
  if (publicRoutes.includes(pathname)) {
    // If user is already logged in, redirect to appropriate dashboard
    if (user) {
      if (user.role === "admin") {
        return NextResponse.redirect(new URL("/admin", request.url))
      } else {
        return NextResponse.redirect(new URL("/dashboard", request.url))
      }
    }
    return NextResponse.next()
  }

  // Check if user is authenticated
  if (!user) {
    return NextResponse.redirect(new URL("/", request.url))
  }

  // Check admin routes
  if (adminRoutes.some((route) => pathname.startsWith(route))) {
    if (user.role !== "admin") {
      return NextResponse.redirect(new URL("/dashboard", request.url))
    }
    return NextResponse.next()
  }

  // Check user routes
  if (userRoutes.includes(pathname)) {
    if (user.role !== "user") {
      return NextResponse.redirect(new URL("/admin", request.url))
    }
    return NextResponse.next()
  }

  // Protected routes accessible to both roles
  if (protectedRoutes.includes(pathname)) {
    return NextResponse.next()
  }

  // Default: allow access
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    "/((?!api|_next/static|_next/image|favicon.ico|public).*)",
  ],
}
