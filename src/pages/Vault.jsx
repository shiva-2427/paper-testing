import { motion } from 'framer-motion';
import { useCounter } from '../hooks/useAnimations';

const VaultCard = ({ title, score, status, platform1, platform2, delay }) => {
  const animatedScore = useCounter(score, 1000);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02, borderColor: 'rgba(255, 255, 255, 0.3)', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
      transition={{ delay, duration: 0.4, ease: "easeOut", scale: { duration: 0.2, ease: "easeOut" } }}
      style={{
        backdropFilter: 'blur(24px)',
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        borderColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '16px',
        borderStyle: 'solid',
        borderWidth: '1px',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        height: '240px',
        cursor: 'pointer'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
        <div style={{ backgroundColor: 'rgba(255, 100, 60, 0.1)', border: '1px solid rgba(255, 100, 60, 0.2)', borderRadius: '12px', padding: '4px 10px', display: 'flex', alignItems: 'center' }}>
          <span style={{ color: '#FF8C66', fontSize: '12px', fontWeight: 600 }}>🔥 {animatedScore}/100</span>
        </div>
        <div style={{ color: status === 'IN ENGINE' ? '#7C3AED' : 'rgba(255,255,255,0.4)', fontSize: '10px', fontWeight: 600, border: status === 'IN ENGINE' ? '1px solid rgba(124, 58, 237, 0.5)' : 'none', padding: status === 'IN ENGINE' ? '2px 8px' : '0', borderRadius: '8px' }}>
          {status}
        </div>
      </div>
      <div style={{ color: '#FFFFFF', fontSize: '18px', fontWeight: 600, lineHeight: '1.4', flexGrow: 1 }}>
        {title}
      </div>
      <div style={{ display: 'flex', gap: '8px' }}>
        {platform1 && (
          <div style={{ backgroundColor: 'rgba(6, 182, 212, 0.1)', color: '#06B6D4', padding: '4px 8px', borderRadius: '6px', fontSize: '11px', fontWeight: 500 }}>
            {platform1}
          </div>
        )}
        {platform2 && (
          <div style={{ backgroundColor: 'rgba(124, 58, 237, 0.1)', color: '#7C3AED', padding: '4px 8px', borderRadius: '6px', fontSize: '11px', fontWeight: 500 }}>
            {platform2}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default function Vault() {
  const cards = [
    { score: 96, status: 'UNUSED', title: 'How to build your first autonomous AI research agent using cursor and python.', platform1: 'Video', platform2: 'Twitter' },
    { score: 94, status: 'IN ENGINE', title: 'Why 90% of solo dev projects fail before hitting $1k MRR. A data-driven look.', platform1: 'LinkedIn', platform2: 'Blog' },
    { score: 92, status: 'UNUSED', title: 'The hidden cost of context switching. 3 frameworks to reclaim your focus blocks.', platform1: 'Twitter', platform2: null },
    { score: 91, status: 'UNUSED', title: 'A deep dive into AI agent economies vs SaaS. Where the money is flowing.', platform1: 'Video', platform2: 'LinkedIn' },
    { score: 85, status: 'IN ENGINE', title: 'Is cursor actually better than native IDEs? 5 real examples of where it wins.', platform1: 'Twitter', platform2: null },
    { score: 68, status: 'UNUSED', title: 'Stop using generic color palettes.', platform1: 'Blog', platform2: null },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      style={{ width: '100vw', minHeight: '100vh', display: 'flex', flexDirection: 'column', padding: '60px', boxSizing: 'border-box' }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%', paddingBottom: '120px' }}>
        <div style={{ marginBottom: '40px' }}>
          <h1 style={{ fontSize: '32px', fontWeight: 700, margin: '0 0 8px 0' }}>Idea Vault</h1>
          <p style={{ color: 'rgba(255,255,255,0.6)', margin: 0 }}>Predicted high-virality concepts saved for later.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))', gap: '24px', marginBottom: '60px' }}>
          {cards.map((c, i) => (
            <VaultCard key={i} {...c} delay={0.08 * i} />
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: '20px 40px',
              borderRadius: '32px',
              background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.4) 0%, rgba(6, 182, 212, 0.4) 100%)',
              border: '1px solid rgba(255,255,255,0.2)',
              boxShadow: '0 0 30px rgba(124, 58, 237, 0.2)',
              color: '#fff',
              fontSize: '16px',
              fontWeight: 700,
              letterSpacing: '0.1em',
              cursor: 'pointer'
            }}
          >
            SEND TO CONTENT ENGINE
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}