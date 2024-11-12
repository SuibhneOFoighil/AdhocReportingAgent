import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar"
import { cn } from "~/lib/utils"

interface MessageProps {
  content: string
  sender: string
  timestamp: string
  isUser?: boolean
}

export function Message({
  content = "Hello, how can I help you today?",
  sender = "AI Assistant",
  timestamp = "2:30 PM",
  isUser = false
}: MessageProps) {
  return (
    <div className={cn(
      "flex w-full max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl gap-3 mb-4",
      isUser ? "ml-auto" : "mr-auto"
    )}>
      {!isUser && (
        <Avatar className="w-8 h-8">
          <AvatarImage src="/placeholder.svg?height=32&width=32" alt={sender} />
          <AvatarFallback>{sender ? sender[0] : 'A'}</AvatarFallback>
        </Avatar>
      )}
      <div className={cn(
        "flex flex-col",
        isUser ? "items-end" : "items-start"
      )}>
        <div className={cn(
          "rounded-lg px-4 py-2 max-w-full",
          isUser ? "bg-primary text-primary-foreground" : "bg-muted"
        )}>
          <p className="text-sm">{content}</p>
        </div>
        <div className="flex items-center mt-1 space-x-2">
          <span className="text-xs text-muted-foreground">{sender}</span>
          <span className="text-xs text-muted-foreground">{timestamp}</span>
        </div>
      </div>
      {isUser && (
        <Avatar className="w-8 h-8">
          <AvatarImage src="/placeholder.svg?height=32&width=32" alt={sender} />
          <AvatarFallback>{sender ? sender[0] : 'U'}</AvatarFallback>
        </Avatar>
      )}
    </div>
  )
}