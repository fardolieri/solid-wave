import { For } from 'solid-js'
import { createLocalStore } from '../../utils/create-local-store'

export default function TodoList() {
  const [todos, setTodos] = createLocalStore<string[]>('todo list', [])

  return (
    <main class="mx-auto p-4 text-center text-gray-700">
      <input
        type="text"
        placeholder="Add an item"
        onKeyPress={(e) => {
          if (e.key === 'Enter' && e.currentTarget.value.trim()) {
            setTodos((items) => [...items, e.currentTarget.value])
            e.currentTarget.value = ''
          }
        }}
      />

      <ul class="flex flex-col items-center gap-2">
        <For each={todos}>
          {(item) => (
            <li class="flex items-center gap-2">
              {item}
              <button
                class="p-1 hover:bg-gray-100"
                onClick={() => setTodos(todos.filter((i) => i !== item))}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </li>
          )}
        </For>
      </ul>
    </main>
  )
}
