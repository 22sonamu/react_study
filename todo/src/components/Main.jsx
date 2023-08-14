
import TodoBundle from "./TodoBundle";
import TodoList from "./TodoList";
const Main = () => {
    
    // setTodoBundleListAtom(
    //     (prev) => {
    //         return [...prev, {id : 1 , title : "new"}]
    //     }
    // )
    return (
        <>
            <TodoBundle></TodoBundle>
            <TodoList></TodoList>
        </>
    );
}

export default Main;