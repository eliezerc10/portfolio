import { useState, useEffect } from 'react';

const useImagesLoaded = (imageUrls: string[]) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const images = imageUrls.map(url => {
      const img = new Image();
      img.src = url;
      return img;
    });

    const handleImageLoad = () => {
      if (isMounted && images.every(img => img.complete)) {
        setLoaded(true);
      }
    };

    images.forEach(img => {
      if (img.complete) {
        handleImageLoad();
      } else {
        img.onload = handleImageLoad;
      }
    });

    return () => {
      isMounted = false;
    };
  }, [imageUrls]);

  return loaded;
};

export default useImagesLoaded;
