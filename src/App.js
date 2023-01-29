import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css'; 

function App() {


  let [a,b] = useState(['남자 코트 추천', '강남 우동 맛집']);
  //b(a[0] = '여자 코트 추천'은 불가능하다. ['여자 코트 추천' , '강남 우동 맛집']으로 써주어야함)
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
