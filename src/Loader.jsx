import React, { useState ,useEffect} from 'react'

function Loader() {
    const[count,setCount]=useState(0);
    let k=null;
    useEffect(()=>{
      k=setInterval(()=>{
         setCount((pre)=>pre=pre+1)
       },20)
       return ()=>clearInterval(k);
    },[count])
  return (
    <div style={{display:"flex", justifyContent:"space-around",alignItems:"center"}}>
      {
       [...Array(50)].map((ele,index)=>
       (
        <div style={{width:"40px",height:"25px",backgroundColor:index<count?"green":"white"}}></div>
       )
       )
      }
    </div>
  )
}

export default Loader
