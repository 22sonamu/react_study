import {selector, selectorFamily} from 'recoil';
import { clickedBundleId, todoList} from './atoms';
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


export const doneTodoSelector = selectorFamily({
    key : 'doneTodoSelector' ,
    get : 
    () =>
    ({get}) => {
        
        //todoList 전역변수 에서 isDone == true 인 데이터를 return
        return get(todoList).filter((todoBundle) => todoBundle.isDone) 
    },
    //새로 done되는 리스트 업데이트
    set :
    (newList) => 
    ({set}) => {
        set(todoList, newList)
    }
}
);