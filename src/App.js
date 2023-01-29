import logo from './logo.svg';
//리액트에 있는 내장 함수를 하나 쓰겠습니다.
import React, { useState } from 'react';
import './App.css'; 

function App() {

  // [10, 100] 이 두개 데이터를 변수에 담고 싶으면?   var [a,b] = [10, 100]; 이렇게 쓸수 있다. 
  let [a,b] = useState(['남자 코트 추천', '강남 우동 맛집']); //Array 가 남고 [a,b] 두가지의 데이터가 들어간다.
  //a 에는 남자 코트 추천이 들어가고, b 에는 남자 코트 추천을 수정하기 위한 함수가 생성된다.

  //state 를 쓰는 이유? 웹이 App처럼 동작하게 만들고 싶어서 .
  //!!! sate 는 변경되면 html 이 자동으로 재렌더링이 된다 !!!!!!
  //따라서 수시로 바뀌는 값 -> useState, 고정값 -> 하드코딩 혹은 단순 변수로 사용하면 좋다.
  
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
