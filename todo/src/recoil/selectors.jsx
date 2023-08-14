import {selector} from 'recoil';
import { clickedBundleId, clickedTodoList , todoList} from './atoms';
export const todoSelector = selector({
    key : 'todoSelector' ,
    get : 
    ({get}) => {
        console.log(get(clickedBundleId))
        //todoBundleList Atom에서 id === param인 데이터를 return
        return get(todoList).filter((todoBundle) => todoBundle["bundleId"] === parseInt(get(clickedBundleId)))
    }
    // set: ({ set }, newBundle) => {
    //     const oldBundle = get(todoBundleList)
    //     set(todoBundleList, ...oldBundle.push(newBundle));
    //   },
}

);