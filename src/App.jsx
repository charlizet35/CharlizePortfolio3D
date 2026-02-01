import './App.css';
import { useState } from 'react';
import Header from './components/header';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Experience from './pages/Experience';
import Projects from './pages/Projects';

function App() {
  const [page, setPage] = useState('home');

  return (
    <div className="App" style={{ position: 'relative', width: '100%', height: '100vh', margin: 0, padding: 0, overflow: 'hidden' }}>
      {/* pages - all full screen behind navbar */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}>
        {page === 'home' && <Home />}
        {page === 'about' && <AboutMe />}
        {page === 'experience' && <Experience />}
        {page === 'projects' && <Projects />}
      </div>

      {/* navbar always on top */}
      <div style={{ position: 'relative', zIndex: 50 }}>
        <Header onNavigate={(p) => setPage(p)} />
      </div>
    </div>
  );
}

export default App;