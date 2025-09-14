import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { PageHeader } from "@/components/shared/page-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Icons } from "@/components/shared/icons"

// Mock conversations data
const mockConversations = [
  {
    id: "1",
    name: "Nguyễn Văn A",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Chào bạn, hôm nay thế nào?",
    timestamp: "2 phút trước",
    unread: true,
  },
  {
    id: "2",
    name: "Trần Thị B",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Cảm ơn bạn đã chia sẻ!",
    timestamp: "1 giờ trước",
    unread: false,
  },
  {
    id: "3",
    name: "Lê Văn C",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Hẹn gặp lại bạn sau nhé",
    timestamp: "3 giờ trước",
    unread: false,
  },
]

// Mock messages for selected conversation
const mockMessages = [
  {
    id: "1",
    sender: "Nguyễn Văn A",
    content: "Chào bạn!",
    timestamp: "10:30",
    isOwn: false,
  },
  {
    id: "2",
    sender: "Bạn",
    content: "Chào! Hôm nay thế nào?",
    timestamp: "10:32",
    isOwn: true,
  },
  {
    id: "3",
    sender: "Nguyễn Văn A",
    content: "Hôm nay tôi khá tốt, cảm ơn bạn đã hỏi thăm",
    timestamp: "10:35",
    isOwn: false,
  },
]

export default function MessagesPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <PageHeader title="Tin nhắn" description="Trò chuyện với bạn bè và đồng nghiệp" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px]">
          {/* Conversations List */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle>Cuộc trò chuyện</CardTitle>
              <div className="relative">
                <Icons.search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="Tìm kiếm tin nhắn..." className="pl-10" />
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-1">
                {mockConversations.map((conversation) => (
                  <div
                    key={conversation.id}
                    className="flex items-center space-x-3 p-3 hover:bg-muted/50 cursor-pointer transition-colors"
                  >
                    <Avatar>
                      <AvatarImage src={conversation.avatar || "/placeholder.svg"} alt={conversation.name} />
                      <AvatarFallback>{conversation.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium truncate">{conversation.name}</h3>
                        <span className="text-xs text-muted-foreground">{conversation.timestamp}</span>
                      </div>
                      <p className="text-sm text-muted-foreground truncate">{conversation.lastMessage}</p>
                    </div>
                    {conversation.unread && <div className="w-2 h-2 bg-secondary rounded-full"></div>}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Chat Area */}
          <Card className="lg:col-span-2">
            <CardHeader className="border-b">
              <div className="flex items-center space-x-3">
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Nguyễn Văn A" />
                  <AvatarFallback>A</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg">Nguyễn Văn A</CardTitle>
                  <CardDescription>Đang hoạt động</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex flex-col h-[400px] p-0">
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {mockMessages.map((message) => (
                  <div key={message.id} className={`flex ${message.isOwn ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                        message.isOwn ? "bg-secondary text-secondary-foreground" : "bg-muted text-muted-foreground"
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                      <p className="text-xs opacity-70 mt-1">{message.timestamp}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="border-t p-4">
                <div className="flex space-x-2">
                  <Input placeholder="Nhập tin nhắn..." className="flex-1" />
                  <Button className="bg-secondary hover:bg-secondary/90">
                    <Icons.messages className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
