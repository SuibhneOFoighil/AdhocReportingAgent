import { useState } from 'react'
import { Paperclip, ArrowUp } from 'lucide-react'
import { Button } from '~/components/ui/button'
import { cn } from '~/lib/utils'

interface MessageInputProps {
  onSubmit: (message: string) => void;
}

export function MessageInput({ onSubmit }: MessageInputProps) {
  const [message, setMessage] = useState('')

  const handleSubmit = () => {
    if (message.trim()) {
      onSubmit(message.trim())
      setMessage('')
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit()
    }
  }

  return (
    <div className="relative flex w-full max-w-[600px] items-center gap-2 rounded-xl border bg-background p-2">
      {/* <Button
        variant="ghost"
        size="icon"
        className="h-9 w-9 shrink-0 rounded-full"
        onClick={() => console.log('Attachment clicked')}
      >
        <Paperclip className="h-5 w-5 text-muted-foreground" />
        <span className="sr-only">Attach file</span>
      </Button> */}
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Ask a follow up..."
        className={cn(
          "min-h-[40px] w-full resize-none bg-transparent px-2 py-2",
          "placeholder:text-muted-foreground focus:outline-none"
        )}
        style={{
          height: 'auto',
          maxHeight: '200px'
        }}
        rows={1}
      />
      <Button
        variant="ghost"
        size="icon"
        className="h-9 w-9 shrink-0 rounded-full"
        onClick={handleSubmit}
        disabled={!message.trim()}
      >
        <ArrowUp className="h-5 w-5 text-muted-foreground" />
        <span className="sr-only">Send message</span>
      </Button>
    </div>
  )
}