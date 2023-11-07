import React from "react";
import { BsFillPlusSquareFill } from "react-icons/bs";
export default function Input({ value, setValue, handleCreate }) {
  return (
    <div>
      <input
        className="border-black border-2 outline-none"
        type="text"
        onChange={(e) => {
          setValue(e.target.value);
        }}
        value={value}
      />
      <button className="active:scale-95" onClick={handleCreate}>
        <BsFillPlusSquareFill />
      </button>
    </div>
  );
}
