import React from "react";
import List from "./Components/List";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<List />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
