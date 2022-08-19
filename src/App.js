import {React,useState} from "react";
import { Routes, Route} from "react-router-dom";
import Main from "./Main";
import About from "./About"
import Fave from "./Fave"
import Navbar from './Navbar'
function App() {
const [toFrom,setToFrom] = useState("");


  return (
    <>
    <h1>Trafic Conditions Report</h1>
    <Navbar/>
    <Routes>
      {/*using router v6 not 5*/}
      <Route index path="/" element={<Main setToFrom={setToFrom} toFrom={toFrom}/>}></Route>
      <Route path="fave" element={<Fave/>}></Route>
      <Route path="about" element={<About/>}></Route>
    </Routes>
    </>
   );
}

export default App;
