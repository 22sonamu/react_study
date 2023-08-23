import { useRecoilValue , useRecoilState} from "recoil";
import { todoSelector, doneTodoSelector} from "../recoil/selectors";
import { useEffect } from "react";
import { todoList } from "../recoil/atoms";
import deepCopy from "../util/deepCopy";
const TodoLists = () => {

    //click된 투두에 따른 Todo Bundle의 Todo List 받아오기
    const clickedTodoList = useRecoilValue(todoSelector)
    const [newTodos, setTodos] = useRecoilState(todoList);
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
            {clickedTodoList.map((todo) => 
            (   
                <li key={todo.id}>{
                    todo.isDone === true ?
                    <del>{todo.content}</del> : <>{todo.content}</>
                }
                    <input type="radio" onChange={()=>{updateDoneTodo(todo.id)}}/>
                </li>
            ))}
        </ul>
    )
}

export default TodoLists;