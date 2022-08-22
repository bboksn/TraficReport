import {React,useState} from 'react'
import { Button,TextField,Typography} from '@mui/material';

//maybe move all non input related logic into respective components such as main and fave
export default function Inputs({setToFrom,handleFave}) {
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
    <Typography>To:</Typography> <TextField onChange={(e)=>setTo(e.target.value)} name='to'></TextField>
    <br />
    <Typography>From</Typography> <TextField onChange={(e)=>setFrom(e.target.value)} name='from' type="text"/>
    <br />
    <Button  variant="contained" type="submit">Enter</Button>
    </form>
    <Button variant='contained' type="submit" name='fave'onClick={handleFave}>⭐</Button>
    </>
  )
}
