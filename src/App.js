import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Logement from './pages/Logement';
import PageNotFound from './pages/PageNotFound';

import React from 'react';

function App() {
  return (
  <React.StrictMode>
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logement" element={<Logement />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    </Router>
  </React.StrictMode>
  );
}

export default App;
