import { todoBundleList } from "../recoil/atoms";
import { useRecoilState } from "recoil";
const TodoBundlePlus = () => {

    const [bundleListState , setBundleListState] = useRecoilState(todoBundleList)
    let newContent = ""
    const newContentSubmitHandler = () => {
        if(newContent !== ""){
            setBundleListState(
                (prev) => {
                    return [
                        ...prev,
                        {
                            id : prev.length + 1,
                            title : newContent
                        }
                    ]
                }
            )
            console.log("new Bundle List 추가 : ")
            console.log(bundleListState)
        }else{
            alert("내용을 입력해주세요")
        }
    }
    
    return <>
        <>할일 목록 추가 : </>
        <input onChange={(event) => {newContent = event.target.value}}></input>
        <button onClick={() => {newContentSubmitHandler()}}>+</button>
    </>
}

export default TodoBundlePlus;