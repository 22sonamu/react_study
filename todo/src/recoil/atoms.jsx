import {atom} from 'recoil';

export const todoList = atom({
    key : 'todoList',
    default : [
        {
            id : 1,
            bundleId : 1,
            content : "점심 맛있게 먹기",
            isDone : false,
            due : new Date()
        },
        {
            id : 2,
            bundleId : 2,
            content : "책 읽기",
            isDone : false,
            due : new Date()
        },
        {
            id : 3,
            bundleId : 2,
            content : "코딩 하기",
            isDone : true,
            due : new Date()
        }
    ]
});


export const todoBundleList = atom({
    key : 'todoBundleList',
    default : [
        {
            id : 1,
            title : "오늘의 할일"
        },
        {
            id : 2,
            title : "어제의 할일"
        }
    ]
});


export const clickedBundleId = atom({
   key : 'clickedBundleId',
   default : 1
})