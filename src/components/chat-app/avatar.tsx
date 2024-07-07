import { Show } from 'solid-js'
import { Image, ImageFallback, ImageRoot } from '../ui/image'

export default function Avatar(props: { class?: string; online?: boolean }) {
  const random = Math.floor(Math.random() * 1000)
    .toString()
    .padStart(3, '0')

  return (
    <ImageRoot
      class={`${props?.class} relative h-12 w-12 cursor-pointer select-none overflow-visible`}
    >
      <Show when={props?.online}>
        <span class="absolute bottom-0 right-0 flex h-5 w-5 rounded-full border-4 border-background bg-green-600" />
      </Show>
      <Image
        class="rounded-full border-2 border-accent"
        src={`https://picsum.photos/id/${random}/200/300`}
      />
      <ImageFallback class="rounded-full border-2 border-accent bg-slate-200 text-slate-700">
        ?
      </ImageFallback>
    </ImageRoot>
  )
}
