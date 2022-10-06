import { ITask } from "../../utils/Interfaces";
import "./CompletedTasks.scss";

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