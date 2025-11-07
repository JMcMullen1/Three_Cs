# 📁 Three C's Career Wizard - File Guide

## 🎯 Quick Start - Which File Should I Use?

### For End Users (Just want to use it):
**→ Use `career-wizard-standalone.html`**
- ✅ Just double-click to open
- ✅ No setup required
- ✅ Works offline
- ✅ Full functionality

### For Developers (Want to edit/customize):
**→ Use the modular files:**
- `index.html` (main structure)
- `styles.css` (all styles)
- `script.js` (all functionality)
- `career-map.svg` (career map graphic)

⚠️ **Note:** Modular files require a web server (see `START_SERVER.md`)

---

## 📋 Complete File List

### Main Files:

| File | Size | Description | Use When |
|------|------|-------------|----------|
| **career-wizard-standalone.html** | 187KB | Complete app in one file | You want easy setup |
| **index.html** | 4.4KB | Clean HTML structure | You're developing |
| **styles.css** | 47KB | All CSS styles | You're developing |
| **script.js** | 25KB | All JavaScript | You're developing |
| **career-map.svg** | 113KB | Career map graphic | You're developing |

### Documentation:

| File | Description |
|------|-------------|
| **HOW_TO_OPEN.md** | Complete guide for opening both versions |
| **START_SERVER.md** | How to run a local web server |
| **REDESIGN_NOTES.md** | Technical documentation of the redesign |
| **FILE_GUIDE.md** | This file - explains all files |
| **README.md** | Project overview |

### Archives:

| File | Size | Description |
|------|------|-------------|
| **taa-career-wizard.html** | 170KB | Original messy file (backup) |

---

## 🎨 What's the Difference?

### Standalone Version:
```
career-wizard-standalone.html (187KB)
  ├── Everything embedded in one file
  ├── CSS: inline in <style> tags
  ├── JavaScript: inline in <script> tags
  ├── SVG: embedded in HTML
  └── ✅ Works by double-clicking
```

### Modular Version:
```
Four separate files:
  ├── index.html (structure)
  ├── styles.css (styling)
  ├── script.js (functionality)
  ├── career-map.svg (graphic)
  └── ⚠️ Needs web server to work
```

**Both have identical features and functionality!**

---

## ✅ Features (All Versions)

- 💬 Interactive career progression wizard
- 🎯 Three C's visualization (Confidence, Competence, Career Capability)
- 🗺️ Interactive SVG career map
- ⛶ Fullscreen mode
- 📱 Responsive design
- 🎨 Modern glassmorphism UI
- 🏢 TAA branding

---

## 🔄 Version Comparison

| Feature | Standalone | Modular |
|---------|-----------|---------|
| Ease of Use | ⭐⭐⭐⭐⭐ | ⭐⭐ |
| File Count | 1 file | 4 files |
| File Size | 187KB | 189KB total |
| Setup Required | None | Web server |
| Easy to Edit | ⭐⭐ | ⭐⭐⭐⭐⭐ |
| Team Collaboration | ⭐⭐ | ⭐⭐⭐⭐⭐ |
| Browser Caching | ⭐⭐ | ⭐⭐⭐⭐⭐ |
| Best For | End users | Developers |

---

## 🆘 Troubleshooting

### "I see a basic page with no styling"
→ You're using `index.html` without a web server  
→ **Solution:** Use `career-wizard-standalone.html` instead!

### "The career map doesn't show"
→ You're using modular files without a web server  
→ **Solution:** Use `career-wizard-standalone.html` OR run a web server

### "Which file do I give to users?"
→ **Give them:** `career-wizard-standalone.html`  
→ They just double-click it - no setup needed!

### "Which files do I edit for development?"
→ **Edit:** The modular files (`index.html`, `styles.css`, `script.js`, `career-map.svg`)  
→ Then rebuild standalone if needed

---

## 🛠️ For Developers

### Making Changes:

1. **Edit the modular files:**
   - `styles.css` for styling
   - `script.js` for functionality
   - `index.html` for structure
   - `career-map.svg` for the career map

2. **Test locally:**
   ```bash
   python3 -m http.server 8000
   # Visit: http://localhost:8000/index.html
   ```

3. **Rebuild standalone (optional):**
   If you want to update the standalone version after making changes,
   you'll need to re-compile the files into one HTML file.

---

## 📞 Support

For questions or issues, refer to:
- `HOW_TO_OPEN.md` - Opening/setup instructions
- `START_SERVER.md` - Web server setup
- `REDESIGN_NOTES.md` - Technical details

---

## 🎯 Recommendation

**For most users:** Use `career-wizard-standalone.html`
- No setup
- No technical knowledge required
- Just works™

**For developers:** Use the modular files
- Better organization
- Easier to maintain
- Better for version control
- Team-friendly
