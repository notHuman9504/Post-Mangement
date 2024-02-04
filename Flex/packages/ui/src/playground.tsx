import { PostParams } from "common/types";
import { useState } from "react";
import { TextField, Button } from "@mui/material";
export function Playground(props: {
  posts: PostParams[];
  onClick: (content: string) => void;
}) {
  const [content, setContent] = useState("");
  return (
    <div
      style={{
        width: "100%",
        height:"100vh",
        overflow:"auto"
      }}
    >
      <div style={{ margin: "30px" }}>
        <TextField
          id="outlined-basic"
          label="Title"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
          variant="filled"
          style={{
            width: "80%",
            height: "50px",
            backgroundColor: "white",
            borderRadius: "4px",
            marginInline: "20px",
          }}
        />
        <Button
          variant="contained"
          style={{
            height: "52px",
            width: "200px",
            border: "1px solid black",
          }}
          onClick={async () => {
            props.onClick(content);
          }}
        >
          New Post
        </Button>
      </div>

      {props.posts.map((post) => {
        return (
          <>
            <Post post={post}></Post>
          </>
        );
      })}
    </div>
  );
}

function Post(props: { post: PostParams }) {
  const post = props.post;
  const [rid, setRid] = useState(false);
  const [id, setId] = useState(false);
  const [mid,setMid] =useState(false);
  return (
    
    <div
      style={{
        position: "relative",
        backgroundColor: "#a7a7a7",
        display: "inline-block",
        padding: "3px",
        borderRadius:"10px",
        margin:"2px"
      }}
      onMouseDown={()=>{
        setId(true);
      }}
      onMouseUp={()=>{
        setId(false);
      }}
      
      onMouseMove={(e)=>{
        if(!mid)return;
        if(!id)return;
        if(rid)return;
        let getStyle=window.getComputedStyle(e.currentTarget)
        let left =parseInt(getStyle.left);
        let top =parseInt(getStyle.top);
        
        e.currentTarget.style.left=`${left + e.movementX}px`
        e.currentTarget.style.top=`${top + e.movementY}px`

      }}

      onMouseLeave={()=>{
        setId(false);
      }}
    >
      <button 
      style={{
        margin:"2px",
        borderRadius:"4px",
        backgroundColor:"#1976d2",
        color:"white"
      }}
      onClick={()=>{
        setMid(!mid);
      }}>{mid?"place":"move"}</button>
      <button
      style={{
        margin:"2px",
        borderRadius:"4px",
        backgroundColor:"#1976d2",
        color:"white"
      }}
        onClick={() => {
          setRid(!rid);
        }}
      >
        {rid ? "save" : "resize"}
      </button>
      <div
      
        style={{
          background: "black",
          position: "relative",
          overflow: "auto",
          minWidth: "200px",
          minHeight: "70px",
          width: post.width,
          height: post.height,
          top: post.top,
          left: post.left,
          resize: rid ? "both" : "none",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius:"7px",
          backgroundImage: rid?"linear-gradient(-45deg, gray 10px, transparent 10px)":"none"
        }}

      >
        {post.content}
      </div>
    </div>
  );
}
