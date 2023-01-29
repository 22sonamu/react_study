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
