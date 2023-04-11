import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header className="prim-col"></Header>
      <div className="md:min-h-100 prim-col">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
