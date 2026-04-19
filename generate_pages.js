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
export default function ${name}() {
  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
      {/* We strictly use CSS calculation for scale to perfectly fit any laptop or monitor screen without scrolling */}
      <div style={{ 
        transform: 'scale(calc(min(90vh, 100vw) / 1800))', 
        transformOrigin: 'center center', 
        width: '1800px', 
        height: '1800px', 
        position: 'absolute', 
        overflow: 'hidden' 
      }}>
        ${jsxMarkup}
      </div>
    </div>
  );
}
`;
  fs.writeFileSync(path.join(pagesDir, name + '.jsx'), component.trim());
}

console.log('Regenerated pages with viewport-adaptive scaling and hidden duplicate navbars.');
