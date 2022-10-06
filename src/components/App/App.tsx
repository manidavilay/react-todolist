import React, { useState } from "react";
import "./App.css";
import AddTask from "../AddTask/AddTask";
import CompletedTasks from "../CompletedTasks/CompletedTasks";
import TasksList from "../TasksList/TasksList";
import { ITask } from "../../utils/Interfaces";

function App() {
  const [task, setTask] = useState<string>("");
  const [description, setDescription] = useState<string>("No description");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);
  const [updatedTaskName, setUpdatedTaskName] = useState<string>("");
  const [updatedDescription, setUpdatedDescription] = useState<string>("");
  const [updatedDeadline, setUpdatedDeadline] = useState<number>(0);
  const [isUpdating, setIsUpdating] = useState<number | null>(null);
  const [deletingIsConfirmed, setDeletingIsConfirmed] = useState<number | null>(
    null
  );
  const [completedTasks, setCompletedTasks] = useState<ITask[]>([]);

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

  // Confirm updated task and deadline
  const confirmUpdatedTask = (id: number): void => {
    setIsUpdating(null);
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return {
            ...todoList,
            ...task,
            taskName: updatedTaskName,
            description: updatedDescription,
            deadline: updatedDeadline,
          };
        }
        return task;
      })
    );
  };

  // Cancel task and deadline updating
  const cancelUpdatingTask = (id: number): void => {
    todoList.map((task) => {
      if (task.id === id) {
        setIsUpdating(null);
      }
    });
  };

  // Delete task
  const deleteTask = (id: number): void => {
    todoList.map((task) => {
      if (task.id === id) {
        setDeletingIsConfirmed(task.id);
      }
    });
  };

  // Confirm deleting task
  const confirmDeletingTask = (id: number): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.id !== id;
      })
    );
    setDeletingIsConfirmed(null);
  };

  // Cancel task deleting
  const cancelDeletingTask = (id: number): void => {
    todoList.map((task) => {
      if (task.id === id) {
        setDeletingIsConfirmed(null);
      }
    });
  };

  // Complete task
  const completeTask = (id: number): void => {
    todoList.map((task) => {
      if (task.id === id) {
        const completedTask = {
          id: task.id,
          taskName: task.taskName,
          description: task.description,
          deadline: task.deadline,
        };
        setCompletedTasks([...completedTasks, completedTask]);
        setTodoList(
          todoList.filter((task) => {
            return task.id !== id;
          })
        );
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
              confirmUpdatedTask={confirmUpdatedTask}
              cancelUpdatingTask={cancelUpdatingTask}
              deleteTask={deleteTask}
              confirmDeletingTask={confirmDeletingTask}
              deletingIsConfirmed={deletingIsConfirmed}
              cancelDeletingTask={cancelDeletingTask}
              completeTask={completeTask}
            />
          );
        })}
      </div>
      <div>
        <h2>Completed Tasks:</h2>
        {completedTasks.map((completedTask) => {
          return <CompletedTasks completedTask={completedTask} />;
        })}
      </div>
    </div>
  );
}

export default App;
