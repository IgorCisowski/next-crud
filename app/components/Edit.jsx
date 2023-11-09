import React from "react";
import { BiEditAlt } from "react-icons/bi";

export default function Edit({ task, handleEdit }) {
  return (
    <div
      key={task.id}
      className="w-full flex justify-between items-center py-1"
    >
      <li className="w-full px-2">{task.title}</li>
      <button
        onClick={() => handleEdit(task.id)}
        className="hover:bg-slate-200 rounded-md duration-150 p-2 active:scale-95"
      >
        <BiEditAlt size={20} className="text-cyan-600" />
      </button>
    </div>
  );
}
