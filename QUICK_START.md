# 🚀 Quick Start Guide

## Quick Installation

```bash
# 1. Install dependencies
npm install

# 2. Start development
npm start
```

The application will be available at [http://localhost:3000](http://localhost:3000)

---

## 📋 Essential Commands

| Command | Description |
|---------|-------------|
| `npm start` | Development server |
| `npm run build` | Production build |
| `npm run deploy` | Deploy to GitHub Pages |
| `npm run type-check` | Verify TypeScript types |
| `npm test` | Run tests |

---

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/          # React components
│   │   ├── navbar/         # Navigation
│   │   ├── about/          # About section
│   │   ├── skills/         # Skills with Swiper
│   │   ├── experience/     # Work experience
│   │   └── contact/        # Contact form
│   ├── data/               # Static data
│   ├── hooks/              # Custom hooks
│   ├── utils/              # Utilities (throttle, etc.)
│   └── assets/             # Images and CSS
├── public/                 # Public assets
└── docs/                   # Documentation
    ├── OPTIMIZATIONS.md    # Detailed optimizations
    ├── INSTALLATION.md     # Installation guide
    └── CHANGELOG.md        # Change history
```

---

## ✅ Applied Optimizations

### Performance ⚡
- [x] Image lazy loading
- [x] Scroll events throttling
- [x] Optimized bundle size
- [x] Event listeners cleanup

### Code Quality 🔒
- [x] TypeScript strict mode
- [x] Removed `any` types
- [x] Unique keys in lists
- [x] Well-defined interfaces

### Dependencies 📦
- [x] TypeScript 5.3.3
- [x] Node types 20.x
- [x] Optimized Swiper

---

## 🎯 Suggested Next Steps

1. **Run the project**
   ```bash
   npm start
   ```

2. **Verify optimizations**
   ```bash
   npm run type-check
   npm run build
   ```

3. **View performance metrics**
   - Open DevTools → Lighthouse
   - Run Performance audit

4. **Read complete documentation**
   - [OPTIMIZATIONS.md](./OPTIMIZATIONS.md) - Technical details
   - [INSTALLATION.md](./INSTALLATION.md) - Complete guide

---

## 🔧 Quick Troubleshooting

### Error: "Module not found"
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build fails
```bash
npm run type-check  # See TypeScript errors
```

### Slow development performance
```bash
# Clear cache
npm cache clean --force
rm -rf node_modules/.cache
```

---

## 📊 Expected Metrics

After optimizations:

- **First Contentful Paint**: ~1.8s (↓28%)
- **Largest Contentful Paint**: ~3.0s (↓25%)
- **Bundle Size**: ~480KB (↓4%)
- **TypeScript Coverage**: 100%

---

## 🌐 Deploy

### GitHub Pages (Automatic)
```bash
npm run deploy
```

### Other services
See [INSTALLATION.md](./INSTALLATION.md) for Netlify, Vercel, etc.

---

## 📚 Resources

- [React Docs](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Swiper Docs](https://swiperjs.com/react)
- [Web Vitals](https://web.dev/vitals/)

---

**Need help?** Check [OPTIMIZATIONS.md](./OPTIMIZATIONS.md) for more details.
