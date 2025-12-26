/**
 * TechnoRealm Exact Logo Component
 * Matches the exact design: TR initials (T in gold, R in navy), 
 * TECHNOREALM (TECHNO in gold, REALM in navy), 
 * CONSULTANCY in lighter blue-grey
 */

import React from 'react';

interface ExactLogoProps {
  className?: string;
  size?: 'small' | 'medium' | 'large';
  variant?: 'header' | 'footer';
}

export const TechnoRealmExactLogo: React.FC<ExactLogoProps> = ({ 
  className = '', 
  size = 'medium',
  variant = 'header'
}) => {
  // Try to use the logo PNG file first
  const logoPath = '/logo image/loading12/1234.png';
  
  const sizeClasses = {
    small: 'h-8 md:h-10',
    medium: variant === 'header' ? 'h-12 md:h-14' : 'h-16 md:h-20',
    large: 'h-24 md:h-32'
  };
  
  return (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      <img
        src={logoPath}
        alt="TechnoRealm Logo"
        className="h-full w-auto object-contain"
        style={{
          // Use CSS to blend white background with dark theme
          filter: 'drop-shadow(0 0 0 transparent)',
        }}
        loading="eager"
      />
      {/* Fallback: If image fails, show SVG version */}
      <style jsx>{`
        img {
          image-rendering: -webkit-optimize-contrast;
          image-rendering: crisp-edges;
        }
        /* Make white/light backgrounds blend with dark theme */
        @supports (mix-blend-mode: multiply) {
          img {
            mix-blend-mode: screen;
          }
        }
      `}</style>
    </div>
  );
};

// SVG Fallback Component (matches exact design from image)
export const TechnoRealmExactLogoSVG: React.FC<{ className?: string; size?: 'small' | 'medium' | 'large' }> = ({ 
  className = '', 
  size = 'medium'
}) => {
  const sizes = {
    small: { width: 200, height: 60, trSize: 32, textSize: 20, consultSize: 10 },
    medium: { width: 300, height: 90, trSize: 48, textSize: 28, consultSize: 12 },
    large: { width: 400, height: 120, trSize: 64, textSize: 36, consultSize: 16 }
  };
  
  const { width, height, trSize, textSize, consultSize } = sizes[size];
  
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 400 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
    >
      {/* TR Initials - T in gold, R in navy blue */}
      <g>
        {/* Letter T in gold */}
        <text
          x="20"
          y={trSize + 20}
          fontSize={trSize}
          fontFamily="'Times New Roman', 'Georgia', serif"
          fill="#14B8A6"
          fontWeight="700"
          letterSpacing="0"
        >
          T
        </text>
        {/* Letter R in navy blue */}
        <text
          x={trSize * 0.75}
          y={trSize + 20}
          fontSize={trSize}
          fontFamily="'Times New Roman', 'Georgia', serif"
          fill="#1E3A5F"
          fontWeight="700"
          letterSpacing="0"
        >
          R
        </text>
      </g>

      {/* TECHNOREALM Text */}
      <g>
        <text
          x={trSize * 1.2}
          y={textSize + 25}
          fontSize={textSize}
          fontFamily="'Times New Roman', 'Georgia', serif"
          fontWeight="600"
          letterSpacing="2"
        >
          <tspan fill="#14B8A6">TECHNO</tspan>
          <tspan fill="#1E3A5F">REALM</tspan>
        </text>
      </g>

      {/* CONSULTANCY Text in lighter blue-grey */}
      <g>
        <text
          x={trSize * 1.2}
          y={textSize + 45}
          fontSize={consultSize}
          fontFamily="'Times New Roman', 'Georgia', serif"
          fill="#94a3b8"
          fontWeight="400"
          letterSpacing="4"
        >
          CONSULTANCY
        </text>
      </g>
    </svg>
  );
};

export default TechnoRealmExactLogo;
