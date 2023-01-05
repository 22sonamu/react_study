import logo from './logo.svg';
import './App.css'; //css 파일 경로 임포트

function App() {
  //이 변수는 html의 아이디에도 사용가능하다.
  let post = '강남 우동 맛집';

  return (
    <div className="App">
      <div className = "black-nav">
        <h4 style={ {color : 'green', fontSize : '20px'} }>
          블로그임
        </h4>
      </div>
      <h4>{ post }</h4>
    </div>
  );
}

export default App;
