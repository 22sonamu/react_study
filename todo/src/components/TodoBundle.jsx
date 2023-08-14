import "./TodoBundle.css"
import { useRecoilValue  } from "recoil";
import { todoBundleList } from "../recoil/atoms";

const TodoBundle = () => {
    const bundleList = useRecoilValue(todoBundleList)
    return (
        <ul>
            {bundleList.map((bundle) => (
                <li key={bundle.id}>{bundle.title}</li>
            ))}
        </ul>
    )
}

export default TodoBundle