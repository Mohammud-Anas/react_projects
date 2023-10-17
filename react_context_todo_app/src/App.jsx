import { useEffect, useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { TodoContext } from "./Context/TodoContext";

function App() {
  const [todoArray, setTodoArray] = useState([]);
  const addTodo = (todo) => {
    setTodoArray((prevTodo) => [{ ...todo }, ...prevTodo]);
  };
  const toggleChecked = (id) => {
    // debugger;
    setTodoArray((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : { ...prevTodo }
      )
    );
  };
  const updateTodo = (id, todoMsg) => {
    setTodoArray((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id ? { ...todoMsg } : { ...prevTodo }
      )
    );
  };
  const delTodo = (id) => {
    setTodoArray((prevTodo) => prevTodo.filter((todo) => todo.id !== id));
  };
  
  useEffect(()=>{
    const  todoArray = JSON.parse(localStorage.getItem("todoArray"))
    if(todoArray && todoArray.length > 0){
      setTodoArray(todoArray);

    }
  },[]);

  useEffect(()=>{
    localStorage.setItem('todoArray', JSON.stringify(todoArray))
  },[todoArray]);


  


  return (
    <TodoContext.Provider
      value={{
        todoArray,
        toggleChecked,
        addTodo,
        setTodoArray,
        delTodo,
        updateTodo,
      }}
    >
      <div className="w-full px-4 my-2 text-center bg-blue-950 font-sans">
        <h1 className="text-[35px] font-bold  text-white font">
          Your TODOs Here...
        </h1>
      </div>
      <TodoForm />
      {todoArray.map((todo) => (
        <div
          className="bg-white w-[90%] sm:w-[80%]  shadow-lg mx-auto px-2 h-[50px] flex items-center rounded-lg my-3 "
          key={todo.id}
        >
          <TodoList todo={todo} />
        </div>
      ))}
    </TodoContext.Provider>
  );
}

export default App;
