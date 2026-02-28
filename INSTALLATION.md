# Installation and Deployment Guide

## 📋 Prerequisites

- Node.js 18+ (recommended 20.x)
- npm 9+ or yarn 1.22+
- Git

## 🚀 Installation

### 1. Clone the repository
```bash
git clone https://github.com/eliezerc10/portfolio.git
cd portfolio
```

### 2. Install updated dependencies
```bash
npm install
```

This command will install the updated versions of:
- TypeScript 5.3.3
- @types/node 20.11.0
- All other optimized dependencies

### 3. Configure environment variables (optional)
```bash
cp .env.example .env.local
```

Edit `.env.local` according to your needs.

## 🛠️ Development

### Start development server
```bash
npm start
```

The application will be available at [http://localhost:3000](http://localhost:3000)

### Development mode features:
- Hot Module Replacement (HMR)
- Source maps for debugging
- Automatic linting
- TypeScript strict mode

## 🏗️ Production Build

### Create optimized build
```bash
npm run build
```

This will generate:
- Minified bundle
- Optimized assets
- Source maps (optional)
- Hashed files for cache busting

### Analyze bundle size
```bash
npm run build
npx source-map-explorer 'build/static/js/*.js'
```

## 🚢 Deploy

### Deploy to GitHub Pages
```bash
npm run deploy
```

This command:
1. Runs `npm run build`
2. Publishes `/build` content to `gh-pages` branch
3. GitHub Pages automatically serves the site

### Deploy to other services

#### Netlify
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

#### Vercel
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

## 🧪 Testing

### Run tests
```bash
npm test
```

### Coverage
```bash
npm test -- --coverage
```

## 📊 Performance Testing

### Lighthouse CI
```bash
# Install Lighthouse CI
npm install -g @lhci/cli

# Run audit
lhci autorun --upload.target=temporary-public-storage
```

### Web Vitals in development
Web Vitals are automatically reported in the browser console during development.

## 🔧 Troubleshooting

### Error: "Module not found"
```bash
rm -rf node_modules package-lock.json
npm install
```

### Error: TypeScript compilation
```bash
# Check TypeScript version
npx tsc --version

# Should be 5.3.3 or higher
```

### Slow build
If the build is slow, consider:
1. Migrate to Vite (see OPTIMIZATIONS.md)
2. Increase Node memory: `NODE_OPTIONS=--max-old-space-size=4096 npm run build`

## 📝 Available Scripts

| Script | Description |
|--------|-------------|
| `npm start` | Start development server |
| `npm run build` | Create production build |
| `npm test` | Run tests |
| `npm run deploy` | Deploy to GitHub Pages |
| `npm run eject` | Expose CRA configuration (irreversible) |

## 🔄 Update Dependencies

### Check available updates
```bash
npm outdated
```

### Update minor dependencies
```bash
npm update
```

### Update major dependencies (with caution)
```bash
npx npm-check-updates -u
npm install
```

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Implemented Optimizations](./OPTIMIZATIONS.md)
- [Create React App Docs](https://create-react-app.dev/)

## 🆘 Support

If you encounter issues:
1. Review [OPTIMIZATIONS.md](./OPTIMIZATIONS.md)
2. Verify Node.js is version 18+
3. Ensure you have the latest dependencies installed
4. Clear cache: `npm cache clean --force`
