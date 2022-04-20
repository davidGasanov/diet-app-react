import React from "react";
import "./App.css";
// import CssBaseline from "@mui/material/CssBaseline";
import Registration from "./Registration";
import Login from "./Login";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Register" element={<Registration />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
