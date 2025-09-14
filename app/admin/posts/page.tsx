import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { PageHeader } from "@/components/shared/page-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Icons } from "@/components/shared/icons"

// Mock posts data
const mockPosts = [
  {
    id: "1",
    title: "Bài viết đầu tiên",
    author: "Nguyễn Văn A",
    content: "Đây là nội dung của bài viết đầu tiên...",
    status: "published",
    createdAt: "2024-03-15",
    likes: 25,
    comments: 8,
  },
  {
    id: "2",
    title: "Chia sẻ kinh nghiệm",
    author: "Trần Thị B",
    content: "Tôi muốn chia sẻ một số kinh nghiệm...",
    status: "published",
    createdAt: "2024-03-14",
    likes: 42,
    comments: 15,
  },
  {
    id: "3",
    title: "Bài viết chờ duyệt",
    author: "Lê Văn C",
    content: "Đây là bài viết đang chờ được duyệt...",
    status: "pending",
    createdAt: "2024-03-16",
    likes: 0,
    comments: 0,
  },
]

export default function AdminPostsPage() {
  return (
    <DashboardLayout requiredRole="admin">
      <div className="space-y-6">
        <PageHeader title="Quản lý bài viết" description="Quản lý tất cả bài viết trong hệ thống">
          <Button className="bg-secondary hover:bg-secondary/90">
            <Icons.posts className="mr-2 h-4 w-4" />
            Tạo bài viết
          </Button>
        </PageHeader>

        <Card>
          <CardHeader>
            <CardTitle>Danh sách bài viết</CardTitle>
            <CardDescription>Tổng cộng {mockPosts.length} bài viết</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockPosts.map((post) => (
                <div key={post.id} className="p-4 rounded-lg border bg-card hover:bg-muted/50 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-medium text-lg mb-1">{post.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Tác giả: {post.author} • {new Date(post.createdAt).toLocaleDateString("vi-VN")}
                      </p>
                      <p className="text-sm text-muted-foreground line-clamp-2">{post.content}</p>
                    </div>
                    <div className="flex items-center space-x-2 ml-4">
                      <Badge variant={post.status === "published" ? "default" : "secondary"}>
                        {post.status === "published" ? "Đã xuất bản" : "Chờ duyệt"}
                      </Badge>
                      <Button variant="outline" size="sm">
                        <Icons.more className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Icons.like className="h-4 w-4" />
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icons.comment className="h-4 w-4" />
                      <span>{post.comments}</span>
                    </div>
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
