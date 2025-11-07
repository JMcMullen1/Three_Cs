# 🚀 How to Open the Career Wizard

You have **TWO OPTIONS** - choose the one that's easiest for you!

---

## ⭐ OPTION 1: EASIEST - Standalone File (No Setup Required)

### Just Double-Click!

**File:** `career-wizard-standalone.html`

1. ✅ Extract the ZIP file
2. ✅ Find `career-wizard-standalone.html`
3. ✅ **Double-click it** - that's it!

**Works in:** Chrome, Firefox, Safari, Edge - any modern browser!

**Note:** This is a single 193KB file with everything embedded (but well-organized).

---

## ⭐ OPTION 2: Modular Files (Requires Web Server)

**Files:** `index.html` + `styles.css` + `script.js` + `career-map.svg`

### Why this doesn't work by double-clicking:
Modern browsers block loading separate files (like the SVG) for security when opening local HTML files.

### Solution - Run a Simple Web Server:

#### 🪟 Windows Users:

**If you have Python:**
1. Extract ZIP to a folder (e.g., `C:\Career_Wizard`)
2. Open Command Prompt (Win+R, type `cmd`, press Enter)
3. Type: `cd C:\Career_Wizard` (or your folder path)
4. Type: `python -m http.server 8000`
5. Open browser: **http://localhost:8000/index.html**

**If you don't have Python:**
- Use `career-wizard-standalone.html` instead (Option 1)

#### 🍎 Mac Users:

1. Extract ZIP
2. Open Terminal (Cmd+Space, type "Terminal")
3. Type: `cd ~/Downloads/Three_Cs` (or your folder)
4. Type: `python3 -m http.server 8000`
5. Open browser: **http://localhost:8000/index.html**

#### 💻 Using VS Code:

1. Open folder in VS Code
2. Install "Live Server" extension
3. Right-click `index.html` → "Open with Live Server"
4. Done! Browser opens automatically

---

## ❓ Which Option Should I Choose?

| Feature | Standalone | Modular |
|---------|-----------|---------|
| **Easy to Open** | ✅ Just double-click | ⚠️ Need web server |
| **File Count** | 1 file | 4 files |
| **Maintainability** | ⚠️ Harder to edit | ✅ Easy to edit |
| **Best For** | End users | Developers |

### Quick Decision:
- **Just want to use it?** → Use `career-wizard-standalone.html` (Option 1)
- **Want to edit/customize?** → Use modular files (Option 2)

---

## 🆘 Troubleshooting

### "I see a basic page with no styling"
→ You're using `index.html` without a web server. Use `career-wizard-standalone.html` instead!

### "Port 8000 is already in use"
→ Try: `python -m http.server 8001` then visit http://localhost:8001/index.html

### "I want to stop the server"
→ Press `Ctrl+C` in the terminal/command prompt

### "Still having issues?"
→ Just use `career-wizard-standalone.html` - it always works! 🎯

---

## 📁 What Files Do I Need?

### For Option 1 (Standalone):
- ✅ `career-wizard-standalone.html` ← ONLY THIS FILE!

### For Option 2 (Modular):
- ✅ `index.html`
- ✅ `styles.css`
- ✅ `script.js`
- ✅ `career-map.svg`

(All 4 must be in the same folder)

---

## ✨ Both Options Have The Same Features!

✅ Interactive career progression wizard
✅ Chat bot functionality
✅ Three C's visualization
✅ Interactive career map
✅ Fullscreen mode
✅ Beautiful UI
✅ Fully responsive

**Choose what's easiest for you - they work exactly the same!**
