## 1. 양식 입력 상태 사용 퀴즈

~~~jsx
import React, {useState} from 'react';

import './styles.css';

export default function App() {
    const [message , setMessage] = useState("Invalid message");
    return (
        <form>
            <label>Your message</label>
            <input type="text" onChange="isValid"/>
            <p>{message}</p>
        </form>
    );
    const isValid = (event) => {
        var value = event.target.value;
        if(value.length >= 3){
            setMessage("Valid message");
        }
    }
}
~~~