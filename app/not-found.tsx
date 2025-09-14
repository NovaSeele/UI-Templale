import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <CardTitle className="text-4xl font-bold text-primary">404</CardTitle>
          <CardDescription className="text-lg">Trang không tìm thấy</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Xin lỗi, trang bạn đang tìm kiếm không tồn tại hoặc đã được di chuyển.
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
