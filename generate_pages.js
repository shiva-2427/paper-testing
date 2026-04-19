import fs from 'fs';
import path from 'path';

const logPaths = {
  Engine: 'C:/Users/tripa/.gemini/antigravity/brain/810daa7b-2a77-4e92-9880-dc7d5450c4b3/.system_generated/steps/171/output.txt',
  Vault: 'C:/Users/tripa/.gemini/antigravity/brain/810daa7b-2a77-4e92-9880-dc7d5450c4b3/.system_generated/steps/497/output.txt',
  Mirror: 'C:/Users/tripa/.gemini/antigravity/brain/810daa7b-2a77-4e92-9880-dc7d5450c4b3/.system_generated/steps/173/output.txt',
  Timeline: 'C:/Users/tripa/.gemini/antigravity/brain/810daa7b-2a77-4e92-9880-dc7d5450c4b3/.system_generated/steps/174/output.txt',
  HookLab: 'C:/Users/tripa/.gemini/antigravity/brain/810daa7b-2a77-4e92-9880-dc7d5450c4b3/.system_generated/steps/175/output.txt',
  Pulse: 'C:/Users/tripa/.gemini/antigravity/brain/810daa7b-2a77-4e92-9880-dc7d5450c4b3/.system_generated/steps/176/output.txt'
};

const pagesDir = path.join(process.cwd(), 'src', 'pages');
if (!fs.existsSync(pagesDir)) {
  fs.mkdirSync(pagesDir, { recursive: true });
}

for (const [name, fp] of Object.entries(logPaths)) {
  if (!fs.existsSync(fp)) {
    console.log('Skipping', name, 'missing log file');
    continue;
  }
  
  let contentStr = fs.readFileSync(fp, 'utf8');
  let jsxMarkup = '';
  
  try {
    jsxMarkup = JSON.parse(contentStr);
  } catch (e) {
    jsxMarkup = contentStr;
  }
  
  // Clean up boundaries
  if (jsxMarkup.startsWith('(')) jsxMarkup = jsxMarkup.substring(1);
  if (jsxMarkup.endsWith(')')) jsxMarkup = jsxMarkup.substring(0, jsxMarkup.length - 1);
  
  // Force wrapper to 100% via the first div
  jsxMarkup = jsxMarkup.replace('<div style={{', '<div style={{ width: "100%", height: "100%",');
  
  // HIDE the duplicate mockup navigation from the JSON so only the global one in App.jsx shows!
  jsxMarkup = jsxMarkup.replace(/top: '1680px', width: '700px' \}/g, "top: '1680px', width: '700px', display: 'none' }");
  jsxMarkup = jsxMarkup.replace(/top: 1680, width: '700px'/g, "top: 1680, width: '700px', display: 'none'");
  
  const component = `
import { motion } from 'framer-motion';

export default function ${name}() {
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
        ${jsxMarkup}
      </motion.div>
    </div>
  );
}
`;
  fs.writeFileSync(path.join(pagesDir, name + '.jsx'), component.trim());
}

console.log('Regenerated pages with viewport-adaptive scaling, animations, and hidden duplicate navbars.');
