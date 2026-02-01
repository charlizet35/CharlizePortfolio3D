import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Spline from '@splinetool/react-spline';

import Header from "./components/header";

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Header />

      {/* 3D Scene */}
      <div className="pt-16"> {/* push content down so fixed navbar doesn't cover it */}
        <Spline scene="https://prod.spline.design/GMRVPW6hJe-750Rk/scene.splinecode" />
      </div>
    </div>
  );
}

export default App;
