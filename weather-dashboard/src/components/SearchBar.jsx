import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const city = input.trim();
    if (city) {
      onSearch(city);
      setInput("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-2 mb-4 items-center"
      autoComplete="off"
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter city"
        className="flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-black dark:text-white dark:bg-gray-800 placeholder-gray-500 dark:placeholder-gray-400 transition duration-200"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400 text-white rounded-md transition duration-200"
      >
        Search
      </button>
    </form>
  );
}
