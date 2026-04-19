import { useEffect } from 'react';
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
      whileHover={{ scale: 1.02 }}
      onClick={() => onSelect(id)}
      className={`relative rounded-2xl p-6 cursor-pointer backdrop-blur-md transition-colors 
        ${isWinner ? 'bg-emerald-900/20 border-emerald-500/80' : 'bg-zinc-900/60 border-white/10 hover:border-white/20'}`}
      style={{
        borderWidth: '1px',
        borderStyle: 'solid',
        zIndex: isWinner ? 10 : 1
      }}
    >
      {isWinner && (
        <motion.div 
          className="absolute -inset-1 rounded-[18px] border-2 border-emerald-500/50 -z-10"
          animate={{ boxShadow: ['0 0 0px rgba(16,185,129,0)', '0 0 25px rgba(16,185,129,0.4)', '0 0 0px rgba(16,185,129,0)'] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      )}
      
      <div className="flex justify-between mb-4">
        <div className="text-white/40 text-xs font-semibold tracking-wider">VARIANT {id}</div>
        <div className="text-emerald-500 text-sm font-bold">{animatedCtr.toFixed(1)}% CTR</div>
      </div>
      <div className="text-white text-lg font-medium leading-relaxed">
        "{hook}"
      </div>
    </motion.div>
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

  useEffect(() => {
    if (!hookWinner) {
      const highest = hooks.reduce((prev, curr) => (prev.ctr > curr.ctr) ? prev : curr);
      const timer = setTimeout(() => setHookWinner(highest.id), 2500);
      return () => clearTimeout(timer);
    }
  }, [hookWinner, hooks, setHookWinner]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen w-full flex flex-col items-center justify-start overflow-y-auto pb-32 pt-20"
    >
      <div className="max-w-5xl w-full mx-auto px-6 py-10 flex flex-col gap-10 items-center">
        
        <div className="flex flex-col items-center text-center gap-2">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Hook Lab</h1>
          <p className="text-lg text-zinc-400">Predictive CTR analysis of generated angles.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full relative mt-4">
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
        </div>

        {/* Winner display */}
        <div className="flex justify-center mt-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: hookWinner ? 1 : 0, scale: hookWinner ? 1 : 0.9 }}
            transition={{ duration: 0.5 }}
            className="px-8 py-4 rounded-3xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 text-lg font-bold tracking-widest shadow-[0_0_30px_rgba(16,185,129,0.15)]"
          >
            WINNING HOOK SELECTED
          </motion.div>
        </div>

      </div>
    </motion.div>
  );
}