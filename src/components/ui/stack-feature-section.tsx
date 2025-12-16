"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Lottie from "lottie-react";
import workingOnlineAnimation from "@/app/Working_Online.json";
import {
  FaReact,
  FaAws,
  FaDocker,
  FaNodeJs,
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaGoogle,
  FaApple,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiVercel,
  SiRedux,
  SiTypescript,
  SiFacebook,
} from "react-icons/si";

const fallbackUrls = [
  "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=400&fit=crop",
];

const iconConfigs = [
  { Icon: FaReact, color: "#61DAFB" },
  { Icon: FaAws, color: "#FF9900" },
  { Icon: FaDocker, color: "#2496ED" },
  { Icon: FaNodeJs, color: "#339933" },
  { Icon: SiNextdotjs, color: "#000000" },
  { Icon: SiVercel, color: "#000000" },
  { Icon: SiRedux, color: "#764ABC" },
  { Icon: SiTypescript, color: "#3178C6" },
  { Icon: FaGithub, color: "#181717" },
  { Icon: FaTwitter, color: "#1DA1F2" },
  { Icon: FaLinkedin, color: "#0077B5" },
  { Icon: FaInstagram, color: "#E1306C" },
  { Icon: FaGoogle, color: "#DB4437" },
  { Icon: FaApple, color: "#000000" },
  { Icon: SiFacebook, color: "#1877F2" },
  { Icon: null, img: fallbackUrls[0] },
  { Icon: null, img: fallbackUrls[1] },
];

export default function FeatureSection() {
  const orbitCount = 3;
  const orbitGap = 8; // rem between orbits
  const iconsPerOrbit = Math.ceil(iconConfigs.length / orbitCount);

  return (
    <section className="relative w-full my-32 px-6 md:px-10 flex flex-col md:flex-row items-center justify-between min-h-[30rem] border border-white/10 bg-gradient-to-br from-[#1E3A5F]/30 to-zinc-900/50 overflow-hidden rounded-3xl">
      {/* Background Lottie Animation - positioned behind left side */}
      <div className="absolute left-50 top-0 w-full md:w-1/2 h-full pointer-events-none z-0">
        <Lottie
          animationData={workingOnlineAnimation}
          loop={true}
          autoplay={true}
          style={{ 
            width: "100%", 
            height: "100%",
            objectFit: "contain",
            opacity: 1
          }}
          className="w-full h-full"
        />
      </div>
      {/* Left side: Heading and Text */}
      <div className="w-half md:w-1/2 py-10 md:py-0 relative z-20 ">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4 text-white">
          Build your <span className="text-[#E5B800]">idea</span>
        </h1>
        <p className="text-zinc-400 mb-6 max-w-lg">
          TechnoRealm delivers modern and responsive solutions using React, Next.js, and
          cutting-edge technologies.
        </p>
        <div className="flex items-center gap-3">
          <Button variant="default" className="bg-[#E5B800] text-[#1E3A5F] hover:bg-[#E5B800]/90">
            <Link href="/contact">
              Get Started
            </Link>
          </Button>
          <Button variant="outline" className="border-[#E5B800]/30 text-white hover:bg-[#E5B800]/10 hover:border-[#E5B800]">Learn More</Button>
        </div>
      </div>

      {/* Right side: Orbit animation cropped to 1/4 */}
      <div className="relative w-full md:w-1/2 h-[20rem] md:h-full flex items-center justify-start overflow-hidden z-20">
        <div className="relative w-[50rem] h-[50rem] translate-x-[50%] flex items-center justify-center">
          {/* Center Circle */}
          <div className="w-24 h-24 rounded-full bg-[#1E3A5F] shadow-[0_0_30px_rgba(229,184,0,0.2)] flex items-center justify-center border border-[#E5B800]/30">
            <FaReact className="w-12 h-12 text-[#E5B800]" />
          </div>

          {/* Generate Orbits */}
          {[...Array(orbitCount)].map((_, orbitIdx) => {
            const size = `${12 + orbitGap * (orbitIdx + 1)}rem`; // equal spacing
            const angleStep = (2 * Math.PI) / iconsPerOrbit;
            const duration = 12 + orbitIdx * 6;

            return (
              <div
                key={orbitIdx}
                className="absolute rounded-full border-2 border-dotted border-[#E5B800]/30"
                style={{
                  width: size,
                  height: size,
                  animation: `orbit-spin ${duration}s linear infinite`,
                  transformOrigin: "center center",
                }}
              >
                {iconConfigs
                  .slice(
                    orbitIdx * iconsPerOrbit,
                    orbitIdx * iconsPerOrbit + iconsPerOrbit
                  )
                  .map((cfg, iconIdx) => {
                    const angle = iconIdx * angleStep;
                    const x = 50 + 50 * Math.cos(angle);
                    const y = 50 + 50 * Math.sin(angle);

                    return (
                      <div
                        key={iconIdx}
                        className="absolute bg-zinc-900 rounded-full p-1 shadow-md border border-white/10"
                        style={{
                          left: `${x}%`,
                          top: `${y}%`,
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        {cfg.Icon ? (
                          <cfg.Icon
                            className="w-8 h-8"
                            style={{ color: cfg.color }}
                          />
                        ) : (
                          <img
                            src={cfg.img}
                            alt="icon"
                            className="w-8 h-8 object-contain rounded-full"
                          />
                        )}
                      </div>
                    );
                  })}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

