import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Navigation() {
  const loc = useLocation();
  const path = loc.pathname;

  const links = [
    { path: '/', label: 'Engine' },
    { path: '/vault', label: 'Vault' },
    { path: '/mirror', label: 'Mirror' },
    { path: '/timeline', label: 'Timeline' },
    { path: '/hook-lab', label: 'Hook Lab' },
    { path: '/pulse', label: 'Pulse' },
  ];

  return (
    <div style={{
      position: 'fixed',
      bottom: '24px',
      left: '50%',
      transform: 'translateX(-50%)',
      alignItems: 'center',
      backdropFilter: 'blur(40px)',
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      borderColor: 'rgba(255, 255, 255, 0.15)',
      borderRadius: '32px',
      borderStyle: 'solid',
      borderWidth: '1px',
      boxShadow: 'rgba(0, 0, 0, 0.5) 0px 10px 40px',
      display: 'flex',
      height: '64px',
      paddingInline: '8px',
      zIndex: 9999
    }}>
      {links.map(l => {
        const isActive = path === l.path;
        return (
          <Link
            key={l.path}
            to={l.path}
            style={{
              position: 'relative',
              padding: '10px 24px',
              textDecoration: 'none',
              borderRadius: '24px',
              color: isActive ? '#7C3AED' : 'rgba(255, 255, 255, 0.6)',
              fontFamily: '"Inter", sans-serif',
              fontSize: '14px',
              fontWeight: isActive ? 600 : 500,
              transition: 'color 0.2s ease',
              textShadow: isActive ? '0px 0px 15px rgba(124, 58, 237, 0.8)' : 'none',
            }}
          >
            {isActive && (
              <motion.div
                layoutId="nav-pill"
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundColor: 'rgba(124, 58, 237, 0.1)',
                  borderRadius: '24px',
                  boxShadow: '0 0 20px rgba(124, 58, 237, 0.2)',
                  zIndex: -1
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
            {l.label}
          </Link>
        );
      })}
    </div>
  );
}
