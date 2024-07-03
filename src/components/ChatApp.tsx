/**
 * v0 by Vercel.
 * @see https://v0.dev/t/LOyl5Wee15h
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ImageRoot, Image, ImageFallback } from '@/components/ui/image'
import { TextField, TextFieldRoot } from './ui/textfield'
import { TextArea } from './ui/textarea'
import type { JSX } from 'solid-js'

export default function ChatApp() {
  return (
    <div class="flex h-screen">
      <aside class="w-80 border-r">
        <div class="space-y-4 p-4">
          <div class="flex items-center justify-between">
            <h2 class="font-heading text-xl font-bold">Messages</h2>
            <Button size="icon" variant="ghost">
              <PlusIcon></PlusIcon>
            </Button>
          </div>
          <div class="space-y-2">
            <Card class="p-2">
              <CardContent>
                <h3 class="font-heading font-semibold">Contact Name</h3>
                <p class="text-muted text-xs">Last message...</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </aside>
      <section class="flex w-full flex-col">
        <header class="border-b p-4">
          <h2 class="flex items-center gap-2 text-xl font-bold">
            <ImageRoot class="relative h-10 w-10 overflow-visible">
              <span class="absolute right-0 top-0 flex h-3 w-3 rounded-full bg-green-600" />
              <Image src="/placeholder-user.jpg" />
              <ImageFallback>U</ImageFallback>
            </ImageRoot>
            <div class="font-heading">
              Contact Name of
              <span class="block text-xs text-green-600">Online</span>
            </div>
          </h2>
        </header>
        <main class="flex-1 overflow-auto p-4">
          <div class="space-y-4">
            <div class="flex items-end gap-2">
              <div class="bg-primary/50 rounded-lg p-2">
                <p class="text-sm">Hello, how are you?</p>
              </div>
            </div>
            <div class="flex items-end justify-end gap-2">
              <div class="bg-primary rounded-lg p-2">
                <p class="text-sm">I'm fine, thanks for asking!</p>
              </div>
            </div>
          </div>
        </main>
        <footer class="border-t p-4">
          <div class="flex items-stretch gap-2">
            <div class="relative flex-1">
              <TextFieldRoot>
                <TextArea
                  class="bg-muted resize-none pr-12"
                  placeholder="Message #general"
                  autoResize={false}
                />
              </TextFieldRoot>
              <Button
                size="icon"
                variant="ghost"
                class="absolute right-2 top-1/2 -translate-y-1/2"
              >
                <PaperClipIcon />
              </Button>
            </div>

            <Button class="button-bezel h-auto rounded-full">
              <SendIcon />
            </Button>
          </div>
        </footer>
      </section>
    </div>
  )
}

function PlusIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="size-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 4.5v15m7.5-7.5h-15"
      />
    </svg>
  )
}

function PaperClipIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="size-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13"
      />
    </svg>
  )
}

function SendIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="size-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
      />
    </svg>
  )
}
