import { motion } from 'framer-motion';

const SpokeCard = ({ title, items, pos, delay, direction }) => {
  // Slide in from direction
  const variants = {
    hidden: { 
      opacity: 0, 
      x: direction === 'left' ? -50 : (direction === 'right' ? 50 : 0),
      y: direction === 'top' ? -50 : (direction === 'bottom' ? 50 : 0)
    },
    visible: { opacity: 1, x: 0, y: 0, transition: { delay, duration: 0.6, ease: "easeOut" } }
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      style={{
        position: 'absolute',
        top: pos.top,
        left: pos.left,
        transform: 'translate(-50%, -50%)',
        backdropFilter: 'blur(24px)',
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        borderTop: '4px solid #F59E0B',
        borderLeft: '1px solid rgba(255,255,255,0.1)',
        borderRight: '1px solid rgba(255,255,255,0.1)',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '16px',
        padding: '24px',
        width: '320px',
        display: 'flex',
        flexDirection: 'column',
        zIndex: 10
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
        <span style={{ color: '#F59E0B', marginRight: '8px', fontSize: '14px', fontWeight: 'bold' }}>✦</span>
        <span style={{ color: '#FFF', fontWeight: 700, letterSpacing: '0.1em', fontSize: '13px' }}>{title}</span>
      </div>
      <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', lineHeight: '1.6' }}>
        {items.map((item, i) => (
          <div key={i} style={{ marginBottom: '4px' }}>• {item}</div>
        ))}
      </div>
    </motion.div>
  );
};

const SpokeLine = ({ start, end, delay, labelPos }) => {
  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 0.4, 
      transition: { delay, duration: 0.8, ease: "easeInOut" } 
    }
  };

  const labelVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: delay + 0.6, duration: 0.4 } }
  };

  return (
    <>
      <svg style={{ position: 'absolute', inset: 0, width: '100vw', height: '100vh', pointerEvents: 'none', zIndex: 0 }}>
        <defs>
          <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#F59E0B" />
          </marker>
        </defs>
        <motion.path
          d={`M ${start.x} ${start.y} L ${end.x} ${end.y}`}
          stroke="#F59E0B"
          strokeWidth="2"
          strokeDasharray="8 8"
          fill="none"
          markerEnd="url(#arrow)"
          variants={lineVariants}
          initial="hidden"
          animate="visible"
        />
      </svg>
      <motion.div
        variants={labelVariants}
        initial="hidden"
        animate="visible"
        style={{
          position: 'absolute',
          left: labelPos.x,
          top: labelPos.y,
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#0a0a0f',
          border: '1px solid rgba(245, 158, 11, 0.2)',
          borderRadius: '12px',
          padding: '4px 10px',
          color: 'rgba(245, 158, 11, 0.8)',
          fontSize: '11px',
          zIndex: 5
        }}
      >
        speak to this →
      </motion.div>
    </>
  );
};

export default function Mirror() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      style={{ width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden' }}
    >
      <SpokeLine start={{x: '50vw', y: '50vh'}} end={{x: '25vw', y: '25vh'}} labelPos={{x: '37.5vw', y: '37.5vh'}} delay={0.2} />
      <SpokeLine start={{x: '50vw', y: '50vh'}} end={{x: '75vw', y: '25vh'}} labelPos={{x: '62.5vw', y: '37.5vh'}} delay={0.4} />
      <SpokeLine start={{x: '50vw', y: '50vh'}} end={{x: '25vw', y: '80vh'}} labelPos={{x: '37.5vw', y: '65vh'}} delay={0.6} />
      <SpokeLine start={{x: '50vw', y: '50vh'}} end={{x: '75vw', y: '80vh'}} labelPos={{x: '62.5vw', y: '65vh'}} delay={0.8} />

      {/* Center Audience Node */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          width: '320px',
          height: '100px',
          backdropFilter: 'blur(24px)',
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid rgba(245, 158, 11, 0.4)',
          borderRadius: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 20,
          boxShadow: '0 0 30px rgba(245, 158, 11, 0.1)'
        }}
      >
        <motion.div 
          style={{
            position: 'absolute',
            inset: -4,
            borderRadius: '20px',
            border: '2px solid rgba(245, 158, 11, 0.5)',
            zIndex: -1
          }}
          animate={{
            boxShadow: ['0 0 0px rgba(245, 158, 11, 0)', '0 0 40px rgba(245, 158, 11, 0.4)', '0 0 0px rgba(245, 158, 11, 0)'],
            scale: [1, 1.05, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <span style={{ fontSize: '24px', marginRight: '16px' }}>🎯</span>
        <span style={{ color: '#FFF', fontSize: '18px', fontWeight: 700, letterSpacing: '0.1em' }}>YOUR AUDIENCE</span>
      </motion.div>

      <SpokeCard 
        title="PAIN POINTS" 
        items={["Lack of distribution", "Too much standard advice", "Burn multiple"]}
        pos={{ left: '25%', top: '25%' }}
        direction="left"
        delay={0.4}
      />
      <SpokeCard 
        title="GOALS" 
        items={["Acquire 10-100 true fans", "Automate workflows", "Differentiate visually"]}
        pos={{ left: '75%', top: '25%' }}
        direction="right"
        delay={0.6}
      />
      <SpokeCard 
        title="SCROLL STOPPERS" 
        items={["Clean, unstyled data visualizations", "Extremely concise bullet points", "The word 'Framework'"]}
        pos={{ left: '25%', top: '80%' }}
        direction="left"
        delay={0.8}
      />
      <SpokeCard 
        title="CONTENT" 
        items={["High-quality technical templates", "Controversial takes on standard practices", "Real revenue screenshots"]}
        pos={{ left: '75%', top: '80%' }}
        direction="right"
        delay={1.0}
      />

    </motion.div>
  );
}