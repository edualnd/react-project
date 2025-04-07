import { useEffect, useState } from "react";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Title from "./components/Title";
function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  //So roda uma vez
  useEffect(() => {
    //CHAMA API
    // const fetchTasks = async () => {
    //   const response = await fetch(
    //     "https://jsonplaceholder.typicode.com/todos?_limit=5"
    //   );
    //   const data = await response.json();
    //   setTasks(data);
    // };
    // etchTasks();
  }, []);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id == taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });

    setTasks(newTasks);
  }
  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id != taskId);
    console.log(newTasks);
    setTasks(newTasks);
  }
  function onAddClick(title, description) {
    const newTask = {
      id: tasks.length + 1,
      title,
      description,
      isCompleted: false,
    };
    return setTasks([...tasks, newTask]);
  }
  return (
    <>
      <div className="">
        <div className="w-screen space-y-4 flex flex-col items-center">
          <Title>
            Gerenciador de tarefas
          </Title>
          <AddTask onAddClick={onAddClick} />

          <Tasks
            tasks={tasks}
            onTaskClick={onTaskClick}
            onDeleteTaskClick={onDeleteTaskClick}
          />
        </div>
      </div>
    </>
  );
}

export default App;
