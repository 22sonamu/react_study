import { useRecoilValue } from "recoil";
import { todoSelector} from "../recoil/selectors"; 
const TodoList = () => {
    //click된 투두에 따른 Todo Bundle의 Todo List 받아오기
    const clickedTodoList = useRecoilValue(todoSelector)
    return (
        <ul>
            {clickedTodoList.map((todo) => (
                <li key={todo.id}>{todo.content}</li>
            ))}
        </ul>
    )
}

export default TodoList;