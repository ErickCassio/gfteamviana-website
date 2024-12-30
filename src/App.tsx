import React from "react";
import Navbar from "./components/Navbar.tsx";
import Home from "./pages/Home.tsx";
import Gym from "./pages/Gym.tsx";
import Classes from "./pages/Classes.tsx";
import "./App.css";
import Galery from "./pages/Galery.tsx";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Gym/>
      <Classes/>
      <Galery/>
    </div>
  );
}

export default App;
