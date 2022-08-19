import {React,useState,useEffect} from 'react'


export default function Fave() {
  const [savedLocations,setSavedLocations] = useState([{id:1,to:'to',from:"from"}])
  useEffect(() => {
    fetch('http://localhost:3001/locations')
  .then(resp=>resp.json())
  .then(data=>{
    console.log(data)
   setSavedLocations(data)
  })
  }, [])
  
  return (
    <>
    <h1>Saved Locations</h1>
   <ul>
      {
        savedLocations.map(e=>{
          return <li id={e.id}>To: {e.to} From: {e.from}</li>
        })
      }

   </ul>
    </>
  )
}
