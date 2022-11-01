import {React,useState,useEffect} from 'react'

export default function Conditions({geoTo,geoFrom,toFrom}) {
  const [conditionState,setConditionState] = useState(['hi']);
  useEffect(() => {
    //console.log(geoTo,geoFrom)
    fetch(`http://www.mapquestapi.com/traffic/v2/incidents?key=QooMQfx1Qpr6JFyRPcHdnB32H4atd2wR&boundingBox=${geoTo.lat},${geoTo.lng},${geoFrom.lat},${geoFrom.lng}&filters=construction,incidents}&filters=congestion`)
    
    .then(response=>response.json())
    .then(data=>{
      
      console.log(data)
      setConditionState(data.incidents)})
    console.log(conditionState)
   
  }, [geoTo,geoFrom])
 
  return (
    <>
    <hr />
    <div>Conditions</div>
    <h2>Going to :{toFrom.to} From: {toFrom.from}</h2>
    <ol>
    { conditionState.map(e => {
    return(
      <>
      <li>{e.fullDesc}</li>
      </>
    ) 
  })
}
</ol>
<p>{conditionState[0].fullDesc}</p>
    
    </>
  )
}
