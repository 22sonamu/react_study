import "./TodoBundle.css"
import { useRecoilValue  , useRecoilState} from "recoil";
import { todoBundleList, clickedBundleId } from "../recoil/atoms";

const TodoBundle = () => {
    //투두 리스트 받아오기
    const bundleList = useRecoilValue(todoBundleList)
    const [clickedBundleIdState , setClickedBundleIdState] = useRecoilState(clickedBundleId)
    //Bundle 이름을 선택하면 click된 todo state 변경
    const onBundleClickHandler = (clickedId) => {
        setClickedBundleIdState(clickedId)
    }
    return (
        <ul>
            {bundleList.map((bundle) => (
                <li onClick={() => {onBundleClickHandler(bundle.id)}} key={bundle.id}>{bundle.title}</li>
            ))}
        </ul>
    )
}

export default TodoBundle