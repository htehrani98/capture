import React from "react";
// Global Style
import GlobalStyle from "./components/GlobalStyle";
//Import Pages
import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";
import ContactUS from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import MovieDetail from "./pages/MovieDetail";
// Router
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav /> {/*now how the fuck these routes go inside this nav?? */}
      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route exact path="/work" element={<OurWork />} />
        <Route path="/work/:id" element={<MovieDetail />} />
        <Route path="/contact" element={<ContactUS />} />
      </Routes>
    </div>
  );
}

export default App;
