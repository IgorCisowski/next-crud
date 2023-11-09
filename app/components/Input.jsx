import React from "react";
export default function Input({
  value,
  setValue,
  handleCreate,
  handleKeyDown,
}) {
  return (
    <div className="mb-4">
      <h1 className="w-full text-center mb-2">Todo List App</h1>
      <input
        placeholder="Type here"
        className="border-black border-2 outline-none w-full pl-2 py-2 text-sm mb-3"
        type="text"
        onChange={(e) => {
          setValue(e.target.value);
        }}
        value={value}
        onKeyDown={handleKeyDown}
      />
      <button
        className="w-full text-center font-semibold py-3 active:scale-95 capitalize text-white bg-violet-700 rounded-md duration-100"
        onClick={handleCreate}
      >
        Add new task +
      </button>
    </div>
  );
}
