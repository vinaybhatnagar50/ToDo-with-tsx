import { FormEvent, useState } from "react"
import { useTodos } from "../store/toDos";

const addToDo = () => {
        const[todo, setTodo] = useState("");
        const {handleAddToDo} = useTodos();
     
        const handleFormSubmit = (e:FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            handleAddToDo(todo)
            setTodo("")
        }
    
  return (
    <form onSubmit={handleFormSubmit}>
    <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
    <button type="submit">Add</button>
    </form>
  )
}

export default addToDo
