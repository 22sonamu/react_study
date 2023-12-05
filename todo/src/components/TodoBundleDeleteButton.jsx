import { todoList , todoBundleList } from "../recoil/atoms"
import { useSetRecoilState } from "recoil"
import deepCopy from "../util/deepCopy"
//1. todo Bundle 삭제
//2. 해당 todo Bundle에 연결된 todo들 삭제
const TodoBundleDeleteButton = ({bundleId}) => {

    const setTodoListState = useSetRecoilState(todoList)
    const setTodoBudleListState = useSetRecoilState(todoBundleList)

    //1. todo Bundle 삭제
    const todoBundleDelete = () => {
        setTodoBudleListState(
            (prevBundleList) => {
                const newList = deepCopy(prevBundleList)
                const deletedBundleList = newList.filter((bundle) => bundle.id!== bundleId)
                return deletedBundleList
            }
        )
    }

    //2. 해당 todo Bundle에 연결된 todo들 삭제
    const todoDelete = () => {
        setTodoListState(
            (prevTodoList) => {
                const newList = deepCopy(prevTodoList)
                const deletedTodoList = newList.filter((todo) => todo.bundleId !== bundleId)
                return deletedTodoList
            }
        )
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