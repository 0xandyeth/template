import React, { useCallback, useState } from "react";

export default function Challenge() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleChangeEvent = (e) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  };

  const addTask = useCallback(() => {
    console.log("adding task...");
    const items = [
      {
        id: Date.now(),
        content: inputValue
      },
      ...tasks
    ];
    console.log("new tasks");
    setTasks(items);

    setInputValue("");
  }, [tasks, inputValue]);

  const deleteTask = (id) => {
    const newTasks = tasks.filter((item) => item.id !== id);
    setTasks(newTasks);
  };

  return (
    <div className="bg-white mt-[60px]">
      <div className="app-header">
        <input placeholder="Add task.." onChange={handleChangeEvent} className="text-gray-300"/>
        <button onClick={() => addTask} className="bg-black">Add</button>
      </div>
      <div className="app-list">
        {tasks.map((item) => (
          <div className="task-wrap" key={item.id}>
            <p>{item.content}</p>
            <button onClick={() => deleteTask(item.id)}>delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
