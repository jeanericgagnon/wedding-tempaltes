export const animationClasses = {
  fadeIn: 'animate-fade-in',
  slideUp: 'animate-slide-up',
  slideDown: 'animate-slide-down',
  slideLeft: 'animate-slide-left',
  slideRight: 'animate-slide-right',
  scale: 'animate-scale',
  pulse: 'animate-pulse',
  bounce: 'animate-bounce',
};

export const transitionClasses = {
  fast: 'transition-all duration-200 ease-out',
  normal: 'transition-all duration-300 ease-out',
  slow: 'transition-all duration-500 ease-out',
  smooth: 'transition-all duration-700 ease-in-out',
};

export const hoverEffects = {
  lift: 'hover:shadow-2xl hover:-translate-y-1',
  glow: 'hover:shadow-lg hover:shadow-amber-200',
  scale: 'hover:scale-105',
  brighten: 'hover:brightness-110',
  dim: 'hover:opacity-80',
};

export const focusRings = {
  subtle: 'focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2',
  prominent: 'focus:outline-none focus:ring-4 focus:ring-amber-400',
  minimal: 'focus:outline-none focus:border-amber-400',
};

export const decorativeElements = {
  dividerGold: 'h-1 w-16 bg-gradient-to-r from-amber-300 to-amber-500 mx-auto',
  dividerLight: 'h-px w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent',
  cornerAccent: 'absolute w-8 h-8 border-t-2 border-r-2 border-amber-400',
};
