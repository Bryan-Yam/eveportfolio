import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FencingPage from "./pages/FencingPage";
import SpeakingPage from "./pages/SpeakingPage";
import ModellingPage from "./pages/ModellingPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/fencing" element={<FencingPage />} />
        <Route path="/modelling" element={<ModellingPage />} />
        <Route path="/speaking" element={<SpeakingPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
