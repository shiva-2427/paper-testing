import { motion } from 'framer-motion';
import useCanvasStore from '../store/canvasStore';
import { useCounter, useTypewriter } from '../hooks/useAnimations';

const AnimatedMetric = ({ label, value, prefix = "", suffix = "" }) => {
  const animatedValue = useCounter(value, 1200);
  
  return (
    <div className="rounded-2xl bg-zinc-900/60 border border-white/10 p-6 w-full flex flex-col justify-center text-center items-center backdrop-blur-md">
      <div className="text-white/60 text-sm font-semibold tracking-widest mb-2 uppercase">
        {label}
      </div>
      <div className="text-white text-4xl font-bold font-sans">
        {prefix}{animatedValue}{suffix}
      </div>
    </div>
  );
};

const PostCard = ({ title, platform, views, likes, comment, delay, isPositive }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.3, ease: "easeOut" }}
      whileHover={{ scale: 1.02, boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)' }}
      className={`rounded-2xl bg-zinc-900/60 p-6 w-full cursor-pointer transition-all border ${isPositive ? 'border-emerald-500/20 hover:border-emerald-500/40' : 'border-red-500/20 hover:border-red-500/40'}`}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="text-white text-lg font-semibold leading-snug pr-4">
          {title}
        </div>
        <div className="bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-md text-xs font-semibold whitespace-nowrap">
          {platform}
        </div>
      </div>
      <div className="flex gap-6 text-sm text-white/50 font-medium">
        <span>Views: {views}k</span>
        <span>Likes: {likes}</span>
        <span>Comments: {comment}</span>
      </div>
    </motion.div>
  );
};

export default function Pulse() {
  const { metrics, agentStatus } = useCanvasStore();
  const rawViews = metrics?.views || 84200;
  const kViews = Math.floor(rawViews / 1000);
  
  const insightText = "Hooks leading with 'Stop using X' relative to standard coding workflows generated 3.4x higher video retention times. I recommend pushing controversial workflow comparisons.";
  const typedInsight = useTypewriter(agentStatus === 'complete' || agentStatus === 'idle' ? insightText : "Waiting for engine output...", 20);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen w-full flex flex-col items-center justify-start overflow-y-auto pb-32 pt-20"
    >
      <div className="max-w-6xl w-full mx-auto px-6 py-10 flex flex-col items-center gap-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center gap-2 mb-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Pulse</h1>
          <p className="text-lg text-zinc-400">Real-time performance analytics and agent insights.</p>
        </div>

        {/* Top Metric Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
          <AnimatedMetric label="TOTAL IMPRESSIONS" value={kViews} suffix="k" />
          <AnimatedMetric label="ENGAGEMENT RATE" value={metrics?.ctr || 4} suffix="%" />
          <AnimatedMetric label="NEW FOLLOWERS" value={metrics?.likes || 1204} />
          <AnimatedMetric label="PROFILE CLICKS" value={metrics?.comments || 243} />
        </div>

        {/* Content Structure */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full mt-4">
          
          {/* Left Column (Working) */}
          <div className="flex flex-col items-center w-full">
            <div className="flex items-center gap-3 mb-6 w-full">
              <span className="text-2xl text-emerald-500">📈</span>
              <h2 className="text-emerald-500 text-xl font-bold tracking-widest uppercase">Growth Stack</h2>
            </div>
            <div className="flex flex-col gap-6 w-full">
              <PostCard isPositive={true} delay={0.1} title="Stop using GitHub Copilot. Here's why." platform="LinkedIn" views="142" likes="1.2k" comment="243" />
              <PostCard isPositive={true} delay={0.2} title="How to spin up a NextJS SaaS in 4 minutes." platform="Twitter" views="88" likes="940" comment="112" />
            </div>
          </div>

          {/* Right Column (Not Working) */}
          <div className="flex flex-col items-center w-full">
            <div className="flex items-center gap-3 mb-6 w-full">
              <span className="text-2xl text-red-500">📉</span>
              <h2 className="text-red-500 text-xl font-bold tracking-widest uppercase">Muted Stack</h2>
            </div>
            <div className="flex flex-col gap-6 w-full">
              <PostCard isPositive={false} delay={0.3} title="My weekend thoughts on functional programming." platform="Blog" views="4" likes="12" comment="0" />
            </div>
          </div>

        </div>

        {/* Agent Insight Bottom */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="relative mt-8 p-8 md:p-10 rounded-2xl bg-zinc-900/60 border border-violet-500/30 w-full flex flex-col md:flex-row items-center md:items-start gap-8 shadow-[0_0_40px_-10px_rgba(139,92,246,0.15)]"
        >
          <div className="text-5xl shrink-0 drop-shadow-[0_0_15px_rgba(139,92,246,0.5)]">🤖</div>
          <div className="flex flex-col w-full text-center md:text-left gap-2">
            <div className="text-violet-400 text-sm font-bold tracking-widest uppercase">AGENT INSIGHT</div>
            <div className="text-white text-xl md:text-2xl font-medium leading-relaxed min-h-[80px]">
              {typedInsight}
            </div>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}