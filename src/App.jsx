/* import React from 'react';*/
import './App.css'
import HomePage from "./pages/homepage.jsx";
import PianoPage from "./pages/pianopage.jsx";
import RecordsPage from "./pages/recordspage.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/instruments" element={<PianoPage />} />
            <Route path="/records" element={<RecordsPage />} />
            
        </Routes>
    </Router>
);
}

export default App;



