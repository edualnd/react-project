import { useState } from "react";
import Input from "./Input";

const AddTask = ({ onAddClick }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <>
      <div className="space-y-2 p-6 bg-slate-200 rounded-md shadow flex flex-col">
        <Input
          type="text"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          placeholder="Nome da tarefa"
        />
        <Input
          type="text"
          value={description}
          onChange={(event) => {
            setDescription(event.target.value);
          }}
          placeholder="Descrição"
        />

        <button
          className="bg-slate-500 text-white px-4 py-2 rounded-md"
          onClick={() => {
            if (!title || !description) {
              return alert("Preencha o nome e descrição");
            }
            onAddClick(title, description);
            setDescription("");
            setTitle("");
          }}
        >
          Adicionar
        </button>
      </div>
    </>
  );
};
export default AddTask;
