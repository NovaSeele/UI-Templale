import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Icons } from "@/components/shared/icons"

export default function UnauthorizedPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <div className="mx-auto w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center mb-4">
            <Icons.security className="w-6 h-6 text-destructive" />
          </div>
          <CardTitle className="text-2xl font-bold text-destructive">Không có quyền truy cập</CardTitle>
          <CardDescription className="text-lg">Bạn không có quyền truy cập vào trang này</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Trang này yêu cầu quyền truy cập đặc biệt. Vui lòng liên hệ quản trị viên nếu bạn cho rằng đây là lỗi.
          </p>
          <div className="space-y-2">
            <Link href="/">
              <Button className="w-full bg-secondary hover:bg-secondary/90">Về trang chủ</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
