 
import './App.css';
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const incress=()=>{
    setCount(count+1);
  }
  
  // const [value, setValue] = useState(0);
  const decress=()=>{
    setCount(count-1);
  }
 
  



  

  return (
 <div class="count">
<p>The number is {count}</p>

<button onClick={incress} style={{width:"100px"}}> add</button>
<button onClick={decress}>  minus </button>
 </div>
 
  );
}

export default App;
