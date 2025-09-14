import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { PageHeader } from "@/components/shared/page-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Icons } from "@/components/shared/icons"

export default function AdminDashboard() {
  return (
    <DashboardLayout requiredRole="admin">
      <div className="space-y-6">
        <PageHeader title="Bảng điều khiển Admin" description="Chào mừng đến với trang quản trị hệ thống" />

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Tổng người dùng</CardTitle>
              <Icons.users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,234</div>
              <p className="text-xs text-muted-foreground">+20.1% từ tháng trước</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Bài viết</CardTitle>
              <Icons.posts className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">567</div>
              <p className="text-xs text-muted-foreground">+12.5% từ tháng trước</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Tin nhắn</CardTitle>
              <Icons.messages className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,345</div>
              <p className="text-xs text-muted-foreground">+8.3% từ tháng trước</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Hoạt động</CardTitle>
              <Icons.analytics className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">89.2%</div>
              <p className="text-xs text-muted-foreground">+2.1% từ tháng trước</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Hoạt động gần đây</CardTitle>
              <CardDescription>Các hoạt động mới nhất trong hệ thống</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary">
                    <Icons.user className="h-4 w-4 text-secondary-foreground" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Người dùng mới đăng ký</p>
                    <p className="text-xs text-muted-foreground">2 phút trước</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary">
                    <Icons.posts className="h-4 w-4 text-secondary-foreground" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Bài viết mới được tạo</p>
                    <p className="text-xs text-muted-foreground">5 phút trước</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary">
                    <Icons.messages className="h-4 w-4 text-secondary-foreground" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Tin nhắn mới</p>
                    <p className="text-xs text-muted-foreground">10 phút trước</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quản lý nhanh</CardTitle>
              <CardDescription>Các tác vụ quản lý thường dùng</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded-lg bg-card hover:bg-muted/50 cursor-pointer transition-colors">
                  <div className="flex items-center space-x-3">
                    <Icons.users className="h-5 w-5 text-secondary" />
                    <span className="font-medium">Quản lý người dùng</span>
                  </div>
                  <span className="text-sm text-muted-foreground">1,234 người dùng</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-card hover:bg-muted/50 cursor-pointer transition-colors">
                  <div className="flex items-center space-x-3">
                    <Icons.posts className="h-5 w-5 text-secondary" />
                    <span className="font-medium">Quản lý bài viết</span>
                  </div>
                  <span className="text-sm text-muted-foreground">567 bài viết</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-card hover:bg-muted/50 cursor-pointer transition-colors">
                  <div className="flex items-center space-x-3">
                    <Icons.security className="h-5 w-5 text-secondary" />
                    <span className="font-medium">Bảo mật hệ thống</span>
                  </div>
                  <span className="text-sm text-muted-foreground">Tốt</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Simple Admin Message */}
        <Card className="bg-secondary/10 border-secondary/20">
          <CardContent className="pt-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-secondary mb-2">Đây là trang Admin</h2>
              <p className="text-muted-foreground">
                Bạn đang truy cập với quyền quản trị viên. Tại đây bạn có thể quản lý toàn bộ hệ thống.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
