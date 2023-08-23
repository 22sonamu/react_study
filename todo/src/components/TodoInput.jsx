//업데이트 해줄 todoList
//업데이트 할 Bundle의 id(현재 보고있는 Bundle의 id)가 담긴 clickedBundleid 
import { todoList , clickedBundleId} from "../recoil/atoms";
import {useRecoilState, useRecoilValue} from 'recoil';

const TodoInput = () => {
    let newContent = "";
    const [todoListState, setTodoListState] = useRecoilState(todoList)
    const clickedBundleIdValue = useRecoilValue(clickedBundleId)
    const newContentSubmitHandler = () => {
        if(newContent !== ""){
            setTodoListState(
                (prev) => {
                    return [
                        ...prev,
                        {
                            id : prev.length + 1,
                            bundleId : clickedBundleIdValue,
                            content : newContent,
                            isDone : false,
                            due : new Date()
                        }
                    ]
                }
            )
            console.log("new todo 추가 :" + todoListState);
        }else{
            alert("내용을 입력해주세요")
        }
    }

    return (
        <>
            <>할 일 추가 : </>
            <input onChange={(event) => {newContent = event.target.value}}></input>
            <button onClick={() => {newContentSubmitHandler()}}>제출</button>
        </>
        
    )
}

export default TodoInput;