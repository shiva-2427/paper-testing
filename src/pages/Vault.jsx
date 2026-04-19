import { motion } from 'framer-motion';

export default function Vault() {
  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
      <motion.div 
        initial={{ opacity: 0, scale: 0.96, filter: 'blur(8px)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        exit={{ opacity: 0, scale: 1.02, filter: 'blur(4px)' }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{ 
          transform: 'scale(calc(min(90vh, 100vw) / 1800))', 
          transformOrigin: 'center center', 
          width: '1800px', 
          height: '1800px', 
          position: 'absolute', 
          overflow: 'hidden' 
        }}>
        
    <div style={{ width: "100%", height: "100%", backgroundColor: '#0A0A0F', boxSizing: 'border-box', fontSize: '12px', fontSynthesis: 'none', height: '1800px', lineHeight: '16px', MozOsxFontSmoothing: 'grayscale', overflow: 'clip', position: 'relative', WebkitFontSmoothing: 'antialiased', width: '1800px' }}>
      <div style={{ backgroundImage: 'radial-gradient(circle farthest-corner at 50% 0% in oklab, oklab(54.1% 0.096 -0.227 / 20%) 0%, oklab(71.5% -0.103 -0.073 / 10%) 50%, oklab(0% -.0001 -.0001 / 0%) 100%)', boxSizing: 'border-box', height: '800px', left: '400px', position: 'absolute', top: '0px', width: '1000px' }} />
      <div style={{ alignItems: 'center', backdropFilter: 'blur(24px)', backgroundColor: '#FFFFFF05', borderColor: '#7C3AED66', borderRadius: '24px', borderStyle: 'dashed', borderWidth: '1px', boxShadow: '#7C3AED1A 0px 0px 40px inset', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', height: '160px', justifyContent: 'center', left: '450px', position: 'absolute', top: '180px', width: '900px' }}>
        <div style={{ boxSizing: 'border-box', color: '#000000', display: 'inline-block', fontFamily: 'system-ui, sans-serif', fontSize: '32px', lineHeight: '40px', marginBottom: '12px' }}>
          📥
        </div>
        <div style={{ boxSizing: 'border-box', color: '#FFFFFF', display: 'inline-block', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '28px', fontWeight: 700, letterSpacing: '0.05em', lineHeight: '34px' }}>
          DROP AN IDEA
        </div>
        <div style={{ boxSizing: 'border-box', color: '#FFFFFF80', display: 'inline-block', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '16px', lineHeight: '20px', marginTop: '8px' }}>
          agent scores and files it instantly
        </div>
      </div>
      <div style={{ alignItems: 'center', backdropFilter: 'blur(40px)', backgroundColor: '#FFFFFF05', borderColor: '#FFFFFF26', borderRadius: '32px', borderStyle: 'solid', borderWidth: '1px', boxShadow: '#00000080 0px 10px 40px', boxSizing: 'border-box', display: 'flex', height: '64px', justifyContent: 'space-evenly', left: '550px', paddingInline: '12px', position: 'absolute', top: '1680px', width: '700px', display: 'none' }}>
        <div style={{ boxSizing: 'border-box', color: '#FFFFFF66', display: 'inline-block', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', fontWeight: 500, lineHeight: '18px' }}>
          Engine
        </div>
        <div style={{ boxSizing: 'border-box', color: '#7C3AED', display: 'inline-block', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', fontWeight: 600, lineHeight: '18px', textShadow: '#7C3AEDCC 0px 0px 15px' }}>
          Vault
        </div>
        <div style={{ boxSizing: 'border-box', color: '#FFFFFF66', display: 'inline-block', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', fontWeight: 500, lineHeight: '18px' }}>
          Mirror
        </div>
        <div style={{ boxSizing: 'border-box', color: '#FFFFFF66', display: 'inline-block', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', fontWeight: 500, lineHeight: '18px' }}>
          Timeline
        </div>
        <div style={{ boxSizing: 'border-box', color: '#FFFFFF66', display: 'inline-block', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', fontWeight: 500, lineHeight: '18px' }}>
          Hook Lab
        </div>
        <div style={{ boxSizing: 'border-box', color: '#FFFFFF66', display: 'inline-block', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', fontWeight: 500, lineHeight: '18px' }}>
          Pulse
        </div>
      </div>
      <div style={{ backdropFilter: 'blur(24px)', backgroundColor: '#FFFFFF05', borderColor: '#FFFFFF1F', borderRadius: '16px', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', height: '240px', left: '300px', paddingBlock: '24px', paddingInline: '24px', position: 'absolute', top: '420px', width: '380px' }}>
        <div style={{ alignItems: 'flex-start', boxSizing: 'border-box', display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
          <div style={{ alignItems: 'center', backgroundColor: '#FF643C1A', borderColor: '#FF643C33', borderRadius: '12px', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', display: 'flex', paddingBlock: '4px', paddingInline: '10px' }}>
            <div style={{ boxSizing: 'border-box', color: '#FF8C66', display: 'inline-block', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '12px', fontWeight: 600, lineHeight: '16px' }}>
              🔥 87/100
            </div>
          </div>
          <div style={{ borderColor: '#7C3AED80', borderRadius: '8px', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', paddingBlock: '2px', paddingInline: '8px' }}>
            <div style={{ boxSizing: 'border-box', color: '#7C3AED', display: 'inline-block', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '10px', fontWeight: 600, lineHeight: '12px' }}>
              IN ENGINE
            </div>
          </div>
        </div>
        <div style={{ boxSizing: 'border-box', color: '#FFFFFF', flexBasis: '0%', flexGrow: '1', flexShrink: '1', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '18px', fontWeight: 600, lineHeight: 'round(up, 140%, 1px)', marginBottom: '20px' }}>
          How I built a 10k MRR micro-SaaS as a solo dev in 30 days without marketing budget.
        </div>
        <div style={{ boxSizing: 'border-box', display: 'flex', gap: '8px' }}>
          <div style={{ backgroundColor: '#60A5FA1A', borderRadius: '6px', boxSizing: 'border-box', display: 'inline-block', paddingBlock: '4px', paddingInline: '8px' }}>
            <div style={{ boxSizing: 'border-box', color: '#60A5FA', display: 'inline-block', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '11px', fontWeight: 500, lineHeight: '14px' }}>
              LinkedIn
            </div>
          </div>
          <div style={{ backgroundColor: '#06B6D41A', borderRadius: '6px', boxSizing: 'border-box', display: 'inline-block', paddingBlock: '4px', paddingInline: '8px' }}>
            <div style={{ boxSizing: 'border-box', color: '#06B6D4', display: 'inline-block', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '11px', fontWeight: 500, lineHeight: '14px' }}>
              Twitter
            </div>
          </div>
        </div>
      </div>
      <div style={{ backdropFilter: 'blur(24px)', backgroundColor: '#FFFFFF05', borderColor: '#FFFFFF1F', borderRadius: '16px', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', height: '180px', left: '710px', paddingBlock: '24px', paddingInline: '24px', position: 'absolute', top: '420px', width: '380px' }}>
        <div style={{ alignItems: 'flex-start', boxSizing: 'border-box', display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
          <div style={{ alignItems: 'center', backgroundColor: '#FF643C1A', borderColor: '#FF643C33', borderRadius: '12px', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', display: 'flex', paddingBlock: '4px', paddingInline: '10px' }}>
            <div style={{ boxSizing: 'border-box', color: '#FF8C66', display: 'inline-block', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '12px', fontWeight: 600, lineHeight: '16px' }}>
              🔥 94/100
            </div>
          </div>
          <div style={{ boxSizing: 'border-box', color: '#FFFFFF66', display: 'inline-block', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '10px', fontWeight: 600, lineHeight: '12px' }}>
            UNUSED
          </div>
        </div>
        <div style={{ boxSizing: 'border-box', color: '#FFFFFF', flexBasis: '0%', flexGrow: '1', flexShrink: '1', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '18px', fontWeight: 600, lineHeight: 'round(up, 140%, 1px)', marginBottom: '16px' }}>
          The 3 biggest mistakes founders make finding product-market fit.
        </div>
        <div style={{ boxSizing: 'border-box', display: 'flex', gap: '8px' }}>
          <div style={{ backgroundColor: '#7C3AED1A', borderRadius: '6px', boxSizing: 'border-box', display: 'inline-block', paddingBlock: '4px', paddingInline: '8px' }}>
            <div style={{ boxSizing: 'border-box', color: '#7C3AED', display: 'inline-block', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '11px', fontWeight: 500, lineHeight: '14px' }}>
              Video
            </div>
          </div>
        </div>
      </div>
      <div style={{ backdropFilter: 'blur(24px)', backgroundColor: '#FFFFFF05', borderColor: '#FFFFFF1F', borderRadius: '16px', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', height: '220px', left: '1120px', paddingBlock: '24px', paddingInline: '24px', position: 'absolute', top: '420px', width: '380px' }}>
        <div style={{ alignItems: 'flex-start', boxSizing: 'border-box', display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
          <div style={{ alignItems: 'center', backgroundColor: '#FF643C1A', borderColor: '#FF643C33', borderRadius: '12px', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', display: 'flex', paddingBlock: '4px', paddingInline: '10px' }}>
            <div style={{ boxSizing: 'border-box', color: '#FF8C66', display: 'inline-block', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '12px', fontWeight: 600, lineHeight: '16px' }}>
              🔥 72/100
            </div>
          </div>
          <div style={{ borderColor: '#FFFFFF33', borderRadius: '8px', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', paddingBlock: '2px', paddingInline: '8px' }}>
            <div style={{ boxSizing: 'border-box', color: '#FFFFFFB3', display: 'inline-block', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '10px', fontWeight: 600, lineHeight: '12px' }}>
              PUBLISHED
            </div>
          </div>
        </div>
        <div style={{ boxSizing: 'border-box', color: '#FFFFFF99', flexBasis: '0%', flexGrow: '1', flexShrink: '1', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '18px', fontWeight: 600, lineHeight: 'round(up, 140%, 1px)', marginBottom: '16px' }}>
          Why "build in public" is dead in 2026. Data from 500 successful launches.
        </div>
        <div style={{ boxSizing: 'border-box', display: 'flex', gap: '8px' }}>
          <div style={{ backgroundColor: '#2DD4BF1A', borderRadius: '6px', boxSizing: 'border-box', display: 'inline-block', paddingBlock: '4px', paddingInline: '8px' }}>
            <div style={{ boxSizing: 'border-box', color: '#2DD4BF', display: 'inline-block', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '11px', fontWeight: 500, lineHeight: '14px' }}>
              Blog
            </div>
          </div>
          <div style={{ backgroundColor: '#06B6D41A', borderRadius: '6px', boxSizing: 'border-box', display: 'inline-block', paddingBlock: '4px', paddingInline: '8px' }}>
            <div style={{ boxSizing: 'border-box', color: '#06B6D4', display: 'inline-block', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '11px', fontWeight: 500, lineHeight: '14px' }}>
              Twitter
            </div>
          </div>
        </div>
      </div>
      <div style={{ backdropFilter: 'blur(24px)', backgroundColor: '#FFFFFF05', borderColor: '#FFFFFF1F', borderRadius: '16px', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', height: '200px', left: '300px', paddingBlock: '24px', paddingInline: '24px', position: 'absolute', top: '700px', width: '380px' }}>
        <div style={{ alignItems: 'flex-start', boxSizing: 'border-box', display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
          <div style={{ alignItems: 'center', backgroundColor: '#FF643C1A', borderColor: '#FF643C33', borderRadius: '12px', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', display: 'flex', paddingBlock: '4px', paddingInline: '10px' }}>
            <div style={{ boxSizing: 'border-box', color: '#FF8C66', display: 'inline-block', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '12px', fontWeight: 600, lineHeight: '16px' }}>
              🔥 91/100
            </div>
          </div>
          <div style={{ boxSizing: 'border-box', color: '#FFFFFF66', display: 'inline-block', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '10px', fontWeight: 600, lineHeight: '12px' }}>
            UNUSED
          </div>
        </div>
        <div style={{ boxSizing: 'border-box', color: '#FFFFFF', flexBasis: '0%', flexGrow: '1', flexShrink: '1', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '18px', fontWeight: 600, lineHeight: 'round(up, 140%, 1px)', marginBottom: '16px' }}>
          A deep dive into AI agent economies vs SaaS. Where the money is flowing.
        </div>
        <div style={{ boxSizing: 'border-box', display: 'flex', gap: '8px' }}>
          <div style={{ backgroundColor: '#7C3AED1A', borderRadius: '6px', boxSizing: 'border-box', display: 'inline-block', paddingBlock: '4px', paddingInline: '8px' }}>
            <div style={{ boxSizing: 'border-box', color: '#7C3AED', display: 'inline-block', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '11px', fontWeight: 500, lineHeight: '14px' }}>
              Video
            </div>
          </div>
          <div style={{ backgroundColor: '#60A5FA1A', borderRadius: '6px', boxSizing: 'border-box', display: 'inline-block', paddingBlock: '4px', paddingInline: '8px' }}>
            <div style={{ boxSizing: 'border-box', color: '#60A5FA', display: 'inline-block', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '11px', fontWeight: 500, lineHeight: '14px' }}>
              LinkedIn
            </div>
          </div>
        </div>
      </div>
      <div style={{ backdropFilter: 'blur(24px)', backgroundColor: '#FFFFFF05', borderColor: '#FFFFFF1F', borderRadius: '16px', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', height: '240px', left: '710px', paddingBlock: '24px', paddingInline: '24px', position: 'absolute', top: '640px', width: '380px' }}>
        <div style={{ alignItems: 'flex-start', boxSizing: 'border-box', display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
          <div style={{ alignItems: 'center', backgroundColor: '#FF643C1A', borderColor: '#FF643C33', borderRadius: '12px', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', display: 'flex', paddingBlock: '4px', paddingInline: '10px' }}>
            <div style={{ boxSizing: 'border-box', color: '#FF8C66', display: 'inline-block', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '12px', fontWeight: 600, lineHeight: '16px' }}>
              🔥 85/100
            </div>
          </div>
          <div style={{ borderColor: '#7C3AED80', borderRadius: '8px', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', paddingBlock: '2px', paddingInline: '8px' }}>
            <div style={{ boxSizing: 'border-box', color: '#7C3AED', display: 'inline-block', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '10px', fontWeight: 600, lineHeight: '12px' }}>
              IN ENGINE
            </div>
          </div>
        </div>
        <div style={{ boxSizing: 'border-box', color: '#FFFFFF', flexBasis: '0%', flexGrow: '1', flexShrink: '1', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '18px', fontWeight: 600, lineHeight: 'round(up, 140%, 1px)', marginBottom: '20px' }}>
          Is cursor actually better than native IDEs? 5 real examples of where it wins.
        </div>
        <div style={{ boxSizing: 'border-box', display: 'flex', gap: '8px' }}>
          <div style={{ backgroundColor: '#06B6D41A', borderRadius: '6px', boxSizing: 'border-box', display: 'inline-block', paddingBlock: '4px', paddingInline: '8px' }}>
            <div style={{ boxSizing: 'border-box', color: '#06B6D4', display: 'inline-block', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '11px', fontWeight: 500, lineHeight: '14px' }}>
              Twitter
            </div>
          </div>
        </div>
      </div>
      <div style={{ backdropFilter: 'blur(24px)', backgroundColor: '#FFFFFF05', borderColor: '#FFFFFF1F', borderRadius: '16px', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', height: '180px', left: '1120px', paddingBlock: '24px', paddingInline: '24px', position: 'absolute', top: '680px', width: '380px' }}>
        <div style={{ alignItems: 'flex-start', boxSizing: 'border-box', display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
          <div style={{ alignItems: 'center', backgroundColor: '#FF643C1A', borderColor: '#FF643C33', borderRadius: '12px', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', display: 'flex', paddingBlock: '4px', paddingInline: '10px' }}>
            <div style={{ boxSizing: 'border-box', color: '#FF8C66', display: 'inline-block', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '12px', fontWeight: 600, lineHeight: '16px' }}>
              🔥 68/100
            </div>
          </div>
          <div style={{ boxSizing: 'border-box', color: '#FFFFFF66', display: 'inline-block', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '10px', fontWeight: 600, lineHeight: '12px' }}>
            UNUSED
          </div>
        </div>
        <div style={{ boxSizing: 'border-box', color: '#FFFFFF', flexBasis: '0%', flexGrow: '1', flexShrink: '1', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '18px', fontWeight: 600, lineHeight: 'round(up, 140%, 1px)', marginBottom: '16px' }}>
          Stop using generic color palettes.
        </div>
        <div style={{ boxSizing: 'border-box', display: 'flex', gap: '8px' }}>
          <div style={{ backgroundColor: '#2DD4BF1A', borderRadius: '6px', boxSizing: 'border-box', display: 'inline-block', paddingBlock: '4px', paddingInline: '8px' }}>
            <div style={{ boxSizing: 'border-box', color: '#2DD4BF', display: 'inline-block', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '11px', fontWeight: 500, lineHeight: '14px' }}>
              Blog
            </div>
          </div>
        </div>
      </div>
      <div style={{ alignItems: 'center', backdropFilter: 'blur(24px)', backgroundImage: 'linear-gradient(in oklab 135deg, oklab(54.1% 0.096 -0.227 / 40%) 0%, oklab(71.5% -0.103 -0.073 / 40%) 100%)', backgroundOrigin: 'border-box', borderColor: '#FFFFFF33', borderRadius: '32px', borderStyle: 'solid', borderWidth: '1px', boxShadow: '#FFFFFF1A 0px 0px 20px inset, #7C3AED33 0px 0px 30px', boxSizing: 'border-box', display: 'flex', height: '64px', justifyContent: 'center', left: '660px', position: 'absolute', top: '1150px', width: '480px' }}>
        <div style={{ boxSizing: 'border-box', color: '#FFFFFF', display: 'inline-block', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '16px', fontWeight: 700, letterSpacing: '0.15em', lineHeight: '20px' }}>
          ⚡ SEND TO CONTENT ENGINE →
        </div>
      </div>
    </div>
  
      </motion.div>
    </div>
  );
}