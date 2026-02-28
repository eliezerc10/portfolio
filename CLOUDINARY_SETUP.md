# Cloudinary Setup Guide

## ✅ Implementation Complete

This portfolio now uses the official Cloudinary React SDK for automatic image optimization.

## 🎯 How It Works

The application uses a **smart fallback system**:

- **Cloudinary Enabled** (`VITE_USE_CLOUDINARY=true`): Images are served from Cloudinary with automatic optimization
- **Cloudinary Disabled** (`VITE_USE_CLOUDINARY=false`): Images are served from local WebP files

## 📦 Installed Packages

```json
{
  "@cloudinary/url-gen": "^1.x",
  "@cloudinary/react": "^1.x"
}
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file:

```bash
# Enable Cloudinary
VITE_USE_CLOUDINARY=true

# Your Cloudinary cloud name
VITE_CLOUDINARY_CLOUD_NAME=diooqe7ta
```

### Cloudinary Config

File: `src/config/cloudinary.ts`

```typescript
import { Cloudinary } from '@cloudinary/url-gen';

export const cld = new Cloudinary({
  cloud: {
    cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || 'diooqe7ta'
  }
});
```

## 🖼️ CloudinaryImage Component

File: `src/components/common/CloudinaryImage.tsx`

### Features

- **Automatic format selection**: WebP, AVIF based on browser support
- **Automatic quality optimization**: Smart compression
- **Responsive images**: Auto-generated sizes
- **Fallback to local**: Works without Cloudinary

### Usage Example

```tsx
import { CloudinaryImage } from '../common/CloudinaryImage';
import localImage from '../../assets/images/image.webp';

<CloudinaryImage
  publicId="portfolio/image-name"
  localSrc={localImage}
  alt="Description"
  width={1024}
  height={1024}
  loading="eager"
  className="my-class"
/>
```

### Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `publicId` | string | Yes | Cloudinary public ID (e.g., "portfolio/profilePic") |
| `localSrc` | string | Yes | Local image path (fallback) |
| `alt` | string | Yes | Alt text for accessibility |
| `width` | number | No | Image width in pixels |
| `height` | number | No | Image height in pixels |
| `className` | string | No | CSS class name |
| `loading` | 'lazy' \| 'eager' | No | Loading strategy (default: 'lazy') |

## 📤 Uploading Images to Cloudinary

### Option 1: Web Interface (Easiest)

1. Go to [cloudinary.com/console](https://cloudinary.com/console)
2. Navigate to **Media Library**
3. Click **Upload**
4. Create a folder called `portfolio`
5. Upload your images

### Option 2: Cloudinary CLI

```bash
# Install CLI
npm install -g cloudinary-cli

# Configure
cld config

