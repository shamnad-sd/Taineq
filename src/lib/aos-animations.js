export const AOSAnimations = {
  // Fade animations
  fadeUp: { animation: 'fade-up', duration: 800, delay: 0 },
  fadeDown: { animation: 'fade-down', duration: 800, delay: 0 },
  fadeLeft: { animation: 'fade-left', duration: 800, delay: 0 },
  fadeRight: { animation: 'fade-right', duration: 800, delay: 0 },
  fade: { animation: 'fade', duration: 800, delay: 0 },
  
  // Slide animations
  slideUp: { animation: 'slide-up', duration: 800, delay: 0 },
  slideDown: { animation: 'slide-down', duration: 800, delay: 0 },
  slideLeft: { animation: 'slide-left', duration: 800, delay: 0 },
  slideRight: { animation: 'slide-right', duration: 800, delay: 0 },
  
  // Zoom animations
  zoomIn: { animation: 'zoom-in', duration: 800, delay: 0 },
  zoomOut: { animation: 'zoom-out', duration: 800, delay: 0 },
  zoomInUp: { animation: 'zoom-in-up', duration: 800, delay: 0 },
  zoomInDown: { animation: 'zoom-in-down', duration: 800, delay: 0 },
  zoomInLeft: { animation: 'zoom-in-left', duration: 800, delay: 0 },
  zoomInRight: { animation: 'zoom-in-right', duration: 800, delay: 0 },
  
  // Flip animations
  flipUp: { animation: 'flip-up', duration: 800, delay: 0 },
  flipDown: { animation: 'flip-down', duration: 800, delay: 0 },
  flipLeft: { animation: 'flip-left', duration: 800, delay: 0 },
  flipRight: { animation: 'flip-right', duration: 800, delay: 0 },
  
  // Custom timing variations
  fast: { duration: 100 },
  slow: { duration: 1900 },
  delayed: { delay: 200 },
  staggered: (index) => ({ delay: index * 100 }),
};