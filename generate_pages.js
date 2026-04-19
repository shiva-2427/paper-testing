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
  // We match the 'top: '1680px'' or similar properties of the navigation wrapper.
  jsxMarkup = jsxMarkup.replace(/top: '1680px', width: '700px' \}/g, "top: '1680px', width: '700px', display: 'none' }");
  // Also catch variations without quotes if they exist
  jsxMarkup = jsxMarkup.replace(/top: 1680, width: '700px'/g, "top: 1680, width: '700px', display: 'none'");
  
  const component = `
import '../index.css';

export default function ${name}() {
  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', overflow: 'hidden', backgroundColor: '#0A0A0F', position: 'relative' }}>
      {/* We use strict absolute centering coords to guarantee the 1800x1800 UI fits any screen size flawlessly */}
      <div 
        className="page-enter"
        style={{ 
          position: 'absolute', 
          top: '50%',
          left: '50%',
          width: '1800px', 
          height: '1800px', 
          transform: 'translate(-50%, -50%) scale(calc(min(95vh, 100vw) / 1800))', 
          overflow: 'hidden' 
        }}
      >
        ${jsxMarkup}
      </div>
    </div>
  );
}
`;
  fs.writeFileSync(path.join(pagesDir, name + '.jsx'), component.trim());
}

console.log('Regenerated pages with viewport-adaptive scaling and hidden duplicate navbars.');
