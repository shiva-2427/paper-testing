import fs from 'fs';
import path from 'path';

const pagesDir = path.join(process.cwd(), 'src', 'pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.jsx'));

for (const file of files) {
  const fp = path.join(pagesDir, file);
  let content = fs.readFileSync(fp, 'utf8');
  
  // The first <div> inside the component needs width/height, otherwise the absolute children collapse it to 0
  // Target specifically the internal JSX root which starts with `<div style={{ backgroundColor: '#0A0A0F'`
  content = content.replace(
    /<div style={{ backgroundColor: '#0A0A0F'/g, 
    '<div style={{ width: "100%", height: "100%", backgroundColor: "#0A0A0F"'
  );
  
  fs.writeFileSync(fp, content);
}

console.log('Fixed absolute-position collapsing in all JSX screens!');
