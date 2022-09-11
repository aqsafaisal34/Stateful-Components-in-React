import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import "./style.css"

function Room() {
  const [isLit, setLit] = useState(true);
  return (
    <div className={`room ${isLit ? "lit" : "dark"}`}>
   <div className="theme">Light is {isLit ? 'On' : 'Off'}
   </div>
    <button onClick={() => setLit(!isLit)}>
    ON
    </button>
    <button onClick={() => setLit(!isLit)}>
    OFF
    </button>
    </div>
  );
}

ReactDOM.render(<Room />, document.getElementById('root'));