import { React } from "react";
import "./App.css";
// import CssBaseline from "@mui/material/CssBaseline";

//PAGES
import Registration from "./Registration";
import Food from "./Food";
import Login from "./Login";

//COMPONENTS
import Navbar from "./components/Navbar";

//HOOKS
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  const state = useSelector((state) => state);

  useEffect(() => {
    console.log("State has been updated: ");
    console.log(state);
  });

  const userLoggedIn = state.currentUser !== "";

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/Food" element={<Food />} />
        <Route
          path="/Register"
          element={
            userLoggedIn ? <Navigate to="/userposts" /> : <Registration />
          }
        />
        <Route
          path="/Login"
          element={userLoggedIn ? <Navigate to="/userposts" /> : <Login />}
        />
      </Routes>
    </div>
  );
}

export default App;
