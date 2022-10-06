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
  const [updatedTaskName, setUpdatedTaskName] = useState<string>("");
  const [updatedDescription, setUpdatedDescription] = useState<string>("");
  const [updatedDeadline, setUpdatedDeadline] = useState<number>(0);
  const [isUpdating, setIsUpdating] = useState<number | null>(null);

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

  // Updated task and deadline inputs handler
  const handleUpdateInput = (
    id: number,
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    todoList.map((task) => {
      if (task.id === id) {
        if (e.target.name === "task") {
          setUpdatedTaskName(e.target.value);
        } else if (e.target.name === "description") {
          setUpdatedDescription(e.target.value);
        } else {
          setUpdatedDeadline(parseFloat(e.target.value));
        }
      }
    });
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

  // Show updating form and update task and deadline
  const updateTask = (id: number): void => {
    todoList.map((task) => {
      if (task.id === id) {
        setIsUpdating(task.id);
        setUpdatedTaskName(task.taskName);
        setUpdatedDescription(task.description);
        setUpdatedDeadline(task.deadline);
      }
    });
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
          return (
            <TasksList
              task={task}
              isUpdating={isUpdating}
              updatedTaskName={updatedTaskName}
              updatedDescription={updatedDescription}
              updatedDeadline={updatedDeadline}
              handleUpdateInput={handleUpdateInput}
              updateTask={updateTask}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
