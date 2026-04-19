import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import useCanvasStore from '../store/canvasStore';
import { useCounter } from '../hooks/useAnimations';

const HookCard = ({ id, hook, ctr, isWinner, delay, onSelect }) => {
  const animatedCtr = useCounter(ctr, 1400);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
      onClick={() => onSelect(id)}
      style={{
        position: 'relative',
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        border: `1px solid ${isWinner ? '#10B981' : 'rgba(255,255,255,0.1)'}`,
        borderRadius: '16px',
        padding: '24px',
        cursor: 'pointer',
        backdropFilter: 'blur(12px)',
        zIndex: isWinner ? 10 : 1
      }}
    >
      {isWinner && (
        <motion.div 
          style={{ position: 'absolute', inset: -2, borderRadius: '18px', border: '2px solid rgba(16, 185, 129, 0.5)', zIndex: -1 }}
          animate={{ boxShadow: ['0 0 0px rgba(16,185,129,0)', '0 0 20px rgba(16,185,129,0.4)', '0 0 0px rgba(16,185,129,0)'] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      )}
      
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
        <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '12px', fontWeight: 600, letterSpacing: '0.05em' }}>VARIANT {id}</div>
        <div style={{ color: '#10B981', fontSize: '12px', fontWeight: 700 }}>{animatedCtr.toFixed(1)}% CTR</div>
      </div>
      <div style={{ color: '#FFF', fontSize: '16px', fontWeight: 500, lineHeight: '1.5' }}>
        "{hook}"
      </div>
    </motion.div>
  );
};

const WinningConnector = ({ winnerId }) => {
  if (!winnerId) return null;

  // Let's assume standard grid layouts for a simple SVG path. 
  // In a real app we'd use refs, but here we can visually fake a path winding down to a hypothetical node below.
  return (
    <svg style={{ position: 'absolute', width: '100%', height: '200px', bottom: '-200px', left: 0, pointerEvents: 'none' }}>
      <motion.path
        d="M 50% 0 C 50% 100px, 50% 100px, 50% 200px" // Very simplified downward line for the visual effect
        stroke="#10B981"
        strokeWidth="2"
        strokeDasharray="8 8"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
    </svg>
  );
};

export default function HookLab() {
  const { hookWinner, setHookWinner } = useCanvasStore();

  const hooks = [
    { id: 'A', hook: 'Why 90% of solo dev projects fail before hitting $1k MRR. A data-driven look.', ctr: 4.2 },
    { id: 'B', hook: 'The solo dev trap: shipping features instead of finding users.', ctr: 2.8 },
    { id: 'C', hook: 'Data reveals exactly why your indie hacking project is failing.', ctr: 5.1 },
    { id: 'D', hook: 'Stop writing code. Start talking to users. Here is the $1k MRR playbook.', ctr: 3.4 },
    { id: 'E', hook: 'I analyzed 100 failed solo projects. 90% made this exact same mistake.', ctr: 7.6 },
    { id: 'F', hook: 'Building in public is a meme if you do not understand this one metric.', ctr: 4.9 },
  ];

  // Auto-select highest CTR as winner after short delay
  useEffect(() => {
    if (!hookWinner) {
      const highest = hooks.reduce((prev, curr) => (prev.ctr > curr.ctr) ? prev : curr);
      const timer = setTimeout(() => setHookWinner(highest.id), 2500);
      return () => clearTimeout(timer);
    }
  }, [hookWinner, hooks, setHookWinner]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      style={{ width: '100vw', minHeight: '100vh', padding: '60px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}
    >
      <div style={{ maxWidth: '1000px', margin: '0 auto', width: '100%', display: 'flex', flexDirection: 'column', flex: 1, position: 'relative' }}>
        <div style={{ marginBottom: '40px' }}>
          <h1 style={{ fontSize: '32px', fontWeight: 700, margin: '0 0 8px 0', color: '#FFF' }}>Hook Lab</h1>
          <p style={{ color: 'rgba(255,255,255,0.6)', margin: 0 }}>Predictive CTR analysis of generated angles.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px', position: 'relative' }}>
          {hooks.map((h, i) => (
            <HookCard 
              key={h.id} 
              id={h.id} 
              hook={h.hook} 
              ctr={h.ctr} 
              isWinner={hookWinner === h.id} 
              delay={0.1 * i} 
              onSelect={setHookWinner}
            />
          ))}
          <WinningConnector winnerId={hookWinner} />
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '100px' }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: hookWinner ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            style={{
              padding: '20px 40px',
              borderRadius: '32px',
              backgroundColor: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              color: '#10B981',
              fontSize: '16px',
              fontWeight: 700,
              letterSpacing: '0.1em'
            }}
          >
            WINNING HOOK SELECTED
          </motion.div>
        </div>

      </div>
    </motion.div>
  );
}