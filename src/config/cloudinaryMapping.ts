/**
 * Cloudinary Public ID Mapping
 * 
 * Maps local image names to their Cloudinary public IDs.
 * Update these values to match your actual Cloudinary uploads.
 * 
 * To find your public IDs:
 * 1. Go to Cloudinary Media Library
 * 2. Click on an image
 * 3. Copy the "Public ID" (without the file extension)
 * 
 * Example: If URL is https://res.cloudinary.com/diooqe7ta/image/upload/v1772298295/Spring-logo_nevyxd.webp
 * Then Public ID is: Spring-logo_nevyxd
 */

export const cloudinaryPublicIds: Record<string, string> = {
  // Profile Picture
  'profilePic': 'profilePic_evhhro',
  
  // Skill Logos
  'Typescript': 'Typescript-logo_n2l5om',
  'Javascript': 'JavaScript-logo_sn7bn8',
  'Java': 'Java-logo_ln6tg0',
  'Angular': 'Angular-logo_hsd70k',
  'React': 'React-logo_ia6erf',
  'Spring': 'Spring-logo_nevyxd',
  'PL/SQl': 'Plsql-logo_yvhljh', // Note: exact match from skills.ts
  'Bootstrap': 'Bootstrap-logo_xmmrs1',
  'Next': 'Next-logo_kdumdp',
  'Nest': 'Nest-logo_afeybo',
  
  // Social Media Icons
  'linkedin': 'linkedin-logo_qrzf9p',
  'gmail': 'gmail-logo_oisont',
  'whatsapp': 'whatsapp-logo_y57ycf',
};

/**
 * Get Cloudinary public ID for a given key
 */
export const getCloudinaryPublicId = (key: string): string => {
  return cloudinaryPublicIds[key] || key;
};
