import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Navigation() {
  const location = useLocation();
  const path = location.pathname;

  const links = [
    { path: '/', label: 'Engine' },
    { path: '/vault', label: 'Vault' },
    { path: '/mirror', label: 'Mirror' },
    { path: '/timeline', label: 'Timeline' },
    { path: '/hook-lab', label: 'Hook Lab' },
    { path: '/pulse', label: 'Pulse' },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center bg-zinc-900/60 backdrop-blur-2xl border border-white/10 rounded-full h-16 px-2 z-[9999] shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
      {links.map(l => {
        const isActive = path === l.path;
        return (
          <Link
            key={l.path}
            to={l.path}
            className={`relative px-6 py-2.5 rounded-full font-sans text-sm transition-colors duration-200 ${
              isActive ? 'text-violet-400 font-semibold drop-shadow-[0_0_10px_rgba(124,58,237,0.8)]' : 'text-white/60 font-medium hover:text-white'
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="nav-pill"
                className="absolute inset-0 bg-violet-600/15 rounded-full shadow-[0_0_20px_rgba(124,58,237,0.2)] -z-10"
                transition={{ type: 'spring', stiffness: 350, damping: 30 }}
              />
            )}
            {l.label}
          </Link>
        );
      })}
    </div>
  );
}
