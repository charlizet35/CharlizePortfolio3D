import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/header';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import MichelinMaihem from './pages/ProjectPages/MichelinMaihem';
import UrgentCare from './pages/ProjectPages/UrgentCare';
import { Analytics } from '@vercel/analytics/react';

function LocationLogger() {
  const location = useLocation();
  
  useEffect(() => {
    console.log('Current route:', location.pathname);
  }, [location]);
  
  return null;
}

function App() {
  return (
    <Router>
      <LocationLogger />
      <div className="App" style={{ position: 'relative', width: '100%', height: '100vh', margin: 0, padding: 0 }}>
        
        <div style={{ position: 'relative', zIndex: 50, pointerEvents: 'none' }}>
          <Header />
        </div>

        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/MichelinMaihem" element={<MichelinMaihem />} />
            <Route path="/UrgentCare" element={<UrgentCare />} />
          </Routes>
        </div>
      </div>
      <Analytics />
    </Router>
  );
}

export default App;