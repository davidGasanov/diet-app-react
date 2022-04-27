import React from "react";
import "./App.css";
// import CssBaseline from "@mui/material/CssBaseline";
import Registration from "./Registration";
import Posts from "./Posts";
import Login from "./Login";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/userposts" element={<Posts />} />
        <Route path="/Register" element={<Registration />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
