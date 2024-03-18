export function Land(props) {
  return (
    <div style={{
        margin:"100px",
        display:"flex",
        flexDirection:"column",
        alignItems:"center"
    }}>
      <div style={{fontSize:"50px"}}>
        Welcome
        </div>
        {! props.username && <div>Please Login first</div>}
        { props.username && <button onClick={()=>{
          props.onclick();
        }}>Home</button> }
    </div>
  );
}
