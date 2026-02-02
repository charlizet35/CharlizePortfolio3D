import './App.css';
import { useEffect, useState, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Experience from './pages/Experience';
import Projects from './pages/Projects';

function App() {
  return (
    <Router>
      <div className="App" style={{ position: 'relative', width: '100%', height: '100vh', margin: 0, padding: 0, overflow: 'hidden' }}>
        
        {/* Header is always visible */}
        <div style={{ position: 'relative', zIndex: 50 }}>
          <Header />
        </div>

        {/* Page content */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;