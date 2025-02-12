import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage"
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Redirect the root URL ("/") to HomePage */}
        <Route path="/" element={<HomePage />} />
        {/* If no route matches, redirect to HomePage */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
