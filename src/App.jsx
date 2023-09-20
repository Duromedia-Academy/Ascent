import { useState, useEffect } from "react";

import "./input.css";

import "./font/gotham/GothamBlack.otf";
import "./font/gotham/GothamBold.otf";
import "./font/gotham/GothamLight.ttf";

import { Home2 } from "./containers";
import { Header, Footer } from "./components";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="">
        <Header />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home2 />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
