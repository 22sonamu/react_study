import { useRecoilValue , useRecoilState} from "recoil";
import { todoSelector, TodoList} from "../recoil/selectors";
import { useEffect } from "react";
import { todoList } from "../recoil/atoms";
const TodoLists = () => {
    //click된 투두에 따른 Todo Bundle의 Todo List 받아오기
    const clickedTodoList = useRecoilValue(todoSelector)
    const [todoListState, setTodoListState] = useRecoilState(todoList)
    const updateDoneTodo = (todoId) => {
        // setTodoListState(
        //     (prev) => {
        //         //id로 찾아서 done 처리
        //         prev.filter((todo) => todo.id === todoId).isDone = true
        //         return [...prev]
        //     }
        // )
    }
    return (
        <ul>
            {clickedTodoList.map((todo) => 
            (   
                <li key={todo.id}>{todo.content}
                    <input type="radio" onClick={updateDoneTodo(todo.id)}/>
                </li>
            ))}
        </ul>
    )
}

export default TodoLists;