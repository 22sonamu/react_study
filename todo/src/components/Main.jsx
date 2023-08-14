
import { useRecoilState, useRecoilValue } from "recoil";
import { todoBundleList } from "../recoil/atoms";
import TodoBundle from "./TodoBundle";
const Main = () => {
    const [todoBundleListAtom, setTodoBundleListAtom] = useRecoilState(todoBundleList);
    
    // setTodoBundleListAtom(
    //     (prev) => {
    //         return [...prev, {id : 1 , title : "new"}]
    //     }
    // )
    console.log(todoBundleListAtom);
    return (
        <>
            <TodoBundle></TodoBundle>
        </>
    );
}

export default Main;