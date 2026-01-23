'use client';

import { ReactNode } from 'react';

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'gradient' | 'dark';
}

export default function SectionWrapper({ 
  children, 
  className = '',
  variant = 'default' 
}: SectionWrapperProps) {
  const gradientVariants = {
    default: 'from-purple-500/20 via-blue-500/20 to-cyan-500/20',
    gradient: 'from-indigo-500/30 via-purple-500/30 to-pink-500/30',
    dark: 'from-gray-900/50 via-gray-800/50 to-gray-900/50',
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Animated gradient background */}
      <div className={`absolute inset-0 z-0 bg-gradient-to-br ${gradientVariants[variant]} animate-gradient-shift`}></div>
      
      {/* Glass overlay */}
      <div className="absolute inset-0 z-[1] backdrop-blur-[2px] bg-black/10"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
