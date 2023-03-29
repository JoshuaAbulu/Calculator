import './App.css';
import { useState } from "react";

function App() {

  const [result, setResult] = useState('')

  const clickButton = (e) => {
    let val = e.target.value
    return(
      setResult(result + `${val}`)
    )
  }

  return (
    <div className="App">
      <div className="result">
        <input type="text" className='result-box' value={result}/>
      </div>
      <div className="buttons">
        <div className="rows">
          <button className="btn" value='7' onClick={clickButton}>7</button>
          <button className="btn" value='8' onClick={clickButton}>8</button>
          <button className="btn" value='9' onClick={clickButton}>9</button>
          <button className="del btn" onClick={() => {setResult(result.slice(0, -1))}}>DEL</button>
          <button className="btn" value='4' onClick={clickButton}>4</button>
          <button className="btn" value='5' onClick={clickButton}>5</button>
          <button className="btn" value='6' onClick={clickButton}>6</button>
          <button className="btn" value='+' onClick={clickButton}>+</button>
          <button className="btn" value='1' onClick={clickButton}>1</button>
          <button className="btn" value='2' onClick={clickButton}>2</button>
          <button className="btn" value='3' onClick={clickButton}>3</button>
          <button className="btn" value='-' onClick={clickButton}>-</button>
          <button className="btn" value='.' onClick={clickButton}>.</button>
          <button className="btn" value='0' onClick={clickButton}>0</button>
          <button className="btn" value='/' onClick={clickButton}>/</button>
          <button className="btn" value='*' onClick={clickButton}>x</button>
        </div>
        <div className="bottom">
          <button className='btm-btn reset del' onClick={() => {setResult('')}}>RESET</button>
          <button className='btm-btn equals' onClick={() => {setResult((eval(result)).toString())}}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
