import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Force scroll to top immediately on route change
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
      document.documentElement.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
    }, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
