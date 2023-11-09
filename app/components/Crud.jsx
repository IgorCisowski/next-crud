"use client";
import React, { useState } from "react";
import Input from "./Input";
import Output from "./Output";

export default function Crud() {
  const [tasks, setTasks] = useState([]);
  const [value, setValue] = useState("");

  //CREATE
  const handleCreate = () => {
    if (value === "") {
      alert("Please enter a task first");
      return false;
    }
    setTasks([...tasks, { id: Date.now(), title: value, isEditing: false }]);
    setValue("");
  };
  //CREATE ON KEYDOWN
  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      handleCreate();
      e.target.blur();
    }
  };
  // DELETE
  const handleDelete = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };
  // EDIT TASK
  const handleEdit = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          task.isEditing = !task.isEditing;
        }
        return task;
      })
    );
  };
  // SAVE EDITED TASK
  const handleSave = (value, id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          task.isEditing = !task.isEditing;
          task.title = value;
        }
        return task;
      })
    );
  };

  return (
    <section className="mt-10">
      <Input
        handleKeyDown={handleKeyDown}
        value={value}
        setValue={setValue}
        handleCreate={handleCreate}
      />
      <Output
        tasks={tasks}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        handleSave={handleSave}
      />
    </section>
  );
}
