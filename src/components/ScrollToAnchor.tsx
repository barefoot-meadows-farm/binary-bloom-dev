
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToAnchor = () => {
  const location = useLocation();
  const lastHash = useRef('');

  // Listen for changes to location.hash
  useEffect(() => {
    // Only attempt to scroll if the hash has changed
    if (location.hash && location.hash !== lastHash.current) {
      lastHash.current = location.hash;
      
      // Remove the '#' character and find the element with that id
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      
      if (element) {
        // Wait a bit for any potential animations to complete
        setTimeout(() => {
          window.scrollTo({
            behavior: 'smooth',
            top: element.offsetTop - 80, // Adjust for fixed header height
          });
        }, 100);
      }
    }
  }, [location]);

  return null; // This component doesn't render anything
};

export default ScrollToAnchor;
