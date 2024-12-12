import React from "react";
import Navbar from "./components/Navbar.tsx";
import Home from "./pages/Home.tsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <div className="bg-slate-400 h-dvh"></div>
      <div className="bg-black h-dvh"></div>
    </div>
  );
}

export default App;
