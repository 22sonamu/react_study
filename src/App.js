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
