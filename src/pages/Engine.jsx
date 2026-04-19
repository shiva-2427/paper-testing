import { motion } from 'framer-motion';
import useCanvasStore from '../store/canvasStore';

const NodeCard = ({ title, status, platform, color, delay, pos, isVisible }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ delay: isVisible ? delay : 0, duration: 0.5, ease: "easeOut" }}
      className="absolute flex flex-col items-start bg-zinc-900/60 border border-white/10 rounded-2xl p-6 w-[280px] sm:w-[320px] backdrop-blur-md shadow-2xl transition-all hover:scale-[1.02]"
      style={{
        left: pos.left,
        top: pos.top,
        transform: 'translate(-50%, -50%)',
        zIndex: 10,
        pointerEvents: isVisible ? 'auto' : 'none'
      }}
    >
      <div className="flex justify-between w-full items-center mb-4 pb-3 border-b border-white/5">
        <div style={{ color, backgroundColor: `${color}1A`, border: `1px solid ${color}33` }} className="px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider">
          {platform}
        </div>
        <div className="text-[10px] font-bold uppercase tracking-wider text-white/40">
          {status}
        </div>
      </div>
      <div className="text-white font-medium text-sm sm:text-base leading-relaxed h-[44px]">
        {title}
      </div>
    </motion.div>
  );
};

const ConnectionLines = ({ trigger }) => {
  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 0.4, 
      transition: { duration: 0.8, ease: "easeInOut" } 
    }
  };

  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden sm:block">
      <defs>
        <marker id="arrowHead" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#FFF" opacity="0.5" />
        </marker>
      </defs>
      <motion.path d="M 50% 50% L 20% 50%" stroke="#FFF" strokeWidth="2" strokeDasharray="6 6" fill="none" markerEnd="url(#arrowHead)" variants={lineVariants} initial="hidden" animate={trigger ? "visible" : "hidden"} />
      <motion.path d="M 50% 50% L 80% 50%" stroke="#FFF" strokeWidth="2" strokeDasharray="6 6" fill="none" markerEnd="url(#arrowHead)" variants={lineVariants} initial="hidden" animate={trigger ? "visible" : "hidden"} />
      <motion.path d="M 50% 50% L 50% 15%" stroke="#FFF" strokeWidth="2" strokeDasharray="6 6" fill="none" markerEnd="url(#arrowHead)" variants={lineVariants} initial="hidden" animate={trigger ? "visible" : "hidden"} />
      <motion.path d="M 50% 50% L 50% 85%" stroke="#FFF" strokeWidth="2" strokeDasharray="6 6" fill="none" markerEnd="url(#arrowHead)" variants={lineVariants} initial="hidden" animate={trigger ? "visible" : "hidden"} />
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

  const getContent = (platform) => {
    if (agentStatus === 'idle') return 'Awaiting signal...';
    if (agentStatus === 'thinking') return 'generating...';
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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen w-full flex flex-col items-center justify-start overflow-y-auto pb-32 pt-20"
    >
      <div className="flex flex-col items-center text-center gap-2 mb-10 w-full px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Engine</h1>
        <p className="text-lg text-zinc-400">Distribute raw input signal to parallel agents.</p>
      </div>

      <div className="w-full max-w-6xl aspect-square md:aspect-video relative rounded-3xl flex items-center justify-center">
        
        <ConnectionLines trigger={agentStatus !== 'idle'} />

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={agentStatus === 'thinking' ? {
            scale: 1, opacity: 1, boxShadow: ['0 0 20px rgba(245,158,11,0.2)', '0 0 50px rgba(245,158,11,0.4)', '0 0 20px rgba(245,158,11,0.2)']
          } : { scale: 1, opacity: 1 }}
          transition={agentStatus === 'thinking' ? { duration: 3, repeat: Infinity, ease: "easeInOut" } : { duration: 0.6, ease: "easeOut" }}
          className="w-[300px] h-[200px] sm:w-[380px] sm:h-[240px] absolute z-20 flex flex-col p-8 rounded-3xl border border-white/20 bg-gradient-to-br from-amber-500/10 to-violet-500/10 backdrop-blur-2xl shadow-2xl"
          style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
        >
          <div className="text-amber-500 text-xs sm:text-sm font-bold tracking-widest uppercase mb-4 flex items-center gap-2">
            <span>🎯</span> RAW IDEA
          </div>
          <textarea 
            placeholder="Enter an idea to trigger agents..."
            value={rawIdea}
            onChange={(e) => setRawIdea(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent border-none outline-none text-white text-lg sm:text-xl font-medium resize-none placeholder:text-white/30"
          />
          {agentStatus === 'thinking' && (
            <div className="text-amber-500 text-xs font-bold uppercase tracking-widest animate-pulse mt-4">
              Agents are thinking...
            </div>
          )}
        </motion.div>

        <NodeCard platform="LinkedIn" delay={0.15} color="#60A5FA" pos={{ left: '20%', top: '50%' }} status={agentStatus === 'idle' ? 'Awaiting' : (agentStatus === 'thinking' ? 'generating...' : 'ready')} title={getContent('LinkedIn')} isVisible={agentStatus !== 'idle'} />
        <NodeCard platform="Twitter" delay={0.30} color="#06B6D4" pos={{ left: '80%', top: '50%' }} status={agentStatus === 'idle' ? 'Awaiting' : (agentStatus === 'thinking' ? 'generating...' : 'ready')} title={getContent('Twitter')} isVisible={agentStatus !== 'idle'} />
        <NodeCard platform="Video" delay={0.45} color="#7C3AED" pos={{ left: '50%', top: '15%' }} status={agentStatus === 'idle' ? 'Awaiting' : (agentStatus === 'thinking' ? 'generating...' : 'ready')} title={getContent('Video')} isVisible={agentStatus !== 'idle'} />
        <NodeCard platform="Blog" delay={0.60} color="#2DD4BF" pos={{ left: '50%', top: '85%' }} status={agentStatus === 'idle' ? 'Awaiting' : (agentStatus === 'thinking' ? 'generating...' : 'ready')} title={getContent('Blog')} isVisible={agentStatus !== 'idle'} />

      </div>
    </motion.div>
  );
}