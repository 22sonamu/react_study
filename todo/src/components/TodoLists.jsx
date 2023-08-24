import { useRecoilValue , useRecoilState, useSetRecoilState} from "recoil";
import { todoSelector, doneTodoSelector, clickedTodoBundleTitleSelector } from "../recoil/selectors";
import { useEffect } from "react";
import { todoList } from "../recoil/atoms";
import deepCopy from "../util/deepCopy";
import TodoDeleteButton from "./TodoDeleteButton";
const TodoLists = () => {

    //click된 투두에 따른 Todo Bundle의 Todo List 받아오기
    const clickedTodoList = useRecoilValue(todoSelector)
    const setDoneTodoList = useSetRecoilState(doneTodoSelector)
    //할일 목록 이름 표시 위함
    const clickedTodoBundleTitle = useRecoilValue(clickedTodoBundleTitleSelector);
    //삭제 처리된 애들 
    const updateDoneTodo = (todoId) => {
        setDoneTodoList(todoId)
    }
    return (
        <ul>
            {/*click된 bundle title 노출, title 없을 경우(삭제된 bundle 일 경우) 공백으로 노출*/}
            <>{clickedTodoBundleTitle === '' ? "" : ">>>>>" + clickedTodoBundleTitle + "<<<<<<"}</>
            {clickedTodoList.map((todo) => 
            (   
                <li key={todo.id}>{
                    todo.isDone === true ?
                    <del>{todo.content}</del> : <>{todo.content}</>
                }
                    <input type="radio" onChange={()=>{updateDoneTodo(todo.id)}}/>
                    <TodoDeleteButton deleteId={todo.id}></TodoDeleteButton>
                </li>
            ))}
        </ul>
    )
}

export default TodoLists;