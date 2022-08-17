import React from "react";
import Home from "./pages/Home"
import Header from "./components/Header"
import About from "./pages/About";
import Works from "./pages/Works";
import Blog from "./pages/Blog";
import Updates from "./pages/Updates";
import Links from "./pages/Links";
import Forum from "./pages/Forum";
import Contact from "./pages/Contact";
import Footer from "./components/Footer"
import { Route, Routes} from "react-router-dom"


function App() {
  return (
    <>
      <Header />

      <div> 
        <Routes>
          <Route path="/" element={<Home name="Reader" />} />
          <Route path="/Home" element={<Home name="Reader" />} />
          <Route path="/About" element={<About />} />
          <Route path="/Works" element={<Works />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Updates" element={<Updates />} />
          <Route path="/Links" element={<Links />} />
          <Route path="/Forum" element={<Forum />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>

      <Footer />  
    </>
  );
}

export default App;
