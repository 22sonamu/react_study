import { useRecoilValue , useRecoilState} from "recoil";
import { todoSelector, doneTodoSelector, clickedTodoBundleTitleSelector } from "../recoil/selectors";
import { useEffect } from "react";
import { todoList } from "../recoil/atoms";
import deepCopy from "../util/deepCopy";
import TodoDeleteButton from "./TodoDeleteButton";
const TodoLists = () => {

    //click된 투두에 따른 Todo Bundle의 Todo List 받아오기
    const clickedTodoList = useRecoilValue(todoSelector)
    const [newTodos, setTodos] = useRecoilState(todoList);\
    //할일 목록 이름 표시 위함
    const clickedTodoBundleTitle = useRecoilValue(clickedTodoBundleTitleSelector);
    //삭제 처리된 애들 
    const updateDoneTodo = (todoId) => {
        setTodos((prevTodos) => { 
            let i;
            var todos = deepCopy(prevTodos)
            for (i = 0 ; i < todos.length ;i ++){
                if(todos[i].id == todoId){
                    todos[i].isDone = true;
                }
            }
            return todos
        })
        console.log("todo update : id " + todoId + " Done")
    }
    return (
        <ul>
            <>{">>>>>" + clickedTodoBundleTitle + "<<<<<<"}</>
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