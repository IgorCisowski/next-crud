"use client";
import React, { useState } from "react";
import Input from "./Input";
import Output from "./Output";

export default function Crud() {
  const [tasks, setTasks] = useState([]);
  const [value, setValue] = useState("");
  const [editValue, setEditValue] = useState("");

  //CREATE
  const handleCreate = () => {
    setTasks([...tasks, { id: Date.now(), title: value, status: false }]);
    setValue("");
  };
  // DELETE
  const handleDelete = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };
  //EDIT
  const handleEdit = (id) => {
    setTasks(
      tasks.map((item) => {
        if (item.id === id) {
          setEditValue(item.title);
          return {
            ...item,
            title: (item.title = editValue),
            status: !item.status,
          };
        }
        return item;
      })
    );
  };

  return (
    <section>
      <Input value={value} setValue={setValue} handleCreate={handleCreate} />
      <Output
        tasks={tasks}
        setEditValue={setEditValue}
        editValue={editValue}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </section>
  );
}
