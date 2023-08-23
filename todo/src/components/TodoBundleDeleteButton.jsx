import { todoList , todoBundleList } from "../recoil/atoms"
import { useSetRecoilState , useRecoilState} from "recoil"
import deepCopy from "../util/deepCopy"
//1. todo Bundle 삭제
//2. 해당 todo Bundle에 연결된 todo들 삭제
const TodoBundleDeleteButton = ({bundleId}) => {
    const setTodoListState = useSetRecoilState(todoList)
    const setTodoBudleListState = useSetRecoilState(todoBundleList)
    const todoBundleDelete = () => {
        setTodoBudleListState(
            (prevBundleList) => {
                const newList = deepCopy(prevBundleList)
                const deletedList = newList.filter((bundle) => bundle.id !== bundleId)
                console.log(deletedList)
                return deletedList
            }
        )
    }

    const todoDelete = () => {

    }  
    
    const todoBundleDeleteButtonClickHandler  = () => {
        todoBundleDelete()
        todoDelete()
    }


    return <button onClick={() => {todoBundleDeleteButtonClickHandler()}}>
        삭제
    </button>
}


export default TodoBundleDeleteButton; 