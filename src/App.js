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
