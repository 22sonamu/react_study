
import TodoBundle from "./TodoBundle";
import TodoLists from "./TodoLists";
import TodoInput from "./TodoInput";
import TodoBundlePlus from "./TodoBundlePlus";
const Main = () => {
    
    return (
        <>
            <TodoBundlePlus></TodoBundlePlus>
            <TodoBundle></TodoBundle>
            <TodoInput></TodoInput>
            <TodoLists></TodoLists>
        </>
    );
}

export default Main;