import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import InstructorPage from "./pages/InstructorPage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/instructors" element={<InstructorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
