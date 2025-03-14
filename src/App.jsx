import "./App.css";
import { NavLink, Routes, Route, useLocation } from "react-router";
import Home from "./components/Home";
import Info from "./components/Info";
import { AnimatePresence } from "motion/react";

function App() {
  const location = useLocation();

  return (
    <div className="overflow-x-hidden">
      <div className="fixed inset-0 top-8 flex h-screen w-full items-start mix-blend-difference">
        <h1 className="mx-auto font-[pizius] text-[20vw] leading-none font-black blur-[1vw] md:text-[12vw] md:blur-[0.7vw]">
          sofja
        </h1>
      </div>
      <nav className="fixed inset-0 z-10 flex h-min justify-center text-4xl text-white/60">
        <NavLink
          to={location.pathname === "/" ? "/info" : "/"}
          className="blur-[2px] transition-all duration-300 hover:blur-none"
        >
          {location.pathname === "/" ? "?" : ".."}
        </NavLink>
      </nav>
      <AnimatePresence>
        <Routes>
          <Route path="/info" element={<Info />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
