"use client";
import React, { useState } from "react";
import { AiOutlineSave } from "react-icons/ai";
export default function Save({ task, handleSave }) {
  const [value, setValue] = useState(task.title);
  return (
    <div className="flex gap-2 w-full items-center py-1">
      <div className="relative overflow-hidden w-full">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="outline-none w-full px-2 py-1 rounded-md "
        />
      </div>
      <button
        onClick={() => handleSave(value, task.id)}
        className="hover:bg-slate-200 rounded-md duration-150 p-2 active:scale-95"
      >
        <AiOutlineSave size={20} />
      </button>
    </div>
  );
}
