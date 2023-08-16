import {selector} from 'recoil';
import { clickedBundleId, todoList} from './atoms';
export const todoSelector = selector({
    key : 'todoSelector' ,
    get : 
    ({get}) => {
        console.log("clickedBundleId 변경 : " + get(clickedBundleId))
        //todoList 전역변수 에서 id === clickedBundleId 인 데이터를 return
        return get(todoList).filter((todoBundle) => (todoBundle["bundleId"] === parseInt(get(clickedBundleId))) && !todoBundle.isDone)
    }
    // set: ({ set }, newBundle) => {
    //     const oldBundle = get(todoBundleList)
    //     set(todoBundleList, ...oldBundle.push(newBundle));
    //   },
}

);


export const doneTodoSelector = selector({
    key : 'doneTodoSelector' ,
    get : 
    ({get}) => {
        //todoList 전역변수 에서 isDone == true 인 데이터를 return
        return get(todoList).filter((todoBundle) => todoBundle.isDone)
    }
}
);