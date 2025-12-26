"use client";

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
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
    <section className="relative w-full my-32 px-6 md:px-10 flex flex-col md:flex-row items-center justify-between min-h-[30rem] border border-gray-200 bg-gradient-to-br from-white to-gray-50 overflow-hidden rounded-3xl shadow-lg">
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
        <h1 className="text-4xl sm:text-6xl font-bold mb-4 text-[#1E3A5F]">
          Transform Your <span className="text-[#14B8A6]">Business</span>
        </h1>
        <p className="text-gray-600 mb-6 max-w-lg">
          We deliver end-to-end IT solutions—from cloud infrastructure and DevOps to custom software development and digital transformation strategies.
        </p>
        <div className="flex items-center gap-3">
          <Button 
            variant="default" 
            className="bg-[#14B8A6] text-[#1E3A5F] hover:bg-[#0D9488] hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(20,184,166,0.4)]"
          >
            <Link to="/contact" className="flex items-center gap-2">
              Start Your Project
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </Button>
        </div>
      </div>

      {/* Right side: Orbit animation cropped to 1/4 */}
      <div className="relative w-full md:w-1/2 h-[20rem] md:h-full flex items-center justify-start overflow-hidden z-20">
        <div className="relative w-[50rem] h-[50rem] translate-x-[50%] flex items-center justify-center">
          {/* Center Circle */}
          <div className="w-24 h-24 rounded-full bg-[#1E3A5F] shadow-[0_0_30px_rgba(20,184,166,0.2)] flex items-center justify-center border border-[#14B8A6]/30">
            <FaReact className="w-12 h-12 text-[#14B8A6]" />
          </div>

          {/* Generate Orbits */}
          {[...Array(orbitCount)].map((_, orbitIdx) => {
            const size = `${12 + orbitGap * (orbitIdx + 1)}rem`; // equal spacing
            const angleStep = (2 * Math.PI) / iconsPerOrbit;
            const duration = 12 + orbitIdx * 6;

            return (
              <div
                key={orbitIdx}
                className="absolute rounded-full border-2 border-dotted border-[#14B8A6]/30"
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
                        className="absolute bg-white rounded-full p-1 shadow-md border border-gray-200 hover:scale-125 hover:shadow-lg hover:border-[#14B8A6]/50 transition-all duration-300 cursor-pointer"
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

