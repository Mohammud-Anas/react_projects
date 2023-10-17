import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { useTodoContext } from "../Context/TodoContext";
function TodoList({ todo }) {
  const { toggleChecked, delTodo, updateTodo } = useTodoContext();
  const [todoOutput, setTodoOutput] = useState(todo.todoText);

  return (
    <>
      <input
        type="checkbox"
        className="cursor-pointer"
        name="checkbox"
        checked={todo.completed}
        onChange={() => toggleChecked(todo.id)}
      />
      <input
      spellCheck = "false"
        type="text"
        name="input"
        className={`ml-[8px] sm:w-[90%] text-[25px] w-[80%] h-10 mr-[8px] ${
          todo.completed ? "line-through italic bg-slate-200" : ""
        }`}
        value={todoOutput}
        onChange={(e) => setTodoOutput(e.target.value)}
      />
      <FaEdit
        className="w-6 h-6"
        onClick={() => updateTodo(todo.id, { ...todo, todoText : todoOutput })}
      />
      <GrClose
        className="mx-[9px] w-6 h-6 cursor-pointer"
        onClick={() => delTodo(todo.id)}
      />
    </>
  );
}

export default TodoList;
