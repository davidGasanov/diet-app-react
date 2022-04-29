import {React} from "react";
import "./App.css";
// import CssBaseline from "@mui/material/CssBaseline";
import Registration from "./Registration";
import Posts from "./Posts";
import Login from "./Login";
import { useSelector } from "react-redux";
import { useEffect } from "react";

import { Route, Routes } from "react-router-dom";

function App() {

  const state = useSelector((state)=>state)

  useEffect(()=>{console.log("State has been updated: " ); console.log(state)})

  return (
    <div className="App">
      <Routes>
        <Route path="/userposts" element={<Posts />} />
        <Route path="/Register" element={<Registration />} />
        <Route  path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
