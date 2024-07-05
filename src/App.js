import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Classes from "./pages/Classes";
import Pricing from "./pages/Pricing";
import Trainers from "./pages/Trainers";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/price" element={<Pricing />} />
        <Route path="/trainer" element={<Trainers />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
