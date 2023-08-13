import Todos from "../data/Todos";
import { useState } from "react";
const Main = () => {
    const [todos ,setTodos] = useState(Todos);
    todos.push(
        {
            id : 3,
            content : "hello",
            isDone : false
        }
    )
    return (
        <div></div>
    );
}

export default Main;