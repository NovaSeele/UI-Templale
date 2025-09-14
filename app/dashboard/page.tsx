import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { PageHeader } from "@/components/shared/page-header"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Icons } from "@/components/shared/icons"

// Mock posts data for user feed
const mockPosts = [
  {
    id: "1",
    author: {
      name: "Nguyễn Văn A",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    content: "Hôm nay thật là một ngày tuyệt vời! Tôi đã hoàn thành dự án mới và cảm thấy rất hài lòng với kết quả.",
    image: "/placeholder.svg?height=300&width=500&text=Beautiful+Sunset",
    timestamp: "2 giờ trước",
    likes: 24,
    comments: 8,
    shares: 3,
  },
  {
    id: "2",
    author: {
      name: "Trần Thị B",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    content:
      "Chia sẻ một số tips học lập trình hiệu quả cho những bạn mới bắt đầu. Hãy kiên trì và không ngừng thực hành!",
    timestamp: "4 giờ trước",
    likes: 42,
    comments: 15,
    shares: 7,
  },
  {
    id: "3",
    author: {
      name: "Lê Văn C",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    content: "Cuối tuần này sẽ đi du lịch Đà Lạt. Ai có kinh nghiệm thì chia sẻ cho mình những địa điểm đẹp nhé!",
    image: "/placeholder.svg?height=300&width=500&text=Da+Lat+City",
    timestamp: "6 giờ trước",
    likes: 18,
    comments: 12,
    shares: 2,
  },
]

export default function UserDashboard() {
  return (
    <DashboardLayout requiredRole="user">
      <div className="max-w-2xl mx-auto space-y-6">
        <PageHeader title="Trang chủ" description="Chào mừng bạn đến với mạng xã hội" />

        {/* Create Post Card */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex space-x-4">
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Your avatar" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-3">
                <Textarea placeholder="Bạn đang nghĩ gì?" className="min-h-[80px] resize-none" />
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm" className="text-muted-foreground">
                      <Icons.user className="mr-2 h-4 w-4" />
                      Ảnh/Video
                    </Button>
                    <Button variant="ghost" size="sm" className="text-muted-foreground">
                      <Icons.user className="mr-2 h-4 w-4" />
                      Cảm xúc
                    </Button>
                  </div>
                  <Button className="bg-secondary hover:bg-secondary/90">Đăng bài</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Posts Feed */}
        <div className="space-y-6">
          {mockPosts.map((post) => (
            <Card key={post.id}>
              <CardContent className="pt-6">
                {/* Post Header */}
                <div className="flex items-center space-x-3 mb-4">
                  <Avatar>
                    <AvatarImage src={post.author.avatar || "/placeholder.svg"} alt={post.author.name} />
                    <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-medium">{post.author.name}</h3>
                    <p className="text-sm text-muted-foreground">{post.timestamp}</p>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Icons.more className="h-4 w-4" />
                  </Button>
                </div>

                {/* Post Content */}
                <div className="space-y-4">
                  <p className="text-sm leading-relaxed">{post.content}</p>

                  {/* Post Image */}
                  {post.image && (
                    <div className="rounded-lg overflow-hidden">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt="Post content"
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  )}

                  {/* Post Stats */}
                  <div className="flex items-center justify-between text-sm text-muted-foreground border-t pt-3">
                    <div className="flex space-x-4">
                      <span>{post.likes} lượt thích</span>
                      <span>{post.comments} bình luận</span>
                      <span>{post.shares} chia sẻ</span>
                    </div>
                  </div>

                  {/* Post Actions */}
                  <div className="flex items-center justify-between border-t pt-3">
                    <Button variant="ghost" size="sm" className="flex-1">
                      <Icons.like className="mr-2 h-4 w-4" />
                      Thích
                    </Button>
                    <Button variant="ghost" size="sm" className="flex-1">
                      <Icons.comment className="mr-2 h-4 w-4" />
                      Bình luận
                    </Button>
                    <Button variant="ghost" size="sm" className="flex-1">
                      <Icons.share className="mr-2 h-4 w-4" />
                      Chia sẻ
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Simple User Message */}
        <Card className="bg-secondary/10 border-secondary/20">
          <CardContent className="pt-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-secondary mb-2">Đây là trang người dùng</h2>
              <p className="text-muted-foreground">
                Bạn đang truy cập với quyền người dùng thông thường. Tại đây bạn có thể xem và tương tác với các bài
                viết.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
