import { todoList } from "../recoil/atoms";
import { useRecoilState } from "recoil";
import deepCopy from "../util/deepCopy";
const TodoDeleteButton = ({deleteId}) => {
    const [todoListState, setTodoListState] = useRecoilState(todoList)
    const deleteClickEventHandler = () => {
        setTodoListState(
            (prev) => {
                //prev 값을 깊은 복사하여
                const newList = deepCopy(prev)
                var i 
                for(i = 0 ; i < newList.length ; i ++){
                    //삭제
                    if(newList[i].id == deleteId){
                        newList.splice(i , 1)
                        break
                    }
                    
                }
                return newList
            }
        )
    }

    return <button onClick={() => {deleteClickEventHandler()}}>
        삭제
    </button>
}


export default TodoDeleteButton;