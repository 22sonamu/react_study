## React 공부


- ## 파일 구조

```
node_module 폴더 : 라이브러리 코드 보관 
public 폴더 : static 파일 보관 ( ex.image )
scr 폴더 : 소스코드
package.json : 프로젝트 정보 ( ex.프로젝트명 , 버전... )
```

- ## 2강 : useState
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


- ## 4강 : Sate 활용
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

- ## 2-1 강 : 사용자 정의 태그

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

- ## 2-2강 : Prop
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