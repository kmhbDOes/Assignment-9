import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="md:min-h-[calc(100vh-120px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
