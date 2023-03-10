## React 공부


- ## 파일 구조

```
node_module 폴더 : 라이브러리 코드 보관 
public 폴더 : static 파일 보관 ( ex.image )
scr 폴더 : 소스코드
package.json : 프로젝트 정보 ( ex.프로젝트명 , 버전... )
```

- ## useState
```javascript
import logo from './logo.svg';
//리액트에 있는 내장 함수를 하나 쓰겠습니다.
import React, { useState } from 'react';
import './App.css'; 

function App() {

  // [10, 100] 이 두개 데이터를 변수에 담고 싶으면?   var [a,b] = [10, 100]; 이렇게 쓸수 있다. 
  let [a,b] = useState(['남자 코트 추천', '강남 우동 맛집']); //Array 가 남고 [a,b] 두가지의 데이터가 들어간다.
  //a 에는 남자 코트 추천이 들어가고, b 에는 남자 코트 추천을 수정하기 위한 함수가 생성된다.
  
  return (  
    <div className="App">
      <div className = "black-nav">
        <div>개발 Blog</div>
      </div> 
      <div className = "list">
        <h3>{ a[0] }</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
```
### State 를 쓰는 이유?

웹을 앱처럼 동작시키기 위함이다. </br>
:exclamation: State 는 변수와 다르게 변경되면 HTML이 자동으로 랜더링된다.:exclamation: </br>
따라서 수시로 바뀌는 값 -> useState </br>
고정 값 -> 하드코딩 혹은 단순 변수로 사용하면 좋다. </br>


- ## useSate 활용
```javascript
import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css'; 

function App() {


  let [a,b] = useState(['남자 코트 추천', '강남 우동 맛집']);
  //b(a[0] = '여자 코트 추천'은 불가능하다. ['여자 코트 추천' , '강남 우동 맛집'])
  let [favorite, plusFavorite] = useState(0);


  return (  
    <div className="App">
      <div className = "black-nav">
        <div>개발 Blog</div>
      </div> 
      <div className = "list">
    
        <h3 onClick={()=>{b(['여자 코트 추천', '강남 우동 맛집'])}}>{ a[0] } <span onClick={()=>{plusFavorite(favorite + 1)}}>따봉버튼</span> { favorite } </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className = "list">
        <h3>{ a[1] }</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
```

- ## Props
```javascript
import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css'; 

//props
function Header(props){
  //props에는 Object(title : REACT가 들어있다.) 
  //props.title 로 REACT 라는 값에 접근할수있다.
  return <header>
    <h1><a href='/'>{ props.title }</a></h1>
  </header>
}
function Nav(props){
  const lis = []
  for (let i = 0 ; i<props.topics.length; i ++){
    let t = props.topics[i];
    //li 는 고유한 KEY 를 가지고 있어야함
    lis.push(<li key={t.id}><a href={'/read/' + t.id}>{t.title}</a></li>)
  }
  return <nav>
    <ol>
      { lis }
    </ol>
  </nav>
}
function App() {
  const topics = [
    {id : 1, title : 'html', body:'html is....'},
    {id : 2, title : 'css', body:'css is....'}
  ];
  return (  
    <div className="App">
      <Header title = "REACT"></Header>
      <Nav topics={ topics }></Nav>
    </div>
  );
}
export default App;

```

- ## Props 활용
```javascript
import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css'; 

//props
function Header(props){
  return <header>
    <h1><a href='/' onClick={(evnet) => {
      evnet.preventDefault(); //클릭해도 리로드 일어나지 않음(a태그의 기능을 막음)
      //onChangeMode 라는 함수를 전달받음
      props.onChangeMode();
    }}>{ props.title }</a></h1>
  </header>
}
function Nav(props){
  const lis = []
  for (let i = 0 ; i<props.topics.length; i ++){
    let t = props.topics[i];
    //li 는 고유한 KEY 를 가지고 있어야함
    lis.push(<li key={t.id} ><a href={'/read/' + t.id} onClick = {(event) => {
      event.preventDefault();
      props.onChangeMode(event.target.key);
    }}>{t.title}</a></li>)
  }
  return <nav>
    <ol>
      { lis }
    </ol>
  </nav>
}
function App() {
  const topics = [
    {id : 1, title : 'html', body:'html is....'},
    {id : 2, title : 'css', body:'css is....'}
  ];
  return (  
    <div className="App">
      <Header title = "REACT" onChangeMode = {()=>{alert('Header')}}></Header>
      <Nav topics={ topics } onChangeMode = {(id)=>{alert(id)}}></Nav>
    </div>
  );
}
export default App;
```

