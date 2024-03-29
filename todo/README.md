### Recoil

React 상태 관리 라이브러리

![Alt text](https://velog.velcdn.com/images/jjunyjjuny/post/7881ea33-438b-42e6-8398-664821f7b9d3/img.jpg)

- Atom    
    - Recoil의 단위 데이터, 컴포넌트가 구독할 수 있는 상태의 단위

        **atoms.js**


        ```jsx
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
        ```


        **사용법**  
            import 한 곳(구독한 곳) 에서 useState처럼 사용할 수 있음 
        ```jsx
        import {todoList} from './atoms'
        import {useRecoilState} from 'recoil'
        const [todoListState , setTodoListState] = useRecoilState(todoList)
        //todoListState => 값
        //setTodoListState => Setter
        ```



- Selector 

    - Atom의 값을 변환하는 함수

        ex. 컴포넌트에서 완료된 todo만 구독하고 싶음

        **selectors.jsx**

        ```jsx
        //todoList Atom Import 
        import {todoList} from './atoms';

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
        ```

        **사용법**  
            import 한 곳(구독한 곳) 에서 useState처럼 사용할 수 있음 
        ```jsx
        import {doneTodoSelector} from './selectors'
        import {useRecoilValue, useSetRecoilState} from 'recoil'
        const doneTodoSelectorState = useRecoilValue(doneTodoSelector)
        const setDoneTodoSelectorState = useSetRecoilValue(doneTodoSelector)

        setDoneTodoSelectorState(1) //id : 1인 todo를 done으로 바꾸겠다.
        ```