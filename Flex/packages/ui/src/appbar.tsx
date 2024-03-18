
// #1976d2
import { Typography, Button } from "@mui/material";
export function AppBar(props:{
    username : string
    onSignup :()=>void,
    onLogIn :()=>void,
    onLogOut :()=>void
}) {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "70px",
          margin: "0px",
          borderBottom: "4px solid #1976d2",
        }}
      >
        <div
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <Typography
              style={{
                fontSize: "35px",
                padding: "10px",
              }}
            >
              <b>Flex Your Life</b>
            </Typography>
          </div>
          <div>
            {!props.username && <> <Button
              variant="contained"
              style={{
                boxShadow: "none",
                margin: "10px",
                border: "1px solid black",
              }}
              onClick={async()=>{
                props.onLogIn();
              }}
            >
              Log In
            </Button>
            <Button
              variant="contained"
              style={{
                boxShadow: "none",
                margin: "10px",
                border: "1px solid black",
              }}
              onClick={async()=>{
                props.onSignup();
              }}
            >
              Sign Up
            </Button></>}
            {props.username && <> <Button
              variant="text"
              style={{
                boxShadow: "none",
                margin: "10px",
                color:"white"
              }}
            >
              {props.username}
            </Button>
            <Button
              variant="contained"
              style={{
                boxShadow: "none",
                margin: "10px",
                border: "1px solid black",
              }}
              onClick={async()=>{
                props.onLogOut();
              }}
            >
              Log Out
            </Button></>}
          </div>
        </div>
      </div>
    </>
  );
}
