import { useState } from 'react';
import './App.css'

function App() {
  const [id,setId]=useState(false);

  return (
    <>
      <div style={{height:"50px"}}>
        Hello
      </div>
      <div>

      <div style={{position:"absolute",padding:"10px",border:"2px solid black"}}  onMouseMove={(e)=>{
          if(!id)return;
          var x = e.clientX;
          var y = e.clientY;
          e.currentTarget.style.left = x -30 + 'px';
          e.currentTarget.style.top = y -20 + 'px';
        }}>
        <button  onClick={()=>{
          setId(!id)
          console.log(id)
        }} 
        >{id?"Place":"Move"}</button>
        <br />
        Hello I am the text

      </div>
      </div>
    </>
  )
}

export default App
