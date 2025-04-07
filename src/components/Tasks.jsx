import { Check, ChevronRightIcon, Trash } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const Tasks = ({ tasks, onTaskClick, onDeleteTaskClick }) => {
  const navigate = useNavigate();
  const onSeeDeteailsClick = (title, description) => {
    const query = new URLSearchParams();
    query.set("title", title);
    query.set("description", description);
    navigate(`/task?${query.toString()}`);
  };
  return (
    <>
      <ul className=" sm:w-[500px] w-[300px] space-y-2 p-6 bg-slate-200 rounded-md shadow">
        {tasks.length === 0 ? (
          <li>Você não tem tarefas</li>
        ) : (
          tasks.map((task) => (
            <li key={task.id} className="flex gap-2">
              <button
                onClick={() => onTaskClick(task.id)}
                className={`bg-slate-400 rounded-md text-white  p-2  w-full flex gap-1 ${
                  task.isCompleted && "line-through"
                }`}
              >
                {task.isCompleted ? <Check /> : ""}
                {task.title}
              </button>
              <Button
                onClick={() => onSeeDeteailsClick(task.title, task.description)}
              >
                <ChevronRightIcon />
              </Button>
              <Button onClick={() => onDeleteTaskClick(task.id)}>
                <Trash />
              </Button>
              <button></button>
            </li>
          ))
        )}
      </ul>
    </>
  );
};

export default Tasks;
