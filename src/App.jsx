import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useRef } from 'react';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import About from './components/About';
import PresupuestoLeutthe from './components/PresupuestoLeutthe';
import Prints from './components/Prints';
import Texto from './components/Texto';

function App() {
  const location = useLocation();
  const scrollRef = useRef(null);

  return (
    <div
      ref={scrollRef}
      style={
        location.pathname === '/presupuesto-leutthe'
          ? { backgroundColor: '#fdfdfd', color: 'black', minHeight: '100vh' }
          : {}
      }
    >
      <Texto />

      {location.pathname !== '/presupuesto-leutthe' && <Menu />}

      <div className="px-1">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Gallery />} />
            <Route path="/info" element={<About />} />
            <Route
              path="/presupuesto-leutthe"
              element={<PresupuestoLeutthe />}
            />
            <Route path="/prints" element={<Prints />} />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
