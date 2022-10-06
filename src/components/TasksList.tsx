import { ITask } from "../utils/Interfaces";

interface Props {
  task: ITask;
}

const TasksList = ({ task }: Props) => {
  return (
    <div>
      <>
        <h3>
          Task: <span>{task.taskName}</span>
        </h3>
        <p>Description: {task.description}</p>
        <p>Deadline (in hours): {task.deadline}</p>
      </>
    </div>
  );
};

export default TasksList;
