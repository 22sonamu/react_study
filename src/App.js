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
