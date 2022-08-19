import {React,useState} from 'react'
//maybe move all non input related logic into respective components such as main and fave
export default function Inputs({setToFrom}) {
    const [to,setTo] = useState();
    const [from,setFrom] = useState();
    function handleSubmit(e){
        e.preventDefault();
        setToFrom({
            to:to,
            from:from,
        })
       console.log(from,to)
    }
  return (
    <>
    <form onSubmit={handleSubmit}>
    To: <input onChange={(e)=>setTo(e.target.value)} name='to' type="text" />
    <br />
    From: <input onChange={(e)=>setFrom(e.target.value)} name='from' type="text" />
    <br />
    <input  type="submit" value={"Enter"} />
    </form>
    </>
  )
}
