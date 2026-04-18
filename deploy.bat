@echo off
cmd /c npm install
node generate_pages.js
"C:\Program Files\Git\cmd\git.exe" init
"C:\Program Files\Git\cmd\git.exe" add .
"C:\Program Files\Git\cmd\git.exe" commit -m "feat: complete 6-screen Creator OS MVP"
"C:\Program Files\Git\cmd\git.exe" remote add origin https://github.com/shiva-2427/paper-testing.git
"C:\Program Files\Git\cmd\git.exe" branch -M main
"C:\Program Files\Git\cmd\git.exe" push -u origin main -f
