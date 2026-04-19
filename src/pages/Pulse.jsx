import { motion } from 'framer-motion';
import useCanvasStore from '../store/canvasStore';
import { useCounter, useTypewriter } from '../hooks/useAnimations';

const AnimatedMetric = ({ label, value, prefix = "", suffix = "" }) => {
  const animatedValue = useCounter(value, 1200);
  
  return (
    <div style={{
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      borderRadius: '24px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      padding: '24px',
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      minWidth: 0,
      backdropFilter: 'blur(24px)'
    }}>
      <div style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '14px', fontWeight: 600, letterSpacing: '0.1em', marginBottom: '8px' }}>
        {label}
      </div>
      <div style={{ color: '#fff', fontSize: '36px', fontWeight: 700, fontFamily: 'system-ui, sans-serif' }}>
        {prefix}{animatedValue}{suffix}
      </div>
    </div>
  );
};

const PostCard = ({ title, platform, views, likes, comment, delay, isPositive }) => {
  return (
    <motion.div
      initial={{ x: isPositive ? -50 : 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        border: `1px solid ${isPositive ? 'rgba(16, 185, 129, 0.3)' : 'rgba(239, 68, 68, 0.3)'}`,
        borderRadius: '12px',
        padding: '20px',
        width: '100%'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', alignItems: 'flex-start' }}>
        <div style={{ color: '#fff', fontSize: '14px', fontWeight: 600, lineHeight: '18px', paddingRight: '12px' }}>
          {title}
        </div>
        <div style={{ backgroundColor: 'rgba(6, 182, 212, 0.1)', color: '#06B6D4', padding: '4px 8px', borderRadius: '6px', fontSize: '11px', fontWeight: 600 }}>
          {platform}
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>
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
  
  const insightText = "Posts ending with direct questions increased comment velocity by +48% over standard statements. I recommend asking users about their stack in your next 3 tweets.";
  const typedInsight = useTypewriter(agentStatus === 'complete' || agentStatus === 'idle' ? insightText : "Waiting for engine output...", 20);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      style={{ width: '100vw', minHeight: '100vh', display: 'flex', justifyContent: 'center', boxSizing: 'border-box' }}
    >
      <div style={{ width: '100%', maxWidth: '1400px', display: 'flex', flexDirection: 'column', padding: '60px 40px', paddingBottom: '120px' }}>
        
        {/* Top Metric Strip */}
        <div style={{ display: 'flex', gap: '24px', width: '100%', marginBottom: '40px' }}>
          <AnimatedMetric label="TOTAL IMPRESSIONS" value={kViews} suffix="k" />
          <AnimatedMetric label="ENGAGEMENT RATE" value={metrics?.ctr || 4} suffix="%" />
          <AnimatedMetric label="NEW FOLLOWERS" value={metrics?.likes || 1204} />
          <AnimatedMetric label="PROFILE CLICKS" value={metrics?.comments || 243} />
        </div>

        {/* CSS Grid for Columns */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '40px', flex: 1, marginBottom: '40px' }}>
          
          {/* Left Column (Working) */}
          <div style={{
            backgroundColor: 'rgba(16, 185, 129, 0.05)',
            border: '1px solid rgba(16, 185, 129, 0.2)',
            borderRadius: '20px',
            padding: '32px',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
              <div style={{ fontSize: '24px', marginRight: '12px' }}>dY S</div>
              <div style={{ color: '#10B981', fontSize: '18px', fontWeight: 700, letterSpacing: '0.1em' }}>GROWTH STACK</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <PostCard isPositive={true} delay={0.1} title="A deep dive into AI agent economies vs SaaS." platform="LinkedIn" views="142" likes="1.2k" comment="243" />
              <PostCard isPositive={true} delay={0.2} title="Is cursor actually better than native IDEs?" platform="Twitter" views="88" likes="940" comment="112" />
            </div>
          </div>

          {/* Right Column (Not Working) */}
          <div style={{
            backgroundColor: 'rgba(239, 68, 68, 0.05)',
            border: '1px solid rgba(239, 68, 68, 0.2)',
            borderRadius: '20px',
            padding: '32px',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
              <div style={{ fontSize: '24px', marginRight: '12px' }}>dY S</div>
              <div style={{ color: '#EF4444', fontSize: '18px', fontWeight: 700, letterSpacing: '0.1em' }}>MUTED STACK</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <PostCard isPositive={false} delay={0.3} title="My thoughts on standard color palettes." platform="Blog" views="4" likes="12" comment="0" />
            </div>
          </div>

        </div>

        {/* Agent Insight Bottom */}
        <div style={{
          position: 'relative',
          padding: '40px',
          borderRadius: '24px',
          backgroundColor: 'rgba(255, 255, 255, 0.03)',
          border: '1px solid rgba(124, 58, 237, 0.4)',
          boxShadow: 'inset 0 0 30px rgba(255,255,255,0.05), 0 0 50px rgba(124, 58, 237, 0.1)',
          display: 'flex',
          alignItems: 'center'
        }}>
          <div style={{ fontSize: '48px', marginRight: '40px' }}>🤖</div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ color: '#7C3AED', fontSize: '14px', fontWeight: 700, letterSpacing: '0.1em', marginBottom: '8px' }}>AGENT INSIGHT</div>
            <div style={{ color: '#FFF', fontSize: '24px', fontWeight: 600, lineHeight: '140%', minHeight: '68px' }}>
              {typedInsight}
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
}