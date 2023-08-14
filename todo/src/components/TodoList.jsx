import { useRecoilValue } from "recoil";
import { todoSelector} from "../recoil/selectors";
import { useEffect } from "react";
const TodoList = () => {
    //click된 투두에 따른 Todo Bundle의 Todo List 받아오기
    const clickedTodoList = useRecoilValue(todoSelector)
    useEffect(
        () => {},
        [clickedTodoList]
    )
    return (
        <ul>
            {clickedTodoList.map((todo) => (
                <li key={todo.id}>{todo.content}</li>
            ))}
        </ul>
    )
}

export default TodoList;