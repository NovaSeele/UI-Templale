import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { PageHeader } from "@/components/shared/page-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Icons } from "@/components/shared/icons"

// Mock user data
const mockUsers = [
  {
    id: "1",
    name: "Nguyễn Văn A",
    email: "nguyenvana@example.com",
    role: "user",
    status: "active",
    joinDate: "2024-01-15",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "2",
    name: "Trần Thị B",
    email: "tranthib@example.com",
    role: "user",
    status: "active",
    joinDate: "2024-02-20",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "3",
    name: "Lê Văn C",
    email: "levanc@example.com",
    role: "admin",
    status: "active",
    joinDate: "2024-01-10",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export default function AdminUsersPage() {
  return (
    <DashboardLayout requiredRole="admin">
      <div className="space-y-6">
        <PageHeader title="Quản lý người dùng" description="Quản lý tất cả người dùng trong hệ thống">
          <Button className="bg-secondary hover:bg-secondary/90">
            <Icons.user className="mr-2 h-4 w-4" />
            Thêm người dùng
          </Button>
        </PageHeader>

        <Card>
          <CardHeader>
            <CardTitle>Danh sách người dùng</CardTitle>
            <CardDescription>Tổng cộng {mockUsers.length} người dùng</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockUsers.map((user) => (
                <div
                  key={user.id}
                  className="flex items-center justify-between p-4 rounded-lg border bg-card hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                      <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium">{user.name}</h3>
                      <p className="text-sm text-muted-foreground">{user.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Badge variant={user.role === "admin" ? "default" : "secondary"}>
                      {user.role === "admin" ? "Quản trị" : "Người dùng"}
                    </Badge>
                    <Badge variant={user.status === "active" ? "default" : "destructive"}>
                      {user.status === "active" ? "Hoạt động" : "Không hoạt động"}
                    </Badge>
                    <div className="text-sm text-muted-foreground">
                      Tham gia: {new Date(user.joinDate).toLocaleDateString("vi-VN")}
                    </div>
                    <Button variant="outline" size="sm">
                      <Icons.more className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
