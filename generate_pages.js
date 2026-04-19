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
  
  // CRITICAL FIX: Only modify the VERY FIRST div of the entire React string to force it to fill the 1800x1800 box.
  jsxMarkup = jsxMarkup.replace('<div style={{', '<div style={{ width: "100%", height: "100%",');
  
  const component = `
export default function ${name}() {
  return (
    <div style={{ paddingBottom: '120px', width: '100%', minHeight: '100vh', display: 'flex', justifyContent: 'center' }}>
      {/* We strictly add overflow: 'hidden' here to prevent embedded sibling artboards (stacked screens) from bleeding down the page */}
      <div style={{ transform: 'scale(0.65)', transformOrigin: 'top center', width: '1800px', height: '1800px', position: 'relative', overflow: 'hidden' }}>
        ${jsxMarkup}
      </div>
    </div>
  );
}
`;
  fs.writeFileSync(path.join(pagesDir, name + '.jsx'), component.trim());
}

console.log('Re-extracted original raw logs. Strictly bounded overlapping/stacked screens via overflow clipping wrapper.');

