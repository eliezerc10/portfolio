# Cloudinary Public IDs - Configuration Guide

## 🔍 How to Find Your Public IDs

1. Go to [Cloudinary Media Library](https://cloudinary.com/console/media_library)
2. Click on each image
3. Copy the **Public ID** (the part after `/upload/` and before the file extension)

### Example

For this URL:
```
https://res.cloudinary.com/diooqe7ta/image/upload/v1772298295/Spring-logo_nevyxd.webp
```

The Public ID is: **`Spring-logo_nevyxd`**

## 📝 Update the Mapping File

Edit: `src/config/cloudinaryMapping.ts`

Replace the placeholder values with your actual Public IDs:

```typescript
export const cloudinaryPublicIds: Record<string, string> = {
  // Profile Picture
  'profilePic': 'YOUR_ACTUAL_PUBLIC_ID_HERE',
  
  // Skill Logos
  'Typescript': 'YOUR_ACTUAL_PUBLIC_ID_HERE',
  'Javascript': 'YOUR_ACTUAL_PUBLIC_ID_HERE',
  'Java': 'YOUR_ACTUAL_PUBLIC_ID_HERE',
  'Angular': 'YOUR_ACTUAL_PUBLIC_ID_HERE',
  'React': 'YOUR_ACTUAL_PUBLIC_ID_HERE',
  'Spring': 'Spring-logo_nevyxd', // ✅ Already correct
  'Plsql': 'YOUR_ACTUAL_PUBLIC_ID_HERE',
  'Bootstrap': 'YOUR_ACTUAL_PUBLIC_ID_HERE',
  'Next': 'YOUR_ACTUAL_PUBLIC_ID_HERE',
  'Nest': 'YOUR_ACTUAL_PUBLIC_ID_HERE',
  
  // Social Media Icons
  'linkedin': 'YOUR_ACTUAL_PUBLIC_ID_HERE',
  'gmail': 'YOUR_ACTUAL_PUBLIC_ID_HERE',
  'whatsapp': 'YOUR_ACTUAL_PUBLIC_ID_HERE',
};
```

## 🎯 Quick Method

Run this in your browser console while on Cloudinary Media Library:

```javascript
// Select all images and copy their Public IDs
const images = document.querySelectorAll('.media-library-item');
images.forEach(img => {
  const publicId = img.getAttribute('data-public-id');
  console.log(publicId);
});
```

## ✅ Verification

After updating the mapping file:

1. Set `VITE_USE_CLOUDINARY=true` in `.env.local`
2. Run `npm run dev`
3. Open DevTools → Network tab
4. Check that images load from Cloudinary URLs
5. Verify no 404 errors

## 🔄 Alternative: Use Cloudinary Folders

If you want to organize better, you can upload images to a folder:

1. In Cloudinary, create a folder called `portfolio`
2. Upload all images there
3. Public IDs will be: `portfolio/Spring-logo_nevyxd`
4. Update the mapping to include the folder prefix

---

**Current Status**: Spring logo is confirmed. Update the rest based on your Cloudinary uploads.
