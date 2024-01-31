import { useState } from 'react';
import './App.css'

function App() {
  const [id,setId]=useState(true);
  const [rid,setrId]=useState(true);
  
  return (
    <>
      <div style={{height:"50px"}}>
        Hello
      </div>
      <div style={{padding:"2px",border:"2px solid red",display:"inline-block",position:"relative"}}>
        <button onClick={()=>{setId(!id)}}> resize</button>
        <div className="content" style={{position:"relative",overflow:"auto",resize:id?"both":"none",border:"2px solid black"}}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati eveniet impedit qui corrupti ratione quos tenetur laudantium voluptatem autem ullam!
        </div>
        <div style={{position:"absolute",height:"10px",width:"10px",backgroundColor:"red",
      bottom:"5px",right:"5px",zIndex:-1
      }}></div>
      </div>
    </>
  )
}

export default App
