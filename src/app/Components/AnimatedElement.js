'use client';

import { forwardRef, useEffect, useRef, useState, createContext, useContext } from 'react';

// Create a context for synchronized animations
const AnimationContext = createContext();

// Provider component for synchronized animations
export const AnimationProvider = ({ children }) => {
  const [triggerAnimation, setTriggerAnimation] = useState(false);
  
  const startSynchronizedAnimation = () => {
    setTriggerAnimation(true);
  };
  
  return (
    <AnimationContext.Provider value={{ triggerAnimation, startSynchronizedAnimation }}>
      {children}
    </AnimationContext.Provider>
  );
};

// Hook to use animation context
export const useAnimation = () => {
  const context = useContext(AnimationContext);
  if (!context) {
    throw new Error('useAnimation must be used within AnimationProvider');
  }
  return context;
};

const AnimatedElement = forwardRef(({ 
  children, 
  animation = 'fade-up', 
  duration = 1000,
  delay = 0,
  offset = 120,
  easing = 'ease-in-out',
  once = false,
  className = '',
  as: Component = 'div',
  isHero = false,
  syncWithHero = false, // New prop to sync with hero animation
  ...props 
}, ref) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);
  const animationContext = useContext(AnimationContext);

  useEffect(() => {
    if (isHero) {
      // For hero content, trigger animation immediately and notify other components
      const timer = setTimeout(() => {
        setIsVisible(true);
        // Trigger synchronized animations for other components
        if (animationContext?.startSynchronizedAnimation) {
          animationContext.startSynchronizedAnimation();
        }
      }, delay);
      
      return () => clearTimeout(timer);
    } else if (syncWithHero && animationContext?.triggerAnimation) {
      // For content that should sync with hero
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, delay);
      
      return () => clearTimeout(timer);
    }
  }, [isHero, syncWithHero, delay, animationContext?.triggerAnimation, animationContext?.startSynchronizedAnimation]);

  // If it's hero content or synced content, don't use AOS data attributes
  if (isHero || syncWithHero) {
    return (
      <Component
        ref={ref || elementRef}
        className={`${className} ${isVisible ? 'aos-animate' : 'aos-init'}`}
        style={{
          transition: `all ${duration}ms ${easing}`,
          ...getHeroAnimationStyles(animation, isVisible)
        }}
        {...props}
      >
        {children}
      </Component>
    );
  }

  // For non-hero content, use regular AOS
  return (
    <Component
      ref={ref}
      className={className}
      data-aos={animation}
      data-aos-duration={duration}
      data-aos-delay={delay}
      data-aos-offset={offset}
      data-aos-easing={easing}
      data-aos-once={once}
      {...props}
    >
      {children}
    </Component>
  );
});

// Helper function to get animation styles for hero content
const getHeroAnimationStyles = (animation, isVisible) => {
  if (!isVisible) {
    switch (animation) {
      case 'fade-up':
        return { opacity: 0, transform: 'translateY(30px)' };
      case 'fade-down':
        return { opacity: 0, transform: 'translateY(-30px)' };
      case 'fade-left':
        return { opacity: 0, transform: 'translateX(-30px)' };
      case 'fade-right':
        return { opacity: 0, transform: 'translateX(30px)' };
      case 'fade':
        return { opacity: 0 };
      case 'zoom-in':
        return { opacity: 0, transform: 'scale(0.8)' };
      case 'zoom-out':
        return { opacity: 0, transform: 'scale(1.2)' };
      case 'slide-up':
        return { transform: 'translateY(100%)' };
      case 'slide-down':
        return { transform: 'translateY(-100%)' };
      case 'slide-left':
        return { transform: 'translateX(-100%)' };
      case 'slide-right':
        return { transform: 'translateX(100%)' };
      default:
        return { opacity: 0, transform: 'translateY(30px)' };
    }
  }

  // Visible state - reset transforms
  return {
    opacity: 1,
    transform: 'translateY(0) translateX(0) scale(1)',
  };
};

AnimatedElement.displayName = 'AnimatedElement';

export default AnimatedElement;