import { motion } from 'framer-motion';
import { useCounter } from '../hooks/useAnimations';

const VaultCard = ({ title, score, status, platform1, platform2, delay }) => {
  const animatedScore = useCounter(score, 1000);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02, y: -4, boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)' }}
      transition={{ delay, duration: 0.4, ease: "easeOut", scale: { duration: 0.2, ease: "easeOut" } }}
      className="bg-zinc-900/60 border border-white/10 rounded-2xl p-6 flex flex-col min-h-[220px] cursor-pointer hover:border-white/20 transition-colors backdrop-blur-md"
    >
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-1.5 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-xl">
          <span className="text-amber-500 text-xs font-bold font-sans tracking-wide">🔥 {animatedScore}/100</span>
        </div>
        <div className={`text-[10px] font-bold uppercase py-0.5 px-2 rounded-lg 
          ${status === 'IN ENGINE' ? 'text-violet-400 border border-violet-500/50' : 'text-white/40'}`}>
          {status}
        </div>
      </div>
      <div className="text-white text-lg font-semibold leading-relaxed flex-grow">
        {title}
      </div>
      <div className="flex gap-2 mt-4">
        {platform1 && (
          <div className="bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-lg text-xs font-semibold">
            {platform1}
          </div>
        )}
        {platform2 && (
          <div className="bg-violet-500/10 text-violet-400 px-3 py-1 rounded-lg text-xs font-semibold">
            {platform2}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default function Vault() {
  const cards = [
    { score: 98, status: 'IN ENGINE', title: 'I let Claude 3.5 Sonnet write my entire backend. The results terrified me.', platform1: 'Video', platform2: 'Twitter' },
    { score: 92, status: 'UNUSED', title: 'The myth of the 10x developer is dead. The 100x AI Engineer is here.', platform1: 'LinkedIn', platform2: null },
    { score: 85, status: 'UNUSED', title: 'Stop using GitHub Copilot. Cursor just completely replaced it in my workflow.', platform1: 'Blog', platform2: null },
    { score: 78, status: 'UNUSED', title: 'Watch me build and deploy a $10k MRR SaaS in 45 minutes.', platform1: 'Video', platform2: null },
    { score: 71, status: 'PUBLISHED', title: '5 custom Cursor Rules that will instantly double your coding speed.', platform1: 'Twitter', platform2: 'LinkedIn' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen w-full flex flex-col items-center justify-start overflow-y-auto pb-32 pt-20"
    >
      <div className="max-w-6xl w-full mx-auto px-6 py-10 flex flex-col gap-10">
        
        <div className="flex flex-col items-center text-center gap-2">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Idea Vault</h1>
          <p className="text-lg text-zinc-400">Predicted high-virality concepts saved for later.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 w-full">
          {cards.map((c, i) => (
            <VaultCard key={i} {...c} delay={0.1 * i} />
          ))}
        </div>

        <div className="flex justify-center w-full">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full bg-gradient-to-br from-violet-600/60 to-cyan-600/60 border border-white/20 text-white font-bold tracking-widest cursor-pointer shadow-[0_0_30px_rgba(124,58,237,0.2)]"
          >
            SEND TO CONTENT ENGINE
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}