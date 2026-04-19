import { motion } from 'framer-motion';
import useCanvasStore from '../store/canvasStore';

const NodeCard = ({ title, status, platform, color, delay, pos, isVisible }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: isVisible ? 1 : 0.3,
        scale: isVisible ? 1 : 0.95,
        filter: isVisible ? 'blur(0px)' : 'blur(4px)',
        y: 0
      }}
      transition={{ delay: isVisible ? delay : 0, duration: 0.6, ease: "easeOut" }}
      className={`absolute flex flex-col items-start rounded-2xl p-6 w-[260px] sm:w-[320px] backdrop-blur-md transition-all hover:scale-[1.02] 
        ${isVisible ? 'bg-zinc-900/80 border-white/20 shadow-2xl' : 'bg-zinc-900/30 border-white/5'}`}
      style={{
        left: pos.left,
        top: pos.top,
        transform: 'translate(-50%, -50%)',
        zIndex: isVisible ? 10 : 5,
        pointerEvents: isVisible ? 'auto' : 'none'
      }}
    >
      <div className="flex justify-between w-full items-center mb-4 pb-3 border-b border-white/5">
        <div style={{ color, backgroundColor: isVisible ? `${color}1A` : 'transparent', border: `1px solid ${color}33` }} className="px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider">
          {platform}
        </div>
        <div className={`text-[10px] font-bold uppercase tracking-wider ${isVisible ? 'text-white/80' : 'text-white/20'}`}>
          {status}
        </div>
      </div>
      <div className={`font-medium text-sm sm:text-base leading-relaxed h-[44px] ${isVisible ? 'text-white' : 'text-white/30 truncate whitespace-normal'}`}>
        {isVisible ? title : "Awaiting transmission..."}
      </div>
    </motion.div>
  );
};

const ConnectionLines = ({ trigger }) => {
  const lineVariants = {
    hidden: { pathLength: 1, opacity: 0.1, strokeDasharray: "4 12" },
    visible: { 
      pathLength: 1, 
      opacity: 0.5, 
      strokeDasharray: "6 6",
      transition: { duration: 0.8, ease: "easeInOut" } 
    }
  };

  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden md:block">
      <defs>
        <marker id="arrowHead" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#FFF" opacity="0.5" />
        </marker>
        <marker id="arrowHeadDims" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#FFF" opacity="0.1" />
        </marker>
      </defs>
      <motion.path d="M 50% 50% L 20% 50%" stroke="#FFF" strokeWidth="2" fill="none" markerEnd={trigger ? "url(#arrowHead)" : "url(#arrowHeadDims)"} variants={lineVariants} initial="hidden" animate={trigger ? "visible" : "hidden"} />
      <motion.path d="M 50% 50% L 80% 50%" stroke="#FFF" strokeWidth="2" fill="none" markerEnd={trigger ? "url(#arrowHead)" : "url(#arrowHeadDims)"} variants={lineVariants} initial="hidden" animate={trigger ? "visible" : "hidden"} />
      <motion.path d="M 50% 50% L 50% 15%" stroke="#FFF" strokeWidth="2" fill="none" markerEnd={trigger ? "url(#arrowHead)" : "url(#arrowHeadDims)"} variants={lineVariants} initial="hidden" animate={trigger ? "visible" : "hidden"} />
      <motion.path d="M 50% 50% L 50% 85%" stroke="#FFF" strokeWidth="2" fill="none" markerEnd={trigger ? "url(#arrowHead)" : "url(#arrowHeadDims)"} variants={lineVariants} initial="hidden" animate={trigger ? "visible" : "hidden"} />
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
    if (agentStatus === 'idle') return '';
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
      className="min-h-screen w-full flex flex-col items-center justify-start overflow-hidden pt-20"
    >
      <div className="flex flex-col items-center text-center gap-2 mb-4 w-full px-6 z-30">
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Engine</h1>
        <p className="text-lg text-zinc-400">Distribute raw input signal to parallel agents.</p>
      </div>

      <div className="flex-1 w-full max-w-6xl relative flex items-center justify-center min-h-[500px]">
        
        <ConnectionLines trigger={agentStatus !== 'idle'} />

        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: -20 }}
          animate={agentStatus === 'thinking' ? {
            scale: 1, opacity: 1, y: 0, boxShadow: ['0 0 20px rgba(245,158,11,0.2)', '0 0 50px rgba(245,158,11,0.4)', '0 0 20px rgba(245,158,11,0.2)']
          } : { scale: 1, opacity: 1, y: 0 }}
          transition={agentStatus === 'thinking' ? { duration: 3, repeat: Infinity, ease: "easeInOut" } : { duration: 0.6, ease: "easeOut" }}
          className="w-[320px] h-[220px] sm:w-[400px] sm:h-[240px] absolute z-30 flex flex-col p-8 rounded-3xl border border-white/20 bg-gradient-to-br from-amber-500/10 to-violet-500/10 backdrop-blur-2xl shadow-[0_0_40px_rgba(0,0,0,0.5)]"
          style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
        >
          <div className="text-amber-500 text-xs sm:text-sm font-bold tracking-widest uppercase mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="animate-pulse">🎯</span> RAW IDEA
            </div>
            {agentStatus !== 'idle' && (
              <button 
                onClick={() => setRawIdea('')} 
                className="text-white/40 hover:text-white transition-colors text-xs bg-white/5 px-2 py-1 rounded"
              >
                Reset
              </button>
            )}
          </div>
          <textarea 
            placeholder="Type an idea and hit Enter..."
            value={rawIdea}
            onChange={(e) => setRawIdea(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent border-none outline-none text-white text-xl sm:text-2xl font-medium resize-none placeholder:text-white/20"
          />
          {agentStatus === 'idle' && (
            <div className="text-white/30 text-xs font-bold uppercase tracking-widest mt-4 flex items-center gap-2">
              <span className="text-white/50 border border-white/20 px-1.5 rounded text-[10px]">↵</span> to run engine
            </div>
          )}
          {agentStatus === 'thinking' && (
            <div className="text-amber-500 text-xs font-bold uppercase tracking-widest animate-pulse mt-4">
              Agents are thinking...
            </div>
          )}
        </motion.div>

        <NodeCard platform="LinkedIn" delay={0.15} color="#60A5FA" pos={{ left: '20%', top: '50%' }} status={agentStatus === 'idle' ? 'STANDBY' : (agentStatus === 'thinking' ? 'generating...' : 'READY')} title={getContent('LinkedIn')} isVisible={agentStatus !== 'idle'} />
        <NodeCard platform="Twitter" delay={0.30} color="#06B6D4" pos={{ left: '80%', top: '50%' }} status={agentStatus === 'idle' ? 'STANDBY' : (agentStatus === 'thinking' ? 'generating...' : 'READY')} title={getContent('Twitter')} isVisible={agentStatus !== 'idle'} />
        <NodeCard platform="Video" delay={0.45} color="#7C3AED" pos={{ left: '50%', top: '15%' }} status={agentStatus === 'idle' ? 'STANDBY' : (agentStatus === 'thinking' ? 'generating...' : 'READY')} title={getContent('Video')} isVisible={agentStatus !== 'idle'} />
        <NodeCard platform="Blog" delay={0.60} color="#2DD4BF" pos={{ left: '50%', top: '85%' }} status={agentStatus === 'idle' ? 'STANDBY' : (agentStatus === 'thinking' ? 'generating...' : 'READY')} title={getContent('Blog')} isVisible={agentStatus !== 'idle'} />

      </div>
    </motion.div>
  );
}