# Upload all images
cld uploader upload src/assets/images/*.webp --folder portfolio
```

### Option 3: Bulk Upload Script

Create `scripts/upload-to-cloudinary.js`:

```javascript
const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');

cloudinary.config({
  cloud_name: 'diooqe7ta',
  api_key: 'YOUR_API_KEY',
  api_secret: 'YOUR_API_SECRET'
});

const uploadDir = path.join(__dirname, '../src/assets/images');
const files = fs.readdirSync(uploadDir);

files.forEach(async (file) => {
  if (file.endsWith('.webp')) {
    const filePath = path.join(uploadDir, file);
    const publicId = `portfolio/${file.replace('.webp', '')}`;
    
    try {
      const result = await cloudinary.uploader.upload(filePath, {
        public_id: publicId,
        folder: 'portfolio'
      });
      console.log(`✓ Uploaded: ${publicId}`);
    } catch (error) {
      console.error(`✗ Failed: ${file}`, error);
    }
  }
});
```

## 🗂️ Image Naming Convention

### Current Implementation

The app expects images in Cloudinary with these public IDs:

#### Profile Picture
- **Public ID**: `portfolio/profilePic`
- **Local**: `src/assets/images/profilePic.webp`

#### Skill Logos
- **Public ID**: `portfolio/Typescript-logo`
- **Public ID**: `portfolio/Javascript-logo`
- **Public ID**: `portfolio/React-logo`
- etc.

#### Social Icons
- **Public ID**: `portfolio/linkedin`
- **Public ID**: `portfolio/gmail`
- **Public ID**: `portfolio/whatsapp`

### Mapping

| Component | Local File | Cloudinary Public ID |
|-----------|------------|---------------------|
| Profile | `profilePic.webp` | `portfolio/profilePic` |
| TypeScript | `Typescript-logo.webp` | `portfolio/Typescript-logo` |
| JavaScript | `JavaScript-logo.webp` | `portfolio/Javascript-logo` |
| React | `React-logo.webp` | `portfolio/React-logo` |
| LinkedIn | `linkedin-logo.webp` | `portfolio/linkedin` |
| Gmail | `gmail-logo.webp` | `portfolio/gmail` |
| WhatsApp | `whatsapp-logo.webp` | `portfolio/whatsapp` |

## 🚀 Testing

### Test with Local Images (Default)

```bash
# .env.local
VITE_USE_CLOUDINARY=false

npm run dev
```

Images will load from `src/assets/images/`

### Test with Cloudinary

```bash
# .env.local
VITE_USE_CLOUDINARY=true
VITE_CLOUDINARY_CLOUD_NAME=diooqe7ta

npm run dev
```

Images will load from Cloudinary with automatic optimization.

### Verify in DevTools

1. Open **DevTools** → **Network** tab
2. Filter by **Img**
3. Check image URLs:
   - **Local**: `/src/assets/images/...`
   - **Cloudinary**: `https://res.cloudinary.com/diooqe7ta/...`

## 📊 Cloudinary Optimizations

When Cloudinary is enabled, images automatically get:

### 1. Format Optimization
```typescript
.format('auto') // Serves WebP or AVIF based on browser
```

### 2. Quality Optimization
```typescript
.quality('auto') // Smart compression
```

### 3. Responsive Sizing
```typescript
.resize(auto().width(1024).height(1024))
```

### Example Transformation

Original URL:
```
https://res.cloudinary.com/diooqe7ta/image/upload/portfolio/profilePic
```

Optimized URL:
```
https://res.cloudinary.com/diooqe7ta/image/upload/f_auto,q_auto,w_1024,h_1024/portfolio/profilePic
```

## 🎨 Customizing Transformations

Edit `src/components/common/CloudinaryImage.tsx`:

```typescript
const img = cld
  .image(publicId)
  .format('auto')
  .quality('auto')
  .resize(
    auto()
      .gravity(autoGravity()) // Smart cropping
      .width(width)
      .height(height)
  )
  .effect('sharpen:100') // Add effects
  .roundCorners(10); // Round corners
```

## 📈 Performance Benefits

### Without Cloudinary (Local WebP)
- **Profile Picture**: 416KB
- **Total Images**: ~1.2MB
- **Formats**: WebP only
- **Optimization**: Manual

### With Cloudinary
- **Profile Picture**: ~200KB (auto-optimized)
- **Total Images**: ~600KB (50% reduction)
- **Formats**: WebP/AVIF (browser-dependent)
- **Optimization**: Automatic
- **CDN**: Global delivery
- **Responsive**: Auto-generated sizes

## 🔄 Migration Checklist

- [x] Install Cloudinary packages
- [x] Create Cloudinary config
- [x] Create CloudinaryImage component
- [x] Update About component
- [x] Update Skills component
- [x] Update Contact component
- [ ] Upload images to Cloudinary
- [ ] Enable Cloudinary in .env.local
- [ ] Test in development
- [ ] Test in production

## 🆓 Cloudinary Free Tier

- **Storage**: 25 GB
- **Bandwidth**: 25 GB/month
- **Transformations**: 25,000/month
- **More than enough** for a portfolio site

## 🐛 Troubleshooting

### Images not loading from Cloudinary

**Check**:
1. `VITE_USE_CLOUDINARY=true` in `.env.local`
2. Images uploaded to Cloudinary
3. Public IDs match the code
4. Cloud name is correct

### Images still loading from local

**Solution**:
```bash
# Restart dev server after changing .env
npm run dev
```

### 404 errors from Cloudinary

**Check public IDs**:
- Must match exactly (case-sensitive)
- Include folder: `portfolio/imageName`
- No file extension in public ID

## 📚 Resources

- [Cloudinary React SDK Docs](https://cloudinary.com/documentation/react_integration)
- [URL Generation Guide](https://cloudinary.com/documentation/image_transformations)
- [Optimization Best Practices](https://cloudinary.com/documentation/image_optimization)

## 🎯 Next Steps

1. **Upload your images** to Cloudinary
2. **Enable Cloudinary** in `.env.local`
3. **Test locally** with `npm run dev`
4. **Deploy** and enjoy automatic optimization!

---

**Current Status**: Cloudinary SDK integrated. Works with local images by default. Enable Cloudinary for automatic optimization.
