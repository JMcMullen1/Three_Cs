# How to Open the Career Wizard in Your Browser

## The Problem
When you download the ZIP and open `index.html` directly, the browser blocks loading of the SVG file due to security restrictions (CORS policy). You need a local web server.

## ✅ EASY SOLUTION - Choose Your Method:

### Method 1: Python (If you have Python installed)

**Windows:**
1. Extract the ZIP file to a folder (e.g., `C:\Career_Wizard`)
2. Open Command Prompt (search "cmd" in Start menu)
3. Navigate to the folder:
   ```
   cd C:\Career_Wizard
   ```
4. Run:
   ```
   python -m http.server 8000
   ```
5. Open your browser and go to: **http://localhost:8000/index.html**

**Mac:**
1. Extract the ZIP file
2. Open Terminal (search "Terminal" in Spotlight)
3. Navigate to the folder:
   ```
   cd ~/Downloads/Three_Cs
   ```
4. Run:
   ```
   python3 -m http.server 8000
   ```
5. Open your browser and go to: **http://localhost:8000/index.html**

### Method 2: Use VS Code (If you have it)

1. Extract the ZIP
2. Open the folder in VS Code
3. Install "Live Server" extension
4. Right-click `index.html` → "Open with Live Server"
5. Browser opens automatically!

### Method 3: Chrome Extension

1. Install [Web Server for Chrome](https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb)
2. Click the extension → "Choose Folder" → select your extracted ZIP folder
3. Click the Web Server URL (usually http://127.0.0.1:8887)

### Method 4: Node.js

If you have Node.js:
```bash
npx http-server
```
Then visit: **http://localhost:8080/index.html**

---

## 🎯 Quick Troubleshooting

**Still seeing a basic page?**
- Make sure ALL these files are in the same folder:
  - ✅ index.html
  - ✅ styles.css
  - ✅ script.js
  - ✅ career-map.svg

**Port 8000 already in use?**
- Try a different port: `python -m http.server 8001`
- Then visit: http://localhost:8001/index.html

**Want to stop the server?**
- Press `Ctrl+C` in the terminal/command prompt
