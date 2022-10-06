import { ITask } from "../utils/Interfaces";

interface Props {
  task: ITask;
  updatedTaskName: string;
  updatedDescription: string;
  updatedDeadline: number;
  isUpdating: number | null;
  updateTask(id: number): void;
  handleUpdateInput(id: number, e: React.ChangeEvent<HTMLInputElement>): void;
  confirmUpdatedTask(id: number): void;
}

const TasksList = ({
  task,
  updatedTaskName,
  updatedDescription,
  updatedDeadline,
  isUpdating,
  updateTask,
  handleUpdateInput,
  confirmUpdatedTask,
}: Props) => {
  return (
    <div>
      <>
        <h3>
          Task: <span>{task.taskName}</span>
        </h3>
        <p>Description: {task.description}</p>
        <p>Deadline (in hours): {task.deadline}</p>
      </>
      {isUpdating === task.id ? (
        <>
          <input
            type="text"
            placeholder="Change task name"
            name="task"
            value={updatedTaskName}
            onChange={(e) => handleUpdateInput(task.id, e)}
          />
          <input
            type="text"
            placeholder="Change description"
            name="description"
            value={updatedDescription}
            onChange={(e) => handleUpdateInput(task.id, e)}
          />
          <input
            type="number"
            name="deadline"
            value={updatedDeadline}
            min={0}
            onChange={(e) => handleUpdateInput(task.id, e)}
          />
          <button onClick={() => confirmUpdatedTask(task.id)}>Confirm</button>
        </>
      ) : (
        <button onClick={() => updateTask(task.id)}>Update task</button>
      )}
    </div>
  );
};

export default TasksList;
