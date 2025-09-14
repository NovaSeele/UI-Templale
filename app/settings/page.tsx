"use client"

import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { PageHeader } from "@/components/shared/page-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useAuth } from "@/contexts/auth-context"

export default function SettingsPage() {
  const { user } = useAuth()

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <PageHeader title="Cài đặt" description="Quản lý thông tin cá nhân và tùy chọn tài khoản" />

        <div className="grid gap-6">
          {/* Profile Settings */}
          <Card>
            <CardHeader>
              <CardTitle>Thông tin cá nhân</CardTitle>
              <CardDescription>Cập nhật thông tin hồ sơ của bạn</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage src={user?.avatar || "/placeholder.svg"} alt={user?.name} />
                  <AvatarFallback className="text-lg">{user?.name?.charAt(0).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div>
                  <Button variant="outline">Thay đổi ảnh đại diện</Button>
                  <p className="text-sm text-muted-foreground mt-1">JPG, GIF hoặc PNG. Tối đa 1MB.</p>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Họ và tên</Label>
                  <Input id="name" defaultValue={user?.name} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue={user?.email} />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Giới thiệu bản thân</Label>
                <Textarea id="bio" placeholder="Viết vài dòng về bản thân..." className="min-h-[100px]" />
              </div>

              <Button className="bg-secondary hover:bg-secondary/90">Lưu thay đổi</Button>
            </CardContent>
          </Card>

          {/* Privacy Settings */}
          <Card>
            <CardHeader>
              <CardTitle>Quyền riêng tư</CardTitle>
              <CardDescription>Quản lý ai có thể xem thông tin của bạn</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Hồ sơ công khai</Label>
                  <p className="text-sm text-muted-foreground">Cho phép mọi người xem hồ sơ của bạn</p>
                </div>
                <Switch />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Hiển thị trạng thái hoạt động</Label>
                  <p className="text-sm text-muted-foreground">Cho phép bạn bè xem khi bạn đang online</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Nhận tin nhắn từ người lạ</Label>
                  <p className="text-sm text-muted-foreground">Cho phép người không phải bạn bè gửi tin nhắn</p>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>

          {/* Notification Settings */}
          <Card>
            <CardHeader>
              <CardTitle>Thông báo</CardTitle>
              <CardDescription>Chọn loại thông báo bạn muốn nhận</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Thông báo email</Label>
                  <p className="text-sm text-muted-foreground">Nhận thông báo qua email</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Thông báo bình luận</Label>
                  <p className="text-sm text-muted-foreground">Thông báo khi có người bình luận bài viết của bạn</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Thông báo tin nhắn</Label>
                  <p className="text-sm text-muted-foreground">Thông báo khi có tin nhắn mới</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
