import {React,useEffect,useState} from 'react'
import Conditions from './Conditions'
import Inputs from './Inputs'

export default function Main({toFrom,setToFrom}) {
  
  const [geoTo,setGeoTo] = useState('');
  const [geoFrom,setGeoFrom] = useState('');

//takes inputed data converts to geo code using mapquest geocode api and stores in state
    useEffect(() => {    
      //could maybe refactor this into a single function that runs twice but is kind of annoying and specific 
    fetch(`http://www.mapquestapi.com/geocoding/v1/address?key=QooMQfx1Qpr6JFyRPcHdnB32H4atd2wR&location=${toFrom.to}`)
    .then((response)=>response.json())
    .then((data)=>{
      setGeoTo({
         lat:data.results[0].locations[0].latLng.lat,
        lng:data.results[0].locations[0].latLng.lng,
      },)
      console.log(geoTo)
    })


    fetch(`http://www.mapquestapi.com/geocoding/v1/address?key=QooMQfx1Qpr6JFyRPcHdnB32H4atd2wR&location=${toFrom.from}`)
    .then((response)=>response.json())
    .then((data)=>{
      setGeoFrom({
        lat:data.results[0].locations[0].latLng.lat,
        lng:data.results[0].locations[0].latLng.lng,
      },)
    })
    console.log(geoFrom)
  }, [toFrom])
  
  //function to add faved locations to the db
function handleFave(){
  fetch('http://localhost:3001/locations', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(toFrom),
})
  .then((response) => response.json())
  .then(data=>{
    console.log(data)
  })
}
  
  return (
    <>
    <div>Main</div>
    <Inputs setToFrom={setToFrom} handleFave={handleFave}></Inputs>
    <Conditions geoTo={geoTo} geoFrom={geoFrom} toFrom={toFrom}/>
    </>
  )
}
