import  Navbar  from './components/Navbar';
//import Footer from "./components/Footer";
import  About  from './pages/About';
import  Updates  from './pages/Updates';
import  Portfolio  from "./pages/Portfolio";
import  Contact  from "./pages/Contact";
import { Route, Routes } from "react-router-dom"
//import { createContext, useState } from "react"

function App() {
  return (
    <>
      <Navbar /> 
      <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="/About" element={<About />} />
            <Route path="/Portfolio" element={<Portfolio />} />
            <Route path="/Updates" element={<Updates />} />
            <Route path="/Contact" element={<Contact />} />
      </Routes> 
    </>
  );
}

export default App;
