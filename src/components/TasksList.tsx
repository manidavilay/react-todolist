import { ITask } from "../utils/Interfaces";

interface Props {
  task: ITask;
  updatedTaskName: string;
  updatedDescription: string;
  updatedDeadline: number;
  isUpdating: number | null;
  deletingIsConfirmed: number | null;
  updateTask(id: number): void;
  handleUpdateInput(id: number, e: React.ChangeEvent<HTMLInputElement>): void;
  confirmUpdatedTask(id: number): void;
  cancelUpdatingTask(id: number): void;
  deleteTask(id: number): void;
  confirmDeletingTask(id: number): void;
  cancelDeletingTask(id: number): void;
}

const TasksList = ({
  task,
  updatedTaskName,
  updatedDescription,
  updatedDeadline,
  isUpdating,
  deletingIsConfirmed,
  updateTask,
  handleUpdateInput,
  confirmUpdatedTask,
  cancelUpdatingTask,
  deleteTask,
  confirmDeletingTask,
  cancelDeletingTask
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
            <button onClick={() => cancelUpdatingTask(task.id)}>Cancel</button>
            </>
        ) : (
            <button onClick={() => updateTask(task.id)}>Update task</button>
        )}
        {deletingIsConfirmed === task.id ? (
            <>
            <button onClick={() => confirmDeletingTask(task.id)}>
                Are you sure you want to delete the task ?
            </button>
            <button onClick={() => cancelDeletingTask(task.id)}>Cancel</button>
            </>
        ) : (
            <button onClick={() => deleteTask(task.id)}>Delete task</button>
        )}
    </div>
  );
};

export default TasksList;
