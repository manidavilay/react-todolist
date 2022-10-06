import React, { useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import TasksList from "./components/TasksList";
import { ITask } from "./utils/Interfaces";

function App() {
  const [task, setTask] = useState<string>("");
  const [description, setDescription] = useState<string>("No description");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  // Initial task and deadline inputs handler
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === "task") {
      setTask(e.target.value);
    } else if (e.target.name === "description") {
      setDescription(e.target.value);
    } else {
      setDeadline(parseFloat(e.target.value));
    }
  };

  // Add new task
  const addNewTask = (): void => {
    const newTask = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: task,
      description: description,
      deadline: deadline,
    };
    setTodoList([...todoList, newTask]);
    setTask("");
    setDescription("");
    setDeadline(0);
  };

  return (
    <div className="App">
      <AddTask
        task={task}
        deadline={deadline}
        handleInput={handleInput}
        addNewTask={addNewTask}
      />
      <div>
        <h2>List of tasks:</h2>
        {todoList.map((task) => {
          return <TasksList task={task} />;
        })}
      </div>
    </div>
  );
}

export default App;
