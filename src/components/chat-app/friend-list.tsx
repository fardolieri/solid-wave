/**
 * v0 by Vercel.
 * @see https://v0.dev/t/LOyl5Wee15h
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Image, ImageFallback, ImageRoot } from '@/components/ui/image'
import { For, Show } from 'solid-js'
import Avatar from './avatar'

export default function FriendList() {
  const friends = [
    {
      name: 'Tasha Texiera',
      online: true,
      lastMessage: "I'm right outside!",
      image: 'https://picsum.photos/id/100/200/300',
    },
    {
      name: 'Dan Mike',
      online: true,
      lastMessage: 'Did you finish the PR??',
      image: 'https://picsum.photos/id/201/200/300',
    },
    {
      name: 'Emanuel Esla',
      online: false,
      lastMessage: "Let's go together next time, okay? What do you say?",
      image: 'https://picsum.photos/id/202/200/300',
    },
    {
      name: 'Emily Ebb',
      online: false,
      lastMessage: 'Say hello!',
      image: 'https://picsum.photos/id/203/200/300',
    },
  ]

  return (
    <div class="flex w-[35ch] flex-col gap-8 text-foreground-2">
      <div class="flex items-center justify-between gap-2 px-2">
        <span class="text-foreground-900 font-heading text-xl font-semibold">
          Chats
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="size-6"
        >
          <path
            fill-rule="evenodd"
            d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <div class="flex flex-col gap-3">
        <For each={friends}>
          {(friend) => (
            <div
              class="flex gap-4 rounded-xl bg-background px-4 py-3"
              style="--background: var(--background-2)"
            >
              <Avatar online={friend.online} />
              {/* <ImageRoot class="relative h-12 w-12 overflow-visible">
                <Show when={friend.online}>
                  <span class="absolute right-0.5 top-0.5 flex h-3 w-3 rounded-full border-2 border-background-2/70 bg-green-600" />
                </Show>
                <Image
                  class="rounded-full border-2 border-accent"
                  src={friend.image}
                />
                <ImageFallback>U</ImageFallback>
              </ImageRoot> */}
              <div class="overflow-hidden">
                <div class="w-[20ch] overflow-hidden text-ellipsis whitespace-nowrap font-semibold">
                  {friend.name}
                </div>
                <div class="overflow-hidden text-ellipsis whitespace-nowrap text-sm text-foreground-2/60">
                  {friend.lastMessage}
                </div>
              </div>
              {/* <div class="flex items-center gap-2">
                <ImageRoot class="relative h-10 w-10 overflow-visible">
                  <span class="absolute right-0.5 top-0.5 flex h-[9px] w-[9px] rounded-full border-2 border-background bg-green-600" />
                  <Image
                    class="rounded-full border-2 border-accent"
                    src={friend.image}
                  />
                  <ImageFallback>U</ImageFallback>
                </ImageRoot>
                <div class="font-heading">{friend.name}</div>
              </div>
              <div class="text-foreground-900">{friend.lastMessage}</div> */}
            </div>
          )}
        </For>
      </div>
    </div>
  )
}
