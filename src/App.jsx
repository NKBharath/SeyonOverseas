import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Universities from "./pages/Universities";
import Services from "./pages/Services";
import Reviews from "./pages/Reviews";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Destinations from "./pages/Destinations";

function App() {
  return ( 
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Destinations" element={<Destinations />}/>
      <Route path="/Services" element={<Services />}/>
      <Route path="/Reviews" element={<Reviews />}/>
      <Route path="/Blog" element={<Blog />}/>
      <Route path="/About" element={<About />}/>
      <Route path="/Contact" element={<Contact />}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;