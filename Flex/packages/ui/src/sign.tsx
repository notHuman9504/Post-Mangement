import { Button, TextField } from "@mui/material";
import { useState } from "react";

export function Sign(props:{
  onClick: (username: string, password: string) => void
}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div style={{display:"flex",
    justifyContent:"center",boxSizing:"border-box"}}>
      <div style={{width :"300px",height:"200px",display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"space-evenly",
        marginTop:"170px"
        
    }}>
        <div style={{width:"100%"}}>
          <TextField
            id="outlined-basic"
            label="Username"
            variant="filled"
            style={{
                marginTop:"10px",
              width:"100%",
              backgroundColor: "white",
              borderRadius: "4px",
            }}
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </div>
        <div style={{width:"100%",marginBottom:"10px"}}>
          <TextField
            id="outlined-basic"
            label="Password"
            variant="filled"
            style={{
                width:"100%",
              backgroundColor: "white",
              borderRadius: "4px",
            }}
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div style={{width:"100%"}}>
          <Button
            variant="contained"
            style={{
              width:"100%",
              border: "1px solid black",
            }}
            onClick={async()=>{
              props.onClick(username,password)
            }}
          >
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
}
