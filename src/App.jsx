import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Engine from './pages/Engine';
import Vault from './pages/Vault';
import Mirror from './pages/Mirror';
import Timeline from './pages/Timeline';
import HookLab from './pages/HookLab';
import Pulse from './pages/Pulse';

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ position: 'relative', minHeight: '100vh', width: '100vw', backgroundColor: '#0a0a0f', overflowX: 'hidden' }}>
        <Routes>
          <Route path="/" element={<Engine />} />
          <Route path="/vault" element={<Vault />} />
          <Route path="/mirror" element={<Mirror />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/hook-lab" element={<HookLab />} />
          <Route path="/pulse" element={<Pulse />} />
        </Routes>
        <Navigation />
      </div>
    </BrowserRouter>
  );
}
