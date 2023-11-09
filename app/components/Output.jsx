import React from "react";
import { BsTrash } from "react-icons/bs";
import Save from "./Save";
import Edit from "./Edit";

export default function Output({
  tasks,
  handleDelete,
  handleEdit,
  handleSave,
}) {
  return (
    // CONTAINER
    <div>
      {/* HEADING */}
      <div className="w-full flex justify-between px-3 py-3 rounded-md bg-slate-200 mb-4">
        <p className="capitalize font-semibold">task</p>
        <p className="capitalize font-semibold">action</p>
      </div>
      {/* OUTPUT */}
      <ul>
        {tasks.map((task) => {
          return (
            <div key={task.id} className="flex relative overflow-hidden">
              {task.isEditing ? (
                <Save handleSave={handleSave} task={task} />
              ) : (
                <Edit handleEdit={handleEdit} task={task} />
              )}
              <div
                className={`${
                  task.isEditing
                    ? "translate-x-0 duration-200"
                    : "-translate-x-full duration-200"
                } w-full h-[2px] bg-black absolute bottom-0`}
              ></div>
              <button
                onClick={() => handleDelete(task.id)}
                className="hover:bg-slate-200 rounded-md duration-150 p-2 active:scale-95"
              >
                <BsTrash size={20} className="text-red-600" />
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
