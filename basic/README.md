### 기본형 vs 참조형

--------

- 기본형 : string, number, boolean, null, undefined, symbol   

    - 변경 불가능한 값이다. (메모리에 올라간 값이 변경되지 않는다.)

        ~~~js
            let userMessage = "Hello!"
            //다른 메모리에 저장됨
            userMessage = "Hello there!!"
            //다른 메모리에 저장됨
            userMessage.concat('!!!');
        ~~~

- 참조형(객체) : Array, Object, Function


    - 변경 가능한 값이다. (메모리에 올라간 값이 변경된다.)

        ~~~js
            const hobbies = ["sports", "Cooking"];
            //const 임에도 할당된 메모리에서 수정 가능
            hobbies.push("working");
            //하지만 이건 안됨, const = 변수를 덮어 쓸 수 없다는 뜻이기 때문
            hobbies = ["eating"];
        ~~~
