import { ITask } from "../utils/Interfaces";

interface Props {
    completedTask: ITask
};

const CompletedTasks = ({ completedTask }: Props) => {
    return (
        <div>
            {completedTask.taskName}
        </div>
    )
};

export default CompletedTasks;