import { motion } from 'framer-motion';

const SpokeCard = ({ title, items, delay, direction }) => {
  const variants = {
    hidden: { 
      opacity: 0, 
      x: direction === 'left' ? -30 : (direction === 'right' ? 30 : 0),
      y: direction === 'top' ? -30 : (direction === 'bottom' ? 30 : 0)
    },
    visible: { opacity: 1, x: 0, y: 0, transition: { delay, duration: 0.5, ease: "easeOut" } }
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.02 }}
      className="bg-zinc-900/60 border border-white/10 rounded-2xl p-6 w-full flex flex-col backdrop-blur-md relative z-10"
    >
      <div className="flex items-center gap-2 border-b border-amber-500/20 pb-4 mb-4">
        <span className="text-amber-500 text-sm">✦</span>
        <span className="text-white font-bold tracking-widest text-sm uppercase">{title}</span>
      </div>
      <div className="text-zinc-400 text-sm leading-relaxed space-y-2">
        {items.map((item, i) => (
          <div key={i} className="flex gap-2 items-start">
            <span className="text-amber-500/50 mt-0.5">•</span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default function Mirror() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen w-full flex flex-col items-center justify-start overflow-y-auto pb-32 pt-20"
    >
      <div className="max-w-6xl w-full mx-auto px-6 py-10 flex flex-col gap-10 items-center">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-2 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Mirror</h1>
          <p className="text-lg text-zinc-400">Audience psychographics and content resonance mapping.</p>
        </div>

        {/* 3x3 Grid Map */}
        <div className="relative w-full aspect-square md:aspect-video max-w-5xl grid grid-cols-1 md:grid-cols-3 grid-rows-3 gap-6 md:gap-12 mt-4 items-center justify-items-center">
          
          {/* SVG Connection Lines positioned behind the grid */}
          <div className="absolute inset-0 pointer-events-none hidden md:block">
             <svg width="100%" height="100%" className="absolute inset-0 z-0">
                <defs>
                  <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#F59E0B" opacity="0.6"/>
                  </marker>
                </defs>
                {/* Center to Top-Left */}
                <motion.line x1="50%" y1="50%" x2="16.6%" y2="16.6%" stroke="#F59E0B" strokeWidth="2" strokeDasharray="8 8" opacity="0.4" markerEnd="url(#arrow)" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.2, duration: 0.8 }} />
                {/* Center to Top-Right */}
                <motion.line x1="50%" y1="50%" x2="83.3%" y2="16.6%" stroke="#F59E0B" strokeWidth="2" strokeDasharray="8 8" opacity="0.4" markerEnd="url(#arrow)" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.4, duration: 0.8 }} />
                {/* Center to Bottom-Left */}
                <motion.line x1="50%" y1="50%" x2="16.6%" y2="83.3%" stroke="#F59E0B" strokeWidth="2" strokeDasharray="8 8" opacity="0.4" markerEnd="url(#arrow)" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.6, duration: 0.8 }} />
                {/* Center to Bottom-Right */}
                <motion.line x1="50%" y1="50%" x2="83.3%" y2="83.3%" stroke="#F59E0B" strokeWidth="2" strokeDasharray="8 8" opacity="0.4" markerEnd="url(#arrow)" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.8, duration: 0.8 }} />
             </svg>
             {/* Small animated labels along the paths */}
             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="absolute pt-10 pl-10" style={{ left: '33.3%', top: '33.3%', transform: 'translate(-50%, -50%)' }}><span className="text-[10px] text-amber-500/80 bg-zinc-900 px-2 py-1 rounded-full border border-amber-500/20">speak to this →</span></motion.div>
             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }} className="absolute pt-10 pr-10" style={{ left: '66.6%', top: '33.3%', transform: 'translate(-50%, -50%)' }}><span className="text-[10px] text-amber-500/80 bg-zinc-900 px-2 py-1 rounded-full border border-amber-500/20">speak to this →</span></motion.div>
             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="absolute pb-10 pl-10" style={{ left: '33.3%', top: '66.6%', transform: 'translate(-50%, -50%)' }}><span className="text-[10px] text-amber-500/80 bg-zinc-900 px-2 py-1 rounded-full border border-amber-500/20">speak to this →</span></motion.div>
             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }} className="absolute pb-10 pr-10" style={{ left: '66.6%', top: '66.6%', transform: 'translate(-50%, -50%)' }}><span className="text-[10px] text-amber-500/80 bg-zinc-900 px-2 py-1 rounded-full border border-amber-500/20">speak to this →</span></motion.div>
          </div>

          {/* Row 1 */}
          <div className="w-full h-full flex items-center justify-center">
            <SpokeCard title="PAIN POINTS" items={["Lack of distribution", "Too much standard advice", "Burn multiple"]} direction="left" delay={0.4} />
          </div>
          <div className="w-full hidden md:block"></div>
          <div className="w-full h-full flex items-center justify-center">
            <SpokeCard title="GOALS" items={["Acquire 10-100 true fans", "Automate workflows", "Differentiate visually"]} direction="right" delay={0.6} />
          </div>

          {/* Row 2 */}
          <div className="w-full hidden md:block"></div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="w-full md:w-[320px] h-24 bg-zinc-900/80 border border-amber-500/40 rounded-2xl flex items-center justify-center relative z-20 shadow-[0_0_30px_rgba(245,158,11,0.1)] backdrop-blur-xl"
          >
            <motion.div 
              className="absolute -inset-1 rounded-[20px] border border-amber-500/50 -z-10"
              animate={{
                boxShadow: ['0 0 0px rgba(245, 158, 11, 0)', '0 0 40px rgba(245, 158, 11, 0.4)', '0 0 0px rgba(245, 158, 11, 0)'],
                scale: [1, 1.05, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <span className="text-3xl mr-4 drop-shadow-md">🎯</span>
            <span className="text-white text-lg font-bold tracking-widest uppercase">YOUR AUDIENCE</span>
          </motion.div>
          <div className="w-full hidden md:block"></div>

          {/* Row 3 */}
          <div className="w-full h-full flex items-center justify-center">
            <SpokeCard title="SCROLL STOPPERS" items={["Clean, unstyled data visualizations", "Extremely concise bullet points", "The word 'Framework'"]} direction="left" delay={0.8} />
          </div>
          <div className="w-full hidden md:block"></div>
          <div className="w-full h-full flex items-center justify-center">
            <SpokeCard title="CONTENT" items={["High-quality technical templates", "Controversial takes on standard practices", "Real revenue screenshots"]} direction="right" delay={1.0} />
          </div>

        </div>

      </div>
    </motion.div>
  );
}