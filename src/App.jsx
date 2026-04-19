import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import BackgroundDust from './components/BackgroundDust';
import Engine from './pages/Engine';
import Vault from './pages/Vault';
import Mirror from './pages/Mirror';
import Timeline from './pages/Timeline';
import HookLab from './pages/HookLab';
import Pulse from './pages/Pulse';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Engine />} />
        <Route path="/vault" element={<Vault />} />
        <Route path="/mirror" element={<Mirror />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/hook-lab" element={<HookLab />} />
        <Route path="/pulse" element={<Pulse />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ position: 'relative', minHeight: '100vh', width: '100vw', backgroundColor: '#0a0a0f', overflowX: 'hidden' }}>
        <BackgroundDust />
        <AnimatedRoutes />
        <Navigation />
      </div>
    </BrowserRouter>
  );
}
