import React from "react";
import { BiEditAlt } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";
import { AiOutlineSave } from "react-icons/ai";

export default function Output({
  tasks,
  setEditValue,
  editValue,
  handleDelete,
  handleEdit,
}) {
  return (
    <div>
      <div className="w-full flex justify-between px-3 py-3 rounded-md bg-gray-200 mb-4">
        <p className="capitalize font-semibold">task</p>
        <p className="capitalize font-semibold">action</p>
      </div>
      <ul>
        {tasks.map(({ id, title, status }) => {
          return (
            <div
              key={id}
              className="w-full flex gap-3 justify-between items-center px-2"
            >
              <div className="py-1 mb-2  flex-grow relative overflow-hidden">
                <input
                  className={`${status ? "block" : "hidden"}`}
                  type="text"
                  onChange={(e) => {
                    setEditValue(e.target.value);
                  }}
                  value={editValue}
                />

                <li className={`${status ? "hidden" : "block"}`}>{title}</li>
                <div
                  className={`${
                    status
                      ? "translate-x-0 duration-150"
                      : "-translate-x-full duration-150"
                  } w-full h-[2px] bg-black absolute`}
                ></div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => handleEdit(id)}
                  className="hover:bg-slate-300 rounded-md duration-150 p-2 active:scale-95"
                >
                  <AiOutlineSave
                    size={20}
                    className={`${status ? "block" : "hidden"}`}
                  />
                  <BiEditAlt
                    size={20}
                    className={`${status ? "hidden" : "block"} text-cyan-600`}
                  />
                </button>
                <button
                  onClick={() => handleDelete(id)}
                  className="hover:bg-slate-300 rounded-md duration-150 p-2 active:scale-95"
                >
                  <BsTrash size={20} className="text-red-600" />
                </button>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
