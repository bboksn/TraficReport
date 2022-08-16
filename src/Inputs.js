import {React,useState} from 'react'

export default function Inputs({setToFrom}) {
    const [from,setFrom] = useState();
    const [to,setTo] = useState();
    function handleSubmit(e){
        e.preventDefault();
        
       console.log(from,to)
    }
  return (
    <>
    <form onSubmit={handleSubmit}>
    From: <input onChange={(e)=>setFrom(e.target.value)} name='from' type="text" />
    <br />
    To: <input onChange={(e)=>setTo(e.target.value)} name='to' type="text" />
    <br />
    <input  type="submit" value={"Enter"} />
    </form>
    </>
  )
}
