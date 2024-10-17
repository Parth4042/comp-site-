import { useEffect } from 'react';

const useGoogleFont = (font) => {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = `https://fonts.googleapis.com/css2?family=${font}&display=swap`;
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link); // Cleanup the link when component unmounts
    };
  }, [font]);
};

export default useGoogleFont;
