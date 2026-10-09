import { useState } from "react";

type TodoFormProps = {
  onAdd: (text: string) => void;
};

function TodoForm({ onAdd }: TodoFormProps) {
  const [text, setText] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!text.trim()) return;

    onAdd(text);
    setText("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task..."
        className="flex-1 rounded-lg border px-3 py-2"
      />

      <button
        type="submit"
        className="rounded-lg bg-blue-500 px-4 py-2 text-white"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;