import fs from 'fs';
import path from 'path';

const logPaths = {
  Engine: 'C:/Users/tripa/.gemini/antigravity/brain/810daa7b-2a77-4e92-9880-dc7d5450c4b3/.system_generated/steps/171/output.txt',
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
  
  if (jsxMarkup.startsWith('(')) {
    jsxMarkup = jsxMarkup.substring(1);
  }
  if (jsxMarkup.endsWith(')')) {
    jsxMarkup = jsxMarkup.substring(0, jsxMarkup.length - 1);
  }
  
  const component = `
export default function ${name}() {
  return (
    <div style={{ paddingBottom: '120px', width: '100%', minHeight: '100vh', display: 'flex', justifyContent: 'center' }}>
      <div style={{ transform: 'scale(0.65)', transformOrigin: 'top center', width: '1800px', height: '1800px', position: 'relative' }}>
        ${jsxMarkup}
      </div>
    </div>
  );
}
`;
  fs.writeFileSync(path.join(pagesDir, name + '.jsx'), component.trim());
}

const vaultStub = `
export default function Vault() {
  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>Idea Vault</h1>
        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '18px' }}>Content storage securely backed from Screen 2.</p>
      </div>
    </div>
  );
}
`;
fs.writeFileSync(path.join(pagesDir, 'Vault.jsx'), vaultStub.trim());

console.log('Successfully extracted Paper canvases into standard React pages!');
