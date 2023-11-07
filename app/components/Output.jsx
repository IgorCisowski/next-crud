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
      <ul>
        {tasks.map(({ id, title, status }) => {
          return (
            <div key={id}>
              <div>
                <input
                  className={`${status ? "block" : "hidden"}`}
                  type="text"
                  onChange={(e) => {
                    setEditValue(e.target.value);
                  }}
                  value={editValue}
                />
                <li className={`${status ? "hidden" : "block"}`}>{title}</li>
              </div>
              <div>
                <button onClick={() => handleEdit(id)}>
                  <AiOutlineSave className={`${status ? "block" : "hidden"}`} />
                  <BiEditAlt className={`${status ? "hidden" : "block"}`} />
                </button>
                <button onClick={() => handleDelete(id)}>
                  <BsTrash />
                </button>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
