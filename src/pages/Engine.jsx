import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import useCanvasStore from '../store/canvasStore';

const NodeCard = ({ title, status, platform, color, delay, pos, isVisible }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ delay: isVisible ? delay : 0, duration: 0.6, ease: "easeOut" }}
      className={`absolute flex flex-col`}
      style={{
        left: pos.left,
        top: pos.top,
        transform: 'translate(-50%, -50%)',
        width: '320px',
        backdropFilter: 'blur(24px)',
        backgroundColor: 'rgba(255, 255, 255, 0.03)',
        borderColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '24px',
        borderStyle: 'solid',
        borderWidth: '1px',
        padding: '24px',
        zIndex: 10,
        pointerEvents: isVisible ? 'auto' : 'none'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', alignItems: 'center' }}>
        <div style={{
          backgroundColor: `${color}1A`,
          color: color,
          padding: '4px 12px',
          borderRadius: '8px',
          fontSize: '12px',
          fontWeight: 600,
          fontFamily: '"Inter", sans-serif'
        }}>
          {platform}
        </div>
        <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '10px', fontWeight: 600, fontFamily: '"Inter", sans-serif', textTransform: 'uppercase' }}>
          {status}
        </div>
      </div>
      <div style={{
        color: status === 'generating...' ? 'rgba(255,255,255,0.5)' : '#FFF',
        fontSize: '16px',
        fontWeight: 500,
        fontFamily: '"Inter", sans-serif',
        lineHeight: '1.4',
        minHeight: '44px'
      }}>
        {title}
      </div>
    </motion.div>
  );
};

const ConnectionLines = ({ trigger }) => {
  // Center is 50%, 50%
  // Nodes:
  // LinkedIn: 22%, 50% (Left)
  // Twitter: 78%, 50% (Right)
  // Video: 50%, 18% (Top)
  // Blog: 50%, 82% (Bottom)

  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 0.3, 
      transition: { duration: 0.8, ease: "easeInOut" } 
    }
  };

  return (
    <svg style={{ position: 'absolute', inset: 0, width: '100vw', height: '100vh', pointerEvents: 'none', zIndex: 0 }}>
      <motion.path
        d="M 50vw 50vh L 22vw 50vh"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeDasharray="8 8"
        fill="none"
        variants={lineVariants}
        initial="hidden"
        animate={trigger ? "visible" : "hidden"}
      />
      <motion.path
        d="M 50vw 50vh L 78vw 50vh"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeDasharray="8 8"
        fill="none"
        variants={lineVariants}
        initial="hidden"
        animate={trigger ? "visible" : "hidden"}
      />
      <motion.path
        d="M 50vw 50vh L 50vw 18vh"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeDasharray="8 8"
        fill="none"
        variants={lineVariants}
        initial="hidden"
        animate={trigger ? "visible" : "hidden"}
      />
      <motion.path
        d="M 50vw 50vh L 50vw 82vh"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeDasharray="8 8"
        fill="none"
        variants={lineVariants}
        initial="hidden"
        animate={trigger ? "visible" : "hidden"}
      />
    </svg>
  );
};

export default function Engine() {
  const { rawIdea, setRawIdea, agentStatus, triggerAgents } = useCanvasStore();

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && rawIdea.trim()) {
      triggerAgents();
    }
  };

  // Content state maps based on agent status
  const getContent = (platform) => {
    if (agentStatus === 'idle') return 'Awaiting signal...';
    if (agentStatus === 'thinking') return 'generating...';
    
    // Complete content
    switch(platform) {
      case 'LinkedIn': return 'A deep dive into AI agent economies vs SaaS. Where the money is flowing.';
      case 'Twitter': return 'Is cursor actually better than native IDEs? 5 real examples of where it wins.';
      case 'Video': return 'Stop using generic color palettes in your projects. Here is why.';
      case 'Blog': return 'The ultimate guide to building connected canvases in React.';
      default: return '';
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      style={{ width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden' }}
    >
      <ConnectionLines trigger={agentStatus !== 'idle'} />

      {/* Centers: 50%, 50% */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          width: '380px',
          height: '240px',
          backdropFilter: 'blur(40px)',
          backgroundImage: 'linear-gradient(in oklab 135deg, rgba(255, 100, 60, 0.1) 0%, rgba(124, 58, 237, 0.1) 100%)',
          borderRadius: '32px',
          border: '1px solid rgba(255,255,255,0.1)',
          boxShadow: agentStatus === 'thinking' ? '0 0 40px rgba(255, 100, 60, 0.3)' : '0 0 20px rgba(0,0,0,0.5)',
          padding: '32px',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 20
        }}
        animate={agentStatus === 'thinking' ? {
          boxShadow: ['0 0 20px rgba(255,100,60,0.2)', '0 0 50px rgba(255,100,60,0.5)', '0 0 20px rgba(255,100,60,0.2)']
        } : {}}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <div style={{ color: '#FF8C66', fontSize: '14px', fontWeight: 600, fontFamily: '"Inter", sans-serif', marginBottom: '16px', letterSpacing: '0.1em' }}>
          🎯 RAW IDEA
        </div>
        <textarea 
          placeholder="Enter an idea to trigger agents..."
          value={rawIdea}
          onChange={(e) => setRawIdea(e.target.value)}
          onKeyDown={handleKeyDown}
          style={{
            flex: 1,
            background: 'transparent',
            border: 'none',
            color: '#FFFFFF',
            fontSize: '20px',
            fontFamily: '"Inter", sans-serif',
            resize: 'none',
            outline: 'none',
            lineHeight: '1.4'
          }}
        />
        {agentStatus === 'thinking' && (
          <div style={{ color: '#FF8C66', fontSize: '12px', fontFamily: '"Inter", sans-serif', animation: 'pulse 1.5s infinite' }}>
            Agents are thinking...
          </div>
        )}
      </motion.div>

      {/* Per user request coordinates */}
      <NodeCard 
        platform="LinkedIn" delay={0.15} color="#60A5FA" 
        pos={{ left: '22%', top: '50%' }} 
        status={agentStatus === 'idle' ? 'Awaiting' : (agentStatus === 'thinking' ? 'generating...' : 'ready')}
        title={getContent('LinkedIn')}
        isVisible={agentStatus !== 'idle'}
      />
      <NodeCard 
        platform="Twitter" delay={0.30} color="#06B6D4" 
        pos={{ left: '78%', top: '50%' }} 
        status={agentStatus === 'idle' ? 'Awaiting' : (agentStatus === 'thinking' ? 'generating...' : 'ready')}
        title={getContent('Twitter')}
        isVisible={agentStatus !== 'idle'}
      />
      <NodeCard 
        platform="Video" delay={0.45} color="#7C3AED" 
        pos={{ left: '50%', top: '18%' }} 
        status={agentStatus === 'idle' ? 'Awaiting' : (agentStatus === 'thinking' ? 'generating...' : 'ready')}
        title={getContent('Video')}
        isVisible={agentStatus !== 'idle'}
      />
      <NodeCard 
        platform="Blog" delay={0.60} color="#2DD4BF" 
        pos={{ left: '50%', top: '82%' }} 
        status={agentStatus === 'idle' ? 'Awaiting' : (agentStatus === 'thinking' ? 'generating...' : 'ready')}
        title={getContent('Blog')}
        isVisible={agentStatus !== 'idle'}
      />

    </motion.div>
  );
}