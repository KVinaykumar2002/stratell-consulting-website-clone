"use client";

import React from "react";
import { SparklesCore } from "./sparkles";

interface SparklesPreviewProps {
  text?: string;
}

export function SparklesPreview({ text = "TechnoRealm" }: SparklesPreviewProps) {
  return (
    <div className="h-[18rem] md:h-[22rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
        {text}
      </h1>

      <div className="w-[40rem] h-36 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Sparkles */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Fade Mask */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(300px_160px_at_top,transparent_20%,white)]" />
      </div>
    </div>
  );
}
