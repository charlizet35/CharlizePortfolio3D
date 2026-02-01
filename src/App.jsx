import './App.css';
import Spline from '@splinetool/react-spline';
import Header from "./components/header";

function App() {
  return (
    <div className="App" style={{position: 'relative', width: '100%', height: '100vh', margin: 0, padding: 0, overflow: 'hidden'}}>
      {/* spline */}
      <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1}}>
        <Spline
          scene="https://prod.spline.design/GMRVPW6hJe-750Rk/scene.splinecode"
          style={{width: '100%', height: '100%'}}
        />
      </div>

      {/* navbar */}
      <div style={{position: 'relative', zIndex: 50}}>
        <Header />
      </div>
    </div>
  );
}

export default App;