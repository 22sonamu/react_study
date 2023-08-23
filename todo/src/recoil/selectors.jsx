import {selector, selectorFamily} from 'recoil';
import { clickedBundleId, todoList, todoBundleList} from './atoms';
import deepCopy from '../util/deepCopy';
export const todoSelector = selector({
    key : 'todoSelector' ,
    get : 
    ({get}) => {
        console.log("clickedBundleId 변경 : " + get(clickedBundleId))
        //todoList 전역변수 에서 id === clickedBundleId 인 데이터
        let clickedList = get(todoList).filter((todo) => todo["bundleId"] === parseInt(get(clickedBundleId)))
        return clickedList
    }
}

);


export const doneTodoSelector = selector({
    key : 'doneTodoSelector' ,
    get : 
    ({get}) => {
        //todoList 전역변수 에서 isDone == true 인 데이터를 return
        return get(todoList).filter((todoBundle) => todoBundle.isDone) 
    },
    //새로 done되는 리스트 업데이트
    set :
    ({set}, doneTodoId) => {
        set(todoList, (prevTodos) => {
            let i;
            //prevTodos안의 object를 수정하기 위해서 깊은 복사
            let todos = deepCopy(prevTodos)
            for (i = 0 ; i < todos.length ;i ++){
                if(todos[i].id === doneTodoId){
                    todos[i].isDone = true;
                }
            }
            return todos
        })
    }
}
);


export const clickedTodoBundleTitleSelector = selector(
    {
        key : 'clickedTodoBundleTitleSelector',
        get : 
            ({get}) => {
                //clickedBundleId에 해당하는 title return
                let clickedBundleTitle = ''
                const clickedBundle = get(todoBundleList).filter((bundle) => bundle.id === get(clickedBundleId))
                if(clickedBundle !== null && clickedBundle != 'undefined' && clickedBundle.length !== 0){
                    clickedBundleTitle = clickedBundle[0].title
                }
                return clickedBundleTitle
            }
    }
)