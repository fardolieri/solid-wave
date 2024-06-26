import { createSignal } from "solid-js";

export default function Home() {
  const [items, setItems] = createSignal<string[]>([]);

  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <input
        type="text"
        placeholder="Add an item"
        onKeyPress={(e) => {
          if (e.key === "Enter" && e.currentTarget.value.trim()) {
            setItems((items) => [...items, e.currentTarget.value]);
            e.currentTarget.value = "";
          }
        }}
      />
      <ul class="list-disc list-inside">
        {items().map((item) => (
          <li class="text-xl">{item}</li>
        ))}
      </ul>
    </main>
  );
}
