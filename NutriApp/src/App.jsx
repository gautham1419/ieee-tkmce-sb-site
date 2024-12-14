import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Home from './components/home';
import Navbar from './components/Navbar';
import NavbarT from './components/NavbarT';
import Vision from './components/Vision';


const App = () => {
  return (
    <Router>
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
        {/* Background */}
<div className="absolute inset-0 -z-10 h-full w-full bg-slate-380"></div>


        {/* Navbar */}
        <NavbarT />
        
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<events />} />
          <Route path="/execom" element={<execom />} />
        </Routes>

        {/* Footer */}
        <Navbar />
      </div>
    </Router>
  );
};

export default App;
