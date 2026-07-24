# 🎯 Quick Command Reference

## Essential Commands (Copy & Paste)

### First Time Setup
```powershell
# Navigate to project folder
cd "c:\Users\gihan\Desktop\IT Solution Business"

# Install all dependencies (do this first!)
npm install
```

### Development
```powershell
# Start development server (site opens at http://localhost:3000)
npm run dev

# Stop the server
# Press Ctrl+C in the terminal
```

### Production
```powershell
# Build for production
npm run build

# Preview production build locally
npm run preview
```

### Maintenance
```powershell
# Check for outdated packages
npm outdated

# Update all packages to latest compatible versions
npm update

# Clear cache and reinstall (if having issues)
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm install
```

---

## 🔍 Troubleshooting Commands

### Check Node.js version
```powershell
node --version
# Should be v18.0.0 or higher
```

### Check npm version
```powershell
npm --version
# Should be 9.0.0 or higher
```

### Port already in use?
```powershell
# Use a different port
npm run dev -- --port 3001
```

### Clear browser cache
```powershell
# Open your browser DevTools (F12)
# Right-click the refresh button
# Select "Empty Cache and Hard Reload"
```

---

## 📦 Dependency Management

### View installed packages
```powershell
npm list --depth=0
```

### Add a new package
```powershell
npm install package-name
```

### Add a dev dependency
```powershell
npm install --save-dev package-name
```

### Remove a package
```powershell
npm uninstall package-name
```

---

## 🔧 Build Analysis

### Check bundle size
```powershell
npm run build
# Look at the output for file sizes
```

### Analyze bundle composition (if needed)
```powershell
# Install analyzer
npm install --save-dev rollup-plugin-visualizer

# Then check the stats.html file after build
```

---

## 🚀 Deployment Commands

### Vercel
```powershell
# Install Vercel CLI globally
npm install -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Netlify
```powershell
# Install Netlify CLI globally
npm install -g netlify-cli

# Deploy
netlify deploy

# Deploy to production
netlify deploy --prod
```

---

## 📝 Git Commands (If using version control)

```powershell
# Initialize Git repository
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit"

# Add remote repository
git remote add origin https://github.com/yourusername/your-repo.git

# Push to GitHub
git push -u origin main
```

---

## 🧹 Cleanup Commands

### Remove build files
```powershell
Remove-Item -Recurse -Force dist
```

### Remove node_modules
```powershell
Remove-Item -Recurse -Force node_modules
```

### Clean slate reinstall
```powershell
Remove-Item -Recurse -Force node_modules, dist, package-lock.json
npm install
```

---

## 🎨 Development Workflow

### Standard workflow
```powershell
# 1. Start development
npm run dev

# 2. Make changes to files
# Changes auto-reload in browser

# 3. Before deploying, build and test
npm run build
npm run preview

# 4. If everything looks good, deploy!
```

---

## 📊 Performance Testing

### Using Lighthouse (in Chrome)
```
1. Open your site
2. Press F12 (DevTools)
3. Click "Lighthouse" tab
4. Click "Generate report"
```

---

## 🔐 Environment Setup (Optional)

### Create .env file
```powershell
# Create file
New-Item .env

# Add variables (example)
# VITE_API_URL=https://api.example.com
# VITE_CONTACT_EMAIL=info@humanlensmedia.com
```

### Load environment variables in code
```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

---

## 🎓 Learning Commands

### Open project in VS Code
```powershell
code .
```

### Open in browser
```powershell
# After running npm run dev
Start-Process "http://localhost:3000"
```

---

## 🆘 Emergency Commands

### Something broken? Reset everything:
```powershell
# Step 1: Clean everything
Remove-Item -Recurse -Force node_modules, dist, package-lock.json

# Step 2: Clear npm cache
npm cache clean --force

# Step 3: Reinstall
npm install

# Step 4: Try again
npm run dev
```

---

## 📱 Mobile Testing

### Test on your phone (same WiFi network)
```powershell
# Find your computer's IP address
ipconfig
# Look for "IPv4 Address" under your WiFi adapter

# Start dev server
npm run dev

# On your phone, visit:
# http://YOUR-IP-ADDRESS:3000
# Example: http://192.168.1.100:3000
```

---

## 🔍 Debugging

### Check for errors
```powershell
# Run linting
npm run lint

# Build and check for errors
npm run build
```

### View detailed error messages
```
- Open browser console (F12)
- Check the "Console" tab
- Look for red error messages
```

---

## 🎁 Bonus Commands

### Count lines of code
```powershell
# Using PowerShell
(Get-ChildItem -Recurse -Include *.jsx,*.js,*.css | Select-String ".*").Count
```

### Find specific text in files
```powershell
# Search in all files
Select-String -Path "src\**\*.jsx" -Pattern "your-search-term"
```

---

## 📋 Pre-Deployment Checklist

Run these before deploying:

```powershell
# 1. Check for console errors
npm run dev
# Open browser console, check for errors

# 2. Build successfully
npm run build
# Should complete without errors

# 3. Preview build
npm run preview
# Test the production build

# 4. Check all pages
# Navigate through all 7 pages
# Test mobile view
# Test dark/light mode

# 5. Ready to deploy! 🚀
```

---

## 💡 Pro Tips

### Faster Development
- Keep dev server running while editing
- Use browser DevTools (F12) for debugging
- Install React DevTools extension
- Use VS Code for better coding experience

### Better Performance
- Optimize images before adding them
- Use lazy loading for images
- Keep dependencies updated
- Monitor bundle size

### Staying Organized
- Commit changes regularly (if using Git)
- Test on multiple devices
- Keep documentation updated
- Back up your work

---

**Save this file for quick reference! 📌**

*For more detailed information, see:*
- GET_STARTED.md - Complete beginner guide
- SETUP.md - Detailed setup instructions
- DEPLOYMENT.md - Deploy to production
