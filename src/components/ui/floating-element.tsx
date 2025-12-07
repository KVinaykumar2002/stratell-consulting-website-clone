"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FloatingElementProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  xOffset?: number;
  yOffset?: number;
  className?: string;
  rotationRange?: number;
}

export function FloatingElement({
  children,
  delay = 0,
  duration = 20,
  xOffset = 0,
  yOffset = 0,
  className = "",
  rotationRange = 10,
}: FloatingElementProps) {
  return (
    <motion.div
      className={`absolute ${className}`}
      initial={{
        x: xOffset,
        y: yOffset,
        rotate: 0,
      }}
      animate={{
        x: [xOffset, xOffset + 20, xOffset - 20, xOffset],
        y: [yOffset, yOffset - 30, yOffset + 30, yOffset],
        rotate: [0, rotationRange, -rotationRange, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}

interface OrbitingElementProps {
  children: ReactNode;
  radius: number;
  duration?: number;
  delay?: number;
  reverse?: boolean;
  className?: string;
}

export function OrbitingElement({
  children,
  radius,
  duration = 20,
  delay = 0,
  reverse = false,
  className = "",
}: OrbitingElementProps) {
  return (
    <motion.div
      className={`absolute ${className}`}
      animate={{
        rotate: reverse ? -360 : 360,
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
      style={{
        width: radius * 2,
        height: radius * 2,
        left: "50%",
        top: "50%",
        marginLeft: -radius,
        marginTop: -radius,
      }}
    >
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2"
        style={{
          transform: `rotate(${reverse ? 360 : -360}deg)`,
        }}
      >
        {children}
      </div>
    </motion.div>
  );
}
