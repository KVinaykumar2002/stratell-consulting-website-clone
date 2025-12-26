/**
 * TechnoRealm Logo Component
 * 
 * This component renders the TechnoRealm logo.
 * 
 * To use your actual logo image file:
 * 1. Place your logo file in the /public folder with one of these names:
 *    - technorealm-logo.png (preferred)
 *    - technorealm-logo.svg
 *    - logo.png
 *    - logo.svg
 * 
 * 2. The component will automatically use the image file if it exists.
 *    If the image file is not found, it will fall back to the SVG version.
 * 
 * 3. To specify a custom image path, use:
 *    <TechnoRealmLogo 
 *      imageSrc="/your-custom-logo.png" 
 *      width={200} 
 *      height={48} 
 *    />
 * 
 * The component supports 'light' variant (white) for dark backgrounds 
 * and 'dark' variant (dark grey) for light backgrounds.
 */

import React, { useState } from 'react';
import OptimizedImage from '@/lib/image-utils';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
  useImage?: boolean;
  imageSrc?: string;
  variant?: 'light' | 'dark'; // 'light' for dark backgrounds, 'dark' for light backgrounds
}

// Default logo image paths - try these in order
const DEFAULT_LOGO_PATHS = [
  '/logo image/loading12/1234.png', // Primary logo file
  '/image.png',
  '/technorealm-logo.png',
  '/technorealm-logo.svg',
  '/logo.png',
  '/logo.svg',
  '/technorealm-consultancy-logo.png',
  '/technorealm-consultancy-logo.svg',
];

export const TechnoRealmLogo: React.FC<LogoProps> = ({ 
  className = '', 
  width = 200, 
  height = 60,
  useImage = true, // Default to true to use image file
  imageSrc,
  variant = 'light' // Default to light (white) for dark backgrounds
}) => {
  const [imageError, setImageError] = useState(false);
  const logoColor = variant === 'light' ? '#FFFFFF' : '#4A4A4A';
  
  // Determine which image source to use
  const finalImageSrc = imageSrc || (useImage ? DEFAULT_LOGO_PATHS[0] : null);
  
  // If image source is provided and useImage is true, use OptimizedImage component
  if (useImage && finalImageSrc && !imageError) {
    return (
      <OptimizedImage
        src={finalImageSrc}
        alt="TechnoRealm Logo"
        width={width}
        height={height}
        className={className}
        priority
        objectFit="contain"
        onError={() => setImageError(true)}
      />
    );
  }

  // Otherwise, render SVG logo matching the exact design
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 500 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Stylized R with graceful curve/swoosh */}
      <g>
        {/* Main R vertical stem */}
        <path
          d="M20 20 L20 100"
          stroke={logoColor}
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* R top horizontal bar */}
        <path
          d="M20 20 L55 20"
          stroke={logoColor}
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* R curved bowl - graceful curve extending down and right */}
        <path
          d="M55 20 C72 20 85 32 85 50 C85 68 72 75 55 75"
          stroke={logoColor}
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* R middle horizontal bar */}
        <path
          d="M20 55 L55 55"
          stroke={logoColor}
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* R diagonal leg with subtle swoosh */}
        <path
          d="M55 55 Q65 70 75 100"
          stroke={logoColor}
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Graceful underline/swoosh connecting to text */}
        <path
          d="M75 100 Q85 105 100 100"
          stroke={logoColor}
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          opacity="0.6"
        />
      </g>

      {/* TechnoRealm Text - T and R capitalized, rest lowercase */}
      <g>
        <text
          x="110"
          y="62"
          fontSize="36"
          fontFamily="'Times New Roman', 'Georgia', serif"
          fill={logoColor}
          fontWeight="400"
          letterSpacing="1"
        >
          TechnoRealm
        </text>
        {/* CONSULTANCY Text - uppercase, smaller, more letter spacing */}
        <text
          x="110"
          y="88"
          fontSize="12"
          fontFamily="'Times New Roman', 'Georgia', serif"
          fill={logoColor}
          fontWeight="400"
          letterSpacing="4"
        >
          CONSULTANCY
        </text>
      </g>
    </svg>
  );
};

export default TechnoRealmLogo;

