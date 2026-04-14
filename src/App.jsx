import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState, createContext, useContext } from 'react';
import Spline from '@splinetool/react-spline';
import Header from './components/header';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import MichelinMaihem from './pages/ProjectPages/MichelinMaihem';
import UrgentCare from './pages/ProjectPages/UrgentCare';
import Portfolio from './pages/ProjectPages/Portfolio';
import DemoReel from './pages/ProjectPages/DemoReel';
import { Analytics } from '@vercel/analytics/react';

export const SceneContext = createContext(null);

const SCENE_URLS = [
  'https://prod.spline.design/Hbtm1NoPMbDZlWqe/scene.splinecode',
  'https://prod.spline.design/xzJc0Qh56nEss09z/scene.splinecode',
  'https://prod.spline.design/xdjCnoAg0by-34dO/scene.splinecode', //AboutMe
  'https://prod.spline.design/GMRVPW6hJe-750Rk/scene.splinecode' //Home
];

function SplinePreloader() {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: 1, height: 1, opacity: 0, pointerEvents: 'none', overflow: 'hidden', zIndex: -1 }}>
      {SCENE_URLS.map((url) => (
        <Spline key={url} scene={url} />
      ))}
    </div>
  );
}

function LocationLogger() {
  const location = useLocation();
  useEffect(() => {
    console.log('Current route:', location.pathname);
  }, [location]);
  return null;
}

function AppInner() {
  const [sceneReady, setSceneReady] = useState(false);
  const location = useLocation();

  // Reset sceneReady to false on every route change so header fades out between pages
  useEffect(() => {
    setSceneReady(false);
  }, [location.pathname]);

  return (
    <SceneContext.Provider value={{ sceneReady, setSceneReady }}>
      <LocationLogger />
      <SplinePreloader />
      <div className="App" style={{ position: 'relative', width: '100%', height: '100vh', margin: 0, padding: 0 }}>

        <div style={{
          position: 'relative',
          zIndex: 50,
          pointerEvents: sceneReady ? 'auto' : 'none',
          opacity: sceneReady ? 1 : 0,
          transition: 'opacity 0.6s ease',
        }}>
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
            <Route path="/Portfolio" element={<Portfolio />} />
            <Route path="/DemoReel" element={<DemoReel />} />
          </Routes>
        </div>
      </div>
      <Analytics />
    </SceneContext.Provider>
  );
}

function App() {
  return (
    <Router>
      <AppInner />
    </Router>
  );
}

export default App;