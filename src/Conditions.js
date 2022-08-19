import {React,useState,useEffect} from 'react'

export default function Conditions({geoTo,geoFrom,toFrom}) {
  const [conditionState,setConditionState] = useState(['hi']);
  useEffect(() => {
    fetch(` http://www.mapquestapi.com/traffic/v2/incidents?key=QooMQfx1Qpr6JFyRPcHdnB32H4atd2wR&boundingBox=${geoTo.lat},${geoTo.lng},${geoFrom.lat},${geoFrom.lng}&filters=congestion`)
    .then(response=>response.json())
    .then(data=>setConditionState(data.incidents))
    console.log(conditionState)
   
  }, [geoFrom])
 
  return (
    <>
    <hr />
    <div>Conditions</div>
    { conditionState.map(e => {
    return(
      <>
      <h2>Going to :{toFrom.to} From: {toFrom.from}</h2>
      <p>{e.fullDesc}</p>
      </>
    ) 
  })
}
<p>{/*conditionState[0].fullDesc*/}</p>
    
    </>
  )
}
