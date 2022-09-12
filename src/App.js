import {React,useState} from "react";
import { Routes, Route} from "react-router-dom";
import Main from "./Main";
import About from "./About"
import Fave from "./Fave"
import Navbar from './Navbar'
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
function App() {
const [toFrom,setToFrom] = useState("");


  return (
    <>
<Grid2 container>
  <Grid2 xs={12}>
    <h1>Trafic Conditions Report</h1>
    <Navbar/>
    </Grid2>
    <Routes>
      {/*using router v6 not 5*/}
      <Route index path="/" element={<Main setToFrom={setToFrom} toFrom={toFrom}/>}></Route>
      <Route path="fave" element={<Fave/>}></Route>
      <Route path="about" element={<About/>}></Route>
    </Routes>
    </Grid2>
    </>
   );
}

export default App;
