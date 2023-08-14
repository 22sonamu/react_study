import {selectorFamily} from 'recoil';
import { todoBundleList } from './atoms';
export const todoBundleSelector = selectorFamily({
    key : 'todoBundleSelector' ,
    get : (param) => 
    ({get}) => {
        //todoBundleList Atom에서 id === param인 데이터를 return
        get(todoBundleList).filter((todoBundle) => todoBundle["id"] === parseInt(param))
    }
    // set: ({ set }, newBundle) => {
    //     const oldBundle = get(todoBundleList)
    //     set(todoBundleList, ...oldBundle.push(newBundle));
    //   },
}
);