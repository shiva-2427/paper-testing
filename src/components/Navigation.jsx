import { Link, useLocation } from 'react-router-dom';

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
      bottom: '40px',
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
      justifyContent: 'space-evenly',
      paddingInline: '12px',
      width: '700px',
      zIndex: 9999
    }}>
      {links.map(l => (
        <Link
          key={l.path}
          to={l.path}
          className={`nav-link ${path === l.path ? 'active' : ''}`}
        >
          {l.label}
        </Link>
      ))}
    </div>
  );
}
