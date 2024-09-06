import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import InstructorPage from "./pages/InstructorPage";
import AboutUs from "./pages/AboutUs";
import PricingPage from "./pages/Pricing";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/instructors" element={<InstructorPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/pricing" element={<PricingPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
