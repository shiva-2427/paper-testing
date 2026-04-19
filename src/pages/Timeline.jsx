import { motion } from 'framer-motion';

const getStatusColor = (status) => {
  switch(status) {
    case 'drafting': return '#F59E0B'; // Amber
    case 'review': return '#06B6D4'; // Cyan
    case 'scheduled': return '#10B981'; // Green
    case 'live': return '#FFFFFF'; // White
    default: return '#7C3AED';
  }
};

const getStatusAnimation = (status) => {
  switch(status) {
    case 'drafting': return { boxShadow: ['0 0 0px #F59E0B', '0 0 10px #F59E0B', '0 0 0px #F59E0B'] };
    case 'review': return { boxShadow: ['0 0 0px #06B6D4', '0 0 10px #06B6D4', '0 0 0px #06B6D4'] };
    case 'scheduled': return { boxShadow: ['0 0 0px #10B981', '0 0 10px #10B981', '0 0 0px #10B981'] };
    case 'live': return { backgroundColor: ['rgba(255,255,255,0.1)', 'rgba(255,255,255,0.5)', 'rgba(255,255,255,0.1)'] };
    default: return {};
  }
};

const TimelineCard = ({ title, format, status, delay }) => {
  const color = getStatusColor(status);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, type: "spring", stiffness: 100, damping: 10 }}
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.03)',
        border: `1px solid rgba(255, 255, 255, 0.1)`,
        borderRadius: '12px',
        padding: '16px',
        marginBottom: '16px',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', alignItems: 'center' }}>
        <div style={{ fontSize: '14px' }}>
          {format === 'Video' ? '🎬' : format === 'Thread' ? '🧵' : '📄'}
        </div>
        <motion.div
          animate={getStatusAnimation(status)}
          transition={{ duration: status === 'live' ? 4 : 2, repeat: Infinity, ease: "easeInOut" }}
          style={{
            backgroundColor: `${color}1A`,
            color: color,
            padding: '4px 8px',
            borderRadius: '6px',
            fontSize: '10px',
            fontWeight: 600,
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            gap: '4px'
          }}
        >
          {status === 'scheduled' && '✓'}
          {status === 'review' && '👁'}
          {status === 'drafting' && '✍'}
          {status}
        </motion.div>
      </div>
      <div style={{ color: '#FFF', fontSize: '14px', fontWeight: 600, lineHeight: '1.4' }}>
        {title}
      </div>
    </motion.div>
  );
};

const DayColumn = ({ day, delay, slots }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration: 0.5 }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        borderRight: '1px dashed rgba(255, 255, 255, 0.1)',
        padding: '0 16px',
        minHeight: '100%'
      }}
    >
      <div style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', marginBottom: '32px', textAlign: 'center' }}>
        {day.toUpperCase()}
      </div>
      
      <div style={{ marginBottom: '24px', flex: 1 }}>
        <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '10px', fontWeight: 600, marginBottom: '16px', letterSpacing: '0.05em' }}>MORNING</div>
        {slots.morning.map((c, i) => <TimelineCard key={i} {...c} delay={delay + 0.2 + (i * 0.1)} />)}
      </div>

      <div style={{ marginBottom: '24px', flex: 1 }}>
        <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '10px', fontWeight: 600, marginBottom: '16px', letterSpacing: '0.05em' }}>AFTERNOON</div>
        {slots.afternoon.map((c, i) => <TimelineCard key={i} {...c} delay={delay + 0.4 + (i * 0.1)} />)}
      </div>

      <div style={{ flex: 1 }}>
        <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '10px', fontWeight: 600, marginBottom: '16px', letterSpacing: '0.05em' }}>EVENING</div>
        {slots.evening.map((c, i) => <TimelineCard key={i} {...c} delay={delay + 0.6 + (i * 0.1)} />)}
      </div>

    </motion.div>
  );
}

export default function Timeline() {
  const schedule = [
    { day: 'Monday', slots: {
      morning: [{ title: '3 lessons from 30 days shipping.', format: 'Text', status: 'scheduled' }],
      afternoon: [{ title: 'Deep dive: The solopreneur thesis.', format: 'Document', status: 'review' }],
      evening: [{ title: 'Script: Why you should learn React.', format: 'Video', status: 'drafting' }]
    }},
    { day: 'Tuesday', slots: {
      morning: [],
      afternoon: [{ title: 'Thread: Re-evaluating product-market fit.', format: 'Thread', status: 'scheduled' }],
      evening: []
    }},
    { day: 'Wednesday', slots: {
      morning: [{ title: 'Live coding session announcement.', format: 'Text', status: 'live' }],
      afternoon: [{ title: 'Is Cursor actually better than native IDEs?', format: 'Document', status: 'review' }],
      evening: []
    }},
    { day: 'Thursday', slots: {
      morning: [],
      afternoon: [],
      evening: []
    }},
    { day: 'Friday', slots: {
      morning: [],
      afternoon: [{ title: 'Weekend thoughts on deep work.', format: 'Text', status: 'drafting' }],
      evening: []
    }}
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      style={{ width: '100vw', minHeight: '100vh', padding: '60px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{ marginBottom: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            <h1 style={{ fontSize: '32px', fontWeight: 700, margin: '0 0 8px 0', color: '#FFF' }}>Content Engine</h1>
            <p style={{ color: 'rgba(255,255,255,0.6)', margin: 0 }}>Auto-generated timeline for items.</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ color: '#FFF', fontSize: '14px', fontWeight: 500 }}>Engine Active</div>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10B981', boxShadow: '0 0 10px #10B981' }}></div>
          </div>
        </div>

        <div style={{ display: 'flex', flex: 1, backgroundColor: 'rgba(255,255,255,0.01)', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)', padding: '32px 0' }}>
          {schedule.map((col, i) => (
            <DayColumn key={col.day} day={col.day} slots={col.slots} delay={i * 0.06} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}