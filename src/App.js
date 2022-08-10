import {React} from "react";
import { Routes, Route, Link } from "react-router-dom";
import Main from "./Main";
import About from "./About"
import Fave from "./Fave"
function App() {
  return (
    <>
    <h1>app</h1>
    <Routes>
      <Route index path="/" element={<Main/>}></Route>
      <Route path="about" element={<About/>}></Route>
      <Route path="fave" element={<Fave/>}></Route>
    </Routes>
    </>
   );
}

export default App;
