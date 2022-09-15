import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import "./style.css"


function Room() {
  const [isLit, setLit] = useState(true);
  return (
    <div className="task1">
    <h1>The ON/OFF Programme</h1>
    <div className={`room ${isLit ? "lit" : "dark"}`}>
  <h1 className="theme"> Light is {isLit ? 'On' : 'Off'}
  </h1>
    <button onClick={() => setLit (!isLit)}>
    ON
    </button>
    <button onClick={() => setLit  (!isLit)}>
    OFF
    </button>
    </div>
    </div>
  );
}

function Task() {
  const [num,setNum]= useState(0);
  const IncNum =()=>{
    setNum(num +1);
  };

  const DeNum =()=>{
    setNum( num-1);
  }
  return (
    <div className='main'>

    <h1>Increment/Decrement Programme</h1>
    <div className="task">
    <button onClick={IncNum}>Add(+)</button>


    <h1>{num}</h1>
    
    <button onClick={DeNum}>Subtract(-)</button>
    </div>
    </div>

  )
 }

ReactDOM.render(
<>
<Room />
<Task/>
</>, document.getElementById('root'));