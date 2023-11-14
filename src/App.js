import { useState } from 'react';
import './App.css';

function App() {
  // const getTanFromDegrees = (degrees) => {
  //   return Math.tan((degrees * Math.PI) / 180).toFixed(3);
  // }

  const getAngleFromTan = (result) => {
    return (Math.atan(result) * 180 / Math.PI).toFixed(2)
  }

  const [inputs,setInputs] = useState({
    base : '',
    height : ''
  })

  const {base, height} = inputs
  
  const onChange = (event) => {
    const {value, name} = event.target
    setInputs({
      ...inputs, // 기존의 input 객체를 복사해야 기존 입력값을 보존할 수 있다. 
      [name] : value  // name키를 가진 값을 value로 설정
    })
  }
  let result = base / height

  return (
    <div className="App">
      <h1>밑변(a)과 빗변(c) 사이의<br />끼인각(A) 구하기</h1>
      <img src="https://limssong.github.io/images/stairsAngle/triangle.png" alt="삼각형 이미지" />
      <ul>
        <li><input type="text" placeholder="밑변 길이(a) 입력" onChange={onChange} name="base" value={base} /></li>
        <li><input type="text" placeholder="높이 길이(b) 입력" onChange={onChange} name="height" value={height} /></li>
      </ul>
      <ul>
        <li>입력하신 밑변(a) 길이 : {base}</li>
        <li>입력하신 높이(b) 길이 : {height}</li>
        {/* <p>밑변 / 높이 : {result}</p> */}
        {/* <p>{result} = tan X</p> */}
      </ul>
      <h2>A = {getAngleFromTan(result) === true ? getAngleFromTan(result)+"°" : "값을 정확하게 입력하세요"}</h2>
    </div>
  )
}

export default App;
