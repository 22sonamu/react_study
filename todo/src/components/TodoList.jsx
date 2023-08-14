import { useRecoilValue } from "recoil";
import { todoSelector} from "../recoil/selectors"; 
const TodoList = () => {
    const clickedTodoList = useRecoilValue(todoSelector)
    return (
        <ul>
            {clickedTodoList.map((todo) => <li key={todo.id}>{todo.content}</li>)}
        </ul>
    )
}

export default TodoList;