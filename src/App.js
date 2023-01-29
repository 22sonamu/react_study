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
