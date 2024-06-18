import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import About from './components/About';
import PresupuestoLeutthe from './components/PresupuestoLeutthe';

function App() {
  const location = useLocation();

  return (
    <div
      style={
        location.pathname === '/presupuesto-leutthe'
          ? { backgroundColor: '#fdfdfd', color: 'black', minHeight: '100vh' }
          : {}
      }
    >
      {location.pathname !== '/presupuesto-leutthe' && <Menu />}

      <div className="px-1">
        <Routes>
          <Route path="/" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/presupuesto-leutthe" element={<PresupuestoLeutthe />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
