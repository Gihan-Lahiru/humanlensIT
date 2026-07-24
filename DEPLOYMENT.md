# 🚀 Deployment Guide - HumanLens Media IT Solutions

## Prerequisites

Before deploying, ensure you have:
- ✅ All content reviewed and finalized
- ✅ Images added to `public/images/`
- ✅ Contact information updated
- ✅ Tested locally on multiple devices
- ✅ Code pushed to a Git repository (GitHub recommended)

---

## Deployment Options

### Option 1: Vercel (⭐ Recommended for React/Vite)

**Why Vercel?**
- Zero configuration required
- Automatic HTTPS
- Global CDN
- Free tier available
- Perfect for React apps

**Steps:**

1. **Sign up at [vercel.com](https://vercel.com)**

2. **Install Vercel CLI (Optional)**
   ```powershell
   npm install -g vercel
   ```

3. **Deploy via GitHub (Easiest)**
   - Push your code to GitHub
   - Go to vercel.com and click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Vite settings
   - Click "Deploy"
   - Done! Your site is live in ~2 minutes

4. **Deploy via CLI**
   ```powershell
   cd "c:\Users\gihan\Desktop\IT Solution Business"
   vercel
   ```
   Follow the prompts, and your site will be deployed.

5. **Custom Domain (Optional)**
   - Go to your project settings in Vercel
   - Add your custom domain
   - Update DNS records as instructed

---

### Option 2: Netlify

**Why Netlify?**
- Drag-and-drop deployment
- Free SSL
- Form handling built-in
- Great for static sites

**Steps:**

1. **Build the project**
   ```powershell
   npm run build
   ```

2. **Deploy via Drag & Drop**
   - Go to [netlify.com](https://netlify.com)
   - Sign up/Login
   - Drag the `dist` folder to Netlify Drop
   - Your site is live!

3. **Deploy via GitHub**
   - Connect your GitHub repository
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Click "Deploy"

4. **Custom Domain**
   - Go to Domain Settings
   - Add your custom domain
   - Update your domain's nameservers

---

### Option 3: GitHub Pages

**Steps:**

1. **Install gh-pages**
   ```powershell
   npm install --save-dev gh-pages
   ```

2. **Update `package.json`**
   Add these scripts:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. **Update `vite.config.js`**
   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: '/your-repo-name/',
   })
   ```

4. **Deploy**
   ```powershell
   npm run deploy
   ```

5. **Enable GitHub Pages**
   - Go to your repo settings
   - Pages section
   - Select `gh-pages` branch
   - Your site will be at: `https://yourusername.github.io/your-repo-name/`

---

### Option 4: Traditional Web Hosting (cPanel, etc.)

**Steps:**

1. **Build the project**
   ```powershell
   npm run build
   ```

2. **Configure for SPA routing**
   Create `.htaccess` file in `dist` folder:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

3. **Upload via FTP**
   - Use FileZilla or your hosting's file manager
   - Upload all contents of `dist` folder to `public_html` or `www`
   - Ensure `.htaccess` is uploaded

4. **Verify**
   - Visit your domain
   - Test all pages and navigation

---

## Post-Deployment Checklist

### ✅ Testing
- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] Contact form functions properly
- [ ] Dark/light mode toggles correctly
- [ ] Images load on all pages
- [ ] Mobile responsive on actual devices
- [ ] Test on different browsers

### ✅ SEO & Performance
- [ ] Update meta tags in `index.html`
- [ ] Add Google Analytics (optional)
- [ ] Submit sitemap to Google Search Console
- [ ] Test with Google PageSpeed Insights
- [ ] Ensure HTTPS is enabled

### ✅ Monitoring
- [ ] Set up uptime monitoring (UptimeRobot, etc.)
- [ ] Configure error tracking (Sentry, etc.)
- [ ] Enable analytics

---

## Custom Domain Setup

### For Vercel/Netlify:

1. **Add domain in platform settings**

2. **Update DNS records at your domain registrar:**
   - Type: A Record
   - Name: @
   - Value: (provided by platform)
   
   - Type: CNAME
   - Name: www
   - Value: (provided by platform)

3. **Wait for DNS propagation** (5 minutes - 48 hours)

---

## Environment Variables (If Needed)

If you add backend features later:

1. **Create `.env` file** (don't commit to Git!)
   ```
   VITE_API_URL=https://api.example.com
   VITE_CONTACT_EMAIL=info@humanlensmedia.com
   ```

2. **Access in code:**
   ```javascript
   const apiUrl = import.meta.env.VITE_API_URL;
   ```

3. **Add to deployment platform:**
   - Vercel: Settings → Environment Variables
   - Netlify: Site Settings → Build & Deploy → Environment

---

## Continuous Deployment

Once connected to GitHub:

1. **Push changes to main branch**
   ```powershell
   git add .
   git commit -m "Update content"
   git push origin main
   ```

2. **Automatic deployment**
   - Vercel/Netlify automatically rebuilds
   - New version live in 1-2 minutes

---

## Troubleshooting

### Issue: Blank page after deployment
**Solution:** Check browser console for errors. Usually a path issue.
```javascript
// Update vite.config.js
base: '/',
```

### Issue: 404 on page refresh
**Solution:** Configure SPA routing (see deployment option details)

### Issue: Images not loading
**Solution:** Ensure images are in `public/images/` before building

### Issue: Styles not applying
**Solution:** Clear cache, rebuild:
```powershell
Remove-Item -Recurse -Force node_modules, dist
npm install
npm run build
```

---

## Performance Optimization

### Before deploying:

1. **Optimize images**
   - Use [TinyPNG](https://tinypng.com) or [Squoosh](https://squoosh.app)
   - Convert to WebP format if possible

2. **Lazy load images**
   ```jsx
   <img loading="lazy" src="..." alt="..." />
   ```

3. **Enable caching headers** (on hosting platform)

---

## Backup Strategy

1. **Keep Git repository updated**
   ```powershell
   git push origin main
   ```

2. **Export database** (if you add backend later)

3. **Download production build** regularly

---

## Cost Estimates

| Platform | Free Tier | Paid Plans |
|----------|-----------|------------|
| Vercel | ✅ Yes (Hobby) | $20/month |
| Netlify | ✅ Yes (100GB) | $19/month |
| GitHub Pages | ✅ Yes (Public repos) | Free |
| Traditional Hosting | ❌ No | $5-20/month |

---

## Need Help?

- **Vercel Docs:** https://vercel.com/docs
- **Netlify Docs:** https://docs.netlify.com
- **Vite Deployment:** https://vitejs.dev/guide/static-deploy.html

---

**Ready to Go Live! 🌍**

Choose your preferred platform and follow the steps above. Your professional website will be live in minutes!
