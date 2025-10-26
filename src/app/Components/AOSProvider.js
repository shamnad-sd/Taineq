// components/AOSProvider.js
'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AOSProvider = ({ children }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Animation happens only once
      easing: 'ease-in-out', // Easing function
      delay: 0, // Delay before animation starts
      offset: 120, // Offset from the original trigger point
      anchorPlacement: 'top-bottom', // Defines which position of the element triggers the animation
      disable: false, // Disable AOS on specific conditions
      startEvent: 'DOMContentLoaded', // Event on which AOS should initialize
      animatedClassName: 'aos-animate', // Class applied on animation
      initClassName: 'aos-init', // Class applied after initialization
      useClassNames: false, // If true, will add content of data-aos as classes on scroll
      disableMutationObserver: false, // Disables automatic mutations' detections
      debounceDelay: 50, // Debounce delay on resize/scroll events
      throttleDelay: 99, // Throttle delay on resize/scroll events
    });

    // Refresh AOS on route changes (important for Next.js)
    const handleRouteChange = () => {
      AOS.refresh();
    };

    // Listen for route changes
    window.addEventListener('popstate', handleRouteChange);

    // Add CSS custom properties for hero animations
    const style = document.createElement('style');
    style.textContent = `
      .aos-init {
        --aos-duration: 1000ms;
        --aos-easing: ease-in-out;
      }
      
      .aos-animate {
        --aos-duration: 1000ms;
        --aos-easing: ease-in-out;
      }
      
      /* Ensure hero content is visible immediately */
      [data-hero="true"] {
        opacity: 1 !important;
        transform: none !important;
      }
    `;
    document.head.appendChild(style);

    // Cleanup
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, []);

  return <>{children}</>;
};

export default AOSProvider;