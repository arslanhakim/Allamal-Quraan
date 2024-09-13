import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import InstructorPage from "./pages/InstructorPage";
import AboutUs from "./pages/AboutUs";
import PricingPage from "./pages/Pricing";
import Courses from "./pages/Courses";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/instructors" element={<InstructorPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
