import React, { useState } from "react";
import { useTodoContext } from "../Context/TodoContext";
import { useOnKeyPress } from "../customHooks/EventHook.js";

function TodoForm() {
  const { addTodo } = useTodoContext();
  const [todoInput, setTodoInput] = useState("");  
  const add = () => {
    if (todoInput.trim() === "") {
      return;
    }
    addTodo({ id: Date.now(), todoText: todoInput, completed: false });
    setTodoInput("");
  };

  useOnKeyPress(add,  'Enter');
  return (
    <div className="my-4 w-full sm:w-[80%]  sm:mx-auto px-[10px] py-2 shadow-lg flex rounded-lg ">
      <input
        type="text"
        spellCheck="false"
        className="outline-none border-none flex-1 h-[50px] pl-2 rounded-tl-lg rounded-bl-lg"
        placeholder="write todo...."
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
      />
      <button
        className=" h-[50px] pl-2 pr-2 bg-blue-500 rounded-br-lg rounded-tr-lg text-white text-[15px]"
        onClick={add}
      >
        Add Todo
      </button>
    </div>
  );
}

export default TodoForm;
