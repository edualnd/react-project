import { useNavigate, useSearchParams } from "react-router-dom";
import { ChevronLeftIcon } from "lucide-react";
import Title from "../components/Title";
const TaskPage = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.title);
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  const navigate = useNavigate();
  return (
    <>
      <div className="">
        <div className="space-y-4 w-[300px] sm:w-[500px]">
            <div className="flex justify-center relative mb-6">
              <button onClick={() => navigate(-1)} className="text-slate-200 absolute top-0 left-0 bottom-0">
                <ChevronLeftIcon />
              </button>
              <Title>
                Detalhes da tarefa
              </Title>
            </div>
            <div className="space-y-2 p-6 bg-slate-200 rounded-md shadow flex flex-col items-center">
              <h1 className="text-center text-4xl font-bold ">{title}</h1>
              <p className="text-left">{description}</p>
            </div>
        </div>
      </div>
    </>
  );
};

export default TaskPage;
