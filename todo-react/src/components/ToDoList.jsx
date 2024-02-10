import { useState } from "react";

export const ToDoList = () => {
  const [tasks, setTasks] = useState([
    "Eat Breakfast",
    "take a shower",
    "Be god Of War",
  ]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    setTasks([...tasks, newTask])
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const moveTaskUp = (index) => {};

  const moveTaskDown = (index) => {};

  return (
    <>
      <div className="to-do-list">
        <h1 className="">To-Do-List</h1>
        <div>
          <input
            type="text"
            placeholder="Enter a task ..."
            value={newTask}
            onChange={handleInputChange}
          />
          <button className="add-button" onClick={addTask}>
            Add
          </button>
        </div>
        <ol>
          {tasks.map((task, index) => (
            <li key={index}>
              <span className="text">{task}</span>
              <button
                className="delete-button"
                onClick={() => removeTask(index)}
              >
                Delete
              </button>
              <button className="move-button" onClick={() => moveTaskUp(index)}>
                UP
              </button>
              <button className="move-button" onClick={() => moveTaskDown(index)}>
                DOWN
              </button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};
