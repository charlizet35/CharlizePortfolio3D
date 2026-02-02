import './App.css';
import { useEffect, useState, useCallback } from 'react';
import Header from './components/header';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Experience from './pages/Experience';
import Projects from './pages/Projects';

const pathToPage = (path) => {
  switch (path) {
    case '/about':
      return 'about';
    case '/experience':
      return 'experience';
    case '/projects':
      return 'projects';
    case '/':
    default:
      return 'home';
  }
};

const pageToPath = (page) => {
  switch (page) {
    case 'about':
      return '/about';
    case 'experience':
      return '/experience';
    case 'projects':
      return '/projects';
    case 'home':
    default:
      return '/';
  }
};

function App() {
  const [page, setPage] = useState(() => pathToPage(window.location.pathname));

  // navigate and push history state
  const navigate = useCallback((targetPage, { replace = false } = {}) => {
    const path = pageToPath(targetPage);
    try {
      if (replace) window.history.replaceState({ page: targetPage }, '', path);
      else window.history.pushState({ page: targetPage }, '', path);
    } catch (e) {
      // fallback: set location
      window.location.pathname = path;
    }
    setPage(targetPage);
  }, []);

  //back/forward
  useEffect(() => {
    const onPop = () => {
      setPage(pathToPage(window.location.pathname));
    };
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  // ensure URL matches initial state 
  useEffect(() => {
    const expectedPath = pageToPath(page);
    if (window.location.pathname !== expectedPath) {
      window.history.replaceState({ page }, '', expectedPath);
    }
  }, [page]);

  return (
    <div className="App" style={{ position: 'relative', width: '100%', height: '100vh', margin: 0, padding: 0, overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}>
        {page === 'home' && <Home />}
        {page === 'about' && <AboutMe />}
        {page === 'experience' && <Experience />}
        {page === 'projects' && <Projects />}
      </div>

      <div style={{ position: 'relative', zIndex: 50 }}>
        <Header onNavigate={(p) => navigate(p)} />
      </div>
    </div>
  );
}

export default App;