"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/shared/icons"
import { useAuth } from "@/contexts/auth-context"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface SidebarItem {
  title: string
  href: string
  icon: keyof typeof Icons
  roles?: ("admin" | "user")[]
}

const sidebarItems: SidebarItem[] = [
  {
    title: "Trang chủ",
    href: "/dashboard",
    icon: "home",
    roles: ["user"],
  },
  {
    title: "Bảng điều khiển",
    href: "/admin",
    icon: "analytics",
    roles: ["admin"],
  },
  {
    title: "Người dùng",
    href: "/admin/users",
    icon: "users",
    roles: ["admin"],
  },
  {
    title: "Bài viết",
    href: "/admin/posts",
    icon: "posts",
    roles: ["admin"],
  },
  {
    title: "Tin nhắn",
    href: "/messages",
    icon: "messages",
  },
  {
    title: "Cài đặt",
    href: "/settings",
    icon: "settings",
  },
]

export function Sidebar() {
  const { user } = useAuth()
  const pathname = usePathname()

  const filteredItems = sidebarItems.filter(
    (item) => !item.roles || item.roles.includes(user?.role as "admin" | "user"),
  )

  return (
    <div className="flex h-full w-64 flex-col bg-sidebar text-sidebar-foreground">
      <div className="flex-1 overflow-auto py-4">
        <nav className="space-y-1 px-3">
          {filteredItems.map((item) => {
            const Icon = Icons[item.icon]
            const isActive = pathname === item.href

            return (
              <Link key={item.href} href={item.href}>
                <Button
                  variant="ghost"
                  className={cn(
                    "w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                    isActive &&
                      "bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary hover:text-sidebar-primary-foreground",
                  )}
                >
                  <Icon className="mr-3 h-5 w-5" />
                  {item.title}
                </Button>
              </Link>
            )
          })}
        </nav>
      </div>

      {/* User Info */}
      <div className="border-t border-sidebar-border p-4">
        <div className="flex items-center space-x-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sidebar-primary text-sidebar-primary-foreground">
            {user?.name?.charAt(0).toUpperCase()}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">{user?.name}</p>
            <p className="text-xs text-sidebar-foreground/70 truncate">
              {user?.role === "admin" ? "Quản trị viên" : "Người dùng"}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
