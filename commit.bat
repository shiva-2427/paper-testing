@echo off
"C:\Program Files\Git\cmd\git.exe" config user.name "Auto Deploy"
"C:\Program Files\Git\cmd\git.exe" config user.email "bot@creatoros.com"
"C:\Program Files\Git\cmd\git.exe" rm -r --cached node_modules
"C:\Program Files\Git\cmd\git.exe" add .
"C:\Program Files\Git\cmd\git.exe" commit -m "feat: complete 6-screen Creator OS MVP"
"C:\Program Files\Git\cmd\git.exe" push -u origin main -f
