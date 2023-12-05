## 1. 양식 입력 상태 사용 퀴즈

~~~jsx
import React, {useState} from 'react';

import './styles.css';


// don't change the Component name "App"
export default function App() {
    const [message , setMessage] = useState("Invalid message");
    const isValid = (event) => {
        var value = event.target.value;
        if(value.length >= 3){
            setMessage("Valid message");
        }
    };
    return (
        <form>
            <label>Your message</label>
            <input type="text" onChange={isValid}/>
            <p>{message}</p>
        </form>
    );
    
}
~~~

## 2. 이전 상태 기반 업데이트 퀴즈

~~~jsx
import React, {useState} from 'react';

import './styles.css';

export default function App() {
    const [num, setNum] = React.useState(0);
    const increaseNum = () => {
      setNum((prev) => {
          return prev += 1;
      });
    };
    return (
      <div>
        <p id="counter">{num}</p>
        <button onClick = {increaseNum}>Increment</button>
      </div>
    );
    
}
~~~