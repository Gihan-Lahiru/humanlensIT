# HumanLens Media IT Solutions - Quick Start Guide

## 🚀 Getting Started

Follow these steps to get your website up and running:

### 1. Install Dependencies

Open PowerShell in the project directory and run:

```powershell
npm install
```

This will install all required packages including:
- React & React DOM
- React Router DOM
- Framer Motion (animations)
- Tailwind CSS
- Lucide React (icons)
- Vite (build tool)

### 2. Start Development Server

```powershell
npm run dev
```

The website will open automatically at `http://localhost:3000`

### 3. Build for Production

When you're ready to deploy:

```powershell
npm run build
```

This creates an optimized production build in the `dist` folder.

### 4. Preview Production Build

```powershell
npm run preview
```

---

## 📁 Project Structure

```
IT Solution Business/
├── public/
│   └── images/              # Place your images here
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ServiceCard.jsx
│   │   ├── FeatureCard.jsx
│   │   ├── SectionHeader.jsx
│   │   └── ScrollToTop.jsx
│   ├── pages/               # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Strategy.jsx
│   │   ├── Marketing.jsx
│   │   ├── Financials.jsx
│   │   └── Contact.jsx
│   ├── context/
│   │   └── ThemeContext.jsx # Dark/Light mode
│   ├── App.jsx              # Main app with routing
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## 🎨 Customization Guide

### Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  primary: { /* Your primary color shades */ },
  secondary: { /* Your secondary color shades */ }
}
```

### Content

Each page component (`src/pages/*.jsx`) contains the content. Simply edit the text, arrays, and objects to match your business details.

### Images

1. Add your images to `public/images/`
2. Update image sources in components
3. Recommended images:
   - `hero-image.jpg` - Home page banner
   - `about-team.jpg` - About page team photo
   - `logo.png` - Company logo

### Contact Information

Update contact details in:
- `src/components/Footer.jsx`
- `src/pages/Contact.jsx`

---

## ✨ Features

### ✅ Implemented
- [x] Responsive design (mobile, tablet, desktop)
- [x] Dark/Light mode toggle
- [x] Smooth animations with Framer Motion
- [x] Multi-page routing
- [x] Professional Navbar with mobile menu
- [x] Comprehensive Footer with social links
- [x] Contact form with validation
- [x] SEO-friendly structure
- [x] Modern UI with Tailwind CSS
- [x] Optimized performance

### 🎯 All Pages Included
1. **Home** - Vision, Mission, Stats, Features
2. **About** - Background, Objectives, Values, Team Structure
3. **Services** - 6 Core Services with detailed features
4. **Strategy** - Business Model, Operations, Competitive Advantage
5. **Marketing** - Target Markets, Channels, Promotional Strategies
6. **Financials** - Costs, Revenue Projections, Timeline
7. **Contact** - Form, Contact Info, FAQ

---

## 🛠️ Development Tips

### Hot Reload
Changes to files automatically reload the browser during development.

### Theme Toggle
Click the sun/moon icon in the navbar to switch between light and dark modes.

### Smooth Scrolling
All navigation links have smooth scrolling enabled.

### Animations
Framer Motion animations trigger when elements come into view.

---

## 🌐 Deployment Options

### Option 1: Vercel (Recommended)
1. Push code to GitHub
2. Connect to Vercel
3. Auto-deploys on every push

### Option 2: Netlify
1. Drag & drop `dist` folder
2. Or connect GitHub repo

### Option 3: Traditional Hosting
1. Run `npm run build`
2. Upload `dist` folder contents
3. Configure server for SPA routing

---

## 📱 Testing

### Responsive Testing
Test on different screen sizes:
- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px+

### Browser Testing
Test on:
- Chrome
- Firefox
- Safari
- Edge

---

## 🐛 Troubleshooting

### Issue: Dependencies won't install
**Solution:** Make sure Node.js v18+ is installed
```powershell
node --version
npm --version
```

### Issue: Port 3000 already in use
**Solution:** Use a different port
```powershell
npm run dev -- --port 3001
```

### Issue: Dark mode not working
**Solution:** Clear browser cache and localStorage

---

## 📧 Support

For questions or issues:
- Email: info@humanlensmedia.com
- Check documentation at: [Vite](https://vitejs.dev) | [React](https://react.dev)

---

## 📄 License

© 2025 HumanLens  (Pvt) Ltd. All rights reserved.

---

**Happy Building! 🎉**
