import { createContext, useContext } from "react";
export const TodoContext = createContext();

const useTodoContext =()=>{
    return useContext(TodoContext);
}
export {useTodoContext};
