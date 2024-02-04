import { DayType } from "common/types";
import { useState } from "react";
import { TextField,Button } from "@mui/material";
export function Days(props:{
    days:DayType[],
    onClick : (title:string) => void,
    onEdit : (index :number) => void
}) {
    const [title,setTitle]=useState("")
    return (<div>
        <div style={{margin:"30px"}}>
        <TextField
            id="outlined-basic"
            label="Title"
            value={title}
            onChange={(e)=>{
                setTitle(e.target.value);
            }}
            variant="filled"
            style={{
                width:"80%",
                height:"50px",
              backgroundColor: "white",
              borderRadius: "4px",
              marginInline:"20px"
            }}
          />
          <Button
            variant="contained"
            style={{
              height:"52px",
              width:"200px",
              border: "1px solid black",
            }} 
            onClick={async()=>{
                props.onClick(title);
            }}
          >
            New Day
          </Button>
        </div>
        {props.days.map((day,index)=>{
            return (<div>
                <h2>{day.title}</h2>
                <button onClick={()=>{
                  props.onEdit(index);
                }}>Edit Day</button>
            </div>)
        })}
    </div>
    );
  }
  