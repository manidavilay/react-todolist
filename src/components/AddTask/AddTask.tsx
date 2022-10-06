import "./AddTask.scss";

interface Props {
  task: string;
  deadline: number;
  handleInput: React.ChangeEventHandler<HTMLInputElement>;
  addNewTask: React.MouseEventHandler<HTMLButtonElement>;
}

const AddTask = ({ task, deadline, handleInput, addNewTask }: Props) => {
  return (
    <div>
      <input
        type="text"
        name="task"
        value={task}
        placeholder="Add new task"
        onChange={handleInput}
      />
      <input
        type="text"
        name="description"
        placeholder="Add a description"
        onChange={handleInput}
      />
      <input
        type="number"
        name="deadline"
        value={deadline}
        placeholder="Set a deadline (in hours)"
        min={0}
        onChange={handleInput}
      />
      <button onClick={addNewTask}>Submit new task</button>
    </div>
  );
};

export default AddTask;
