import { motion } from 'framer-motion';

const getStatusColorClass = (status) => {
  switch(status) {
    case 'drafting': return 'text-amber-500 bg-amber-500/10 border-amber-500/20';
    case 'review': return 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20';
    case 'scheduled': return 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20';
    case 'live': return 'text-white bg-white/10 border-white/20';
    default: return 'text-violet-500 bg-violet-500/10 border-violet-500/20';
  }
};

const getStatusAnimation = (status) => {
  switch(status) {
    case 'drafting': return { boxShadow: ['0 0 0px rgba(245, 158, 11, 0)', '0 0 15px rgba(245, 158, 11, 0.4)', '0 0 0px rgba(245, 158, 11, 0)'] };
    case 'review': return { boxShadow: ['0 0 0px rgba(6, 182, 212, 0)', '0 0 15px rgba(6, 182, 212, 0.4)', '0 0 0px rgba(6, 182, 212, 0)'] };
    case 'scheduled': return { boxShadow: ['0 0 0px rgba(16, 185, 129, 0)', '0 0 15px rgba(16, 185, 129, 0.4)', '0 0 0px rgba(16, 185, 129, 0)'] };
    case 'live': return { backgroundColor: ['rgba(255,255,255,0.1)', 'rgba(255,255,255,0.3)', 'rgba(255,255,255,0.1)'] };
    default: return {};
  }
};

const TimelineCard = ({ title, format, status, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, type: "spring", stiffness: 120, damping: 14 }}
      whileHover={{ scale: 1.02, y: -4, boxShadow: '0 10px 25px -5px rgba(0,0,0,0.5)' }}
      className="bg-zinc-900/60 border border-white/10 rounded-2xl p-4 mb-4 flex flex-col cursor-pointer transition-colors hover:border-white/20 shadow-lg"
    >
      <div className="flex justify-between mb-3 items-center">
        <div className="text-xl">
          {format === 'Video' ? '🎬' : format === 'Thread' ? '🧵' : '📄'}
        </div>
        <motion.div
          animate={getStatusAnimation(status)}
          transition={{ duration: status === 'live' ? 4 : 2, repeat: Infinity, ease: "easeInOut" }}
          className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 border ${getStatusColorClass(status)}`}
        >
          {status === 'scheduled' && '✓'}
          {status === 'review' && '👁'}
          {status === 'drafting' && '✍'}
          {status}
        </motion.div>
      </div>
      <div className="text-white text-sm font-semibold leading-relaxed">
        {title}
      </div>
    </motion.div>
  );
};

const DayColumn = ({ day, delay, slots }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="flex flex-col flex-1 px-4 border-r border-dashed border-white/10 last:border-r-0 min-h-full"
    >
      <div className="text-white/50 text-xs font-bold tracking-widest mb-8 text-center uppercase">
        {day}
      </div>
      
      <div className="mb-6 flex-1 flex flex-col">
        <div className="text-white/30 text-[10px] font-bold mb-4 tracking-widest uppercase">MORNING</div>
        <div className="flex-1">
          {slots.morning.map((c, i) => <TimelineCard key={i} {...c} delay={delay + 0.2 + (i * 0.1)} />)}
        </div>
      </div>

      <div className="mb-6 flex-1 flex flex-col">
        <div className="text-white/30 text-[10px] font-bold mb-4 tracking-widest uppercase">AFTERNOON</div>
        <div className="flex-1">
          {slots.afternoon.map((c, i) => <TimelineCard key={i} {...c} delay={delay + 0.4 + (i * 0.1)} />)}
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        <div className="text-white/30 text-[10px] font-bold mb-4 tracking-widest uppercase">EVENING</div>
        <div className="flex-1">
          {slots.evening.map((c, i) => <TimelineCard key={i} {...c} delay={delay + 0.6 + (i * 0.1)} />)}
        </div>
      </div>
    </motion.div>
  );
}

export default function Timeline() {
  const schedule = [
    { day: 'Monday', slots: {
      morning: [{ title: 'Thread: 5 Cursor features replacing my Junior Dev.', format: 'Thread', status: 'live' }],
      afternoon: [{ title: 'Deep dive: Autonomous AI agent architecture.', format: 'Document', status: 'review' }],
      evening: [{ title: 'Script: The 100x AI Engineer thesis.', format: 'Video', status: 'drafting' }]
    }},
    { day: 'Tuesday', slots: {
      morning: [],
      afternoon: [{ title: 'Re-evaluating Claude 3.5 vs GPT-4o for coding.', format: 'Thread', status: 'scheduled' }],
      evening: []
    }},
    { day: 'Wednesday', slots: {
      morning: [{ title: 'Live build: $10k MRR SaaS absolute scratch.', format: 'Text', status: 'live' }],
      afternoon: [{ title: 'My strict Cursor Rules configuration file.', format: 'Document', status: 'review' }],
      evening: []
    }},
    { day: 'Thursday', slots: {
      morning: [],
      afternoon: [{ title: 'Video Edit: Why Prompt Engineering is dead.', format: 'Video', status: 'drafting' }],
      evening: []
    }},
    { day: 'Friday', slots: {
      morning: [],
      afternoon: [{ title: 'Weekend thoughts: Will AI replace us?', format: 'Text', status: 'scheduled' }],
      evening: []
    }}
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen w-full flex flex-col items-center justify-start overflow-y-auto pb-32 pt-20"
    >
      <div className="max-w-7xl w-full mx-auto px-6 py-10 flex flex-col gap-10">
        
        {/* Header aligned center */}
        <div className="flex flex-col items-center text-center gap-2 mb-2">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Timeline</h1>
          <p className="text-lg text-zinc-400">Auto-generated content schedule based on signal ingestion.</p>
        </div>

        {/* Engine Status Top Right - Actually put it in a flex row under header */}
        <div className="flex justify-center mb-4">
          <div className="flex items-center gap-3 bg-zinc-900/50 border border-emerald-500/30 px-4 py-2 rounded-full backdrop-blur-md">
            <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10B981] animate-pulse"></div>
            <div className="text-emerald-400 text-xs font-bold tracking-widest uppercase">Engine Active</div>
          </div>
        </div>

        {/* Kanban Board Layout */}
        <div className="flex flex-col lg:flex-row flex-1 bg-zinc-900/30 border border-white/5 rounded-3xl p-6 md:p-8 backdrop-blur-sm shadow-2xl">
          {schedule.map((col, i) => (
            <DayColumn key={col.day} day={col.day} slots={col.slots} delay={i * 0.08} />
          ))}
        </div>

      </div>
    </motion.div>
  );
}