- ## useEffect
1. 랜더링 될때마다 실행
```javascript
    useEffect(()=>{
         //작업 
    });
```
2. 컴포넌트가 맨처음 랜더링될때 , 혹은 배열의 값이 바뀔때 실행 (빈 배열일 경우 -> 맨 처음에만 랜더링)
```javascript
    useEffect(()=>{
         //작업 
    }, []);
```
3. return 값을 통해 정리를 해줄수있음 (ex. 사용했던 이벤트 리스너 제거)
```javascript
    useEffect(()=>{
         //작업 
         return () => {
            //작업 정리
         }
    });
```
  - ##### 1,2번 예제
  ```javascript
  import logo from './logo.svg';
import React, { useState , useEffect } from 'react';
import './App.css'; 


function App() {
  
  const [count, setCount] = useState(1);
  const [name, setName] = useState('');

  const handleCountUpdate = () => {
    setCount(count + 1);
  }
  //랜더링 될때마다 매번 실행됨
  useEffect(()=>{
    console.log("랜더링 되었습니다.");
  }) 

  //맨처음 + count가 바뀔때만 랜더링된다.
  useEffect(()=>{
    console.log("count가 랜더링 되었습니다.");
  }, [count])

  //맨처음 + name 바뀔때만 랜더링된다.
  useEffect(()=>{
    console.log("name이 랜더링 되었습니다.");
  }, [name])

  //맨처음만 랜더링된다.
  useEffect(()=>{
    console.log("처음 랜더링 입니다.");
  }, [])

  const handleInputChange = (e) => {
    setName(e.target.value);
  }

  return (  
    <div className="App">
      <button onClick={handleCountUpdate}>Update</button>
      <span>count : { count }</span>
      <input type="text" value={ name } onChange={handleInputChange}></input>
      <span>name : { name }</span>
    </div>
  );
}
export default App;

  ```
  
  - ##### 3번 예제
  1. ##### Timer.js
  ```javascript
  import React, {useEffect} from 'react';


const Timer = (props) => {

    useEffect(() => {
        //log를 1초마다 한번씩 보낸다.
        const timer = setInterval(() => {
            console.log("타이머 돌아가는중....");
        }, 1000);

        //HTML 에서 언마운트 되면 타이머 돌아가던걸 정리
        return () => {
            clearInterval(timer);
            console.log("타이머가 종료되었습니다.")
        }
    }, []);

    return(
        <div>
            <span>타이머를 시작합니다. 콘솔을 보세요!</span>
        </div>
    )
}

export default Timer;
    
  ```

  2. ##### App.js
  ```javascript
  import logo from './logo.svg';
import React, { useState , useEffect } from 'react';
import Timer from './component/Timer';
import './App.css'; 


function App() {

  const [showTimer , setShowTimer] = useState(false);

  return (  
    <div className="App">
      {/*이렇게 하면 showTimer가 True일때만 보인다*/}
      {showTimer && <Timer/>}
      {/*버튼을 누르면 showTimer의 값이 반전된다*/}
      <button onClick ={() => setShowTimer(!showTimer)}>Toggle timer</button>
    </div>
  );
}
export default App;

  ```
  
  
- ## 사용자 정의 태그

```javascript
import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css'; 

//사용자 정의 태그
function Header(){
  return <header>
    <h1><a href='/'>WEB</a></h1>
  </header>
}
function Nav(){
  return <nav>
    <ol>
      <li><a href='/read/1'>html</a></li>
      <li><a href='/read/2'>css</a></li>
    </ol>
  </nav>
}
function App() {
  return (  
    <div className="App">
      <Header></Header>
      <Nav></Nav>
    </div>
  );
}
export default App;

```
