'use client';

import React from 'react';
import { 
  SiMicrosoft, 
  SiAmazon, 
  SiGoogle, 
  SiIbm, 
  SiOracle, 
  SiSalesforce, 
  SiAdobe, 
  SiSap, 
  SiCisco, 
  SiDell,
  SiAccenture,
  SiDeloitte
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

const clients = [
  { name: 'Microsoft', icon: SiMicrosoft, color: '#00A4EF' },
  { name: 'Amazon', icon: SiAmazon, color: '#FF9900' },
  { name: 'Google', icon: SiGoogle, color: '#4285F4' },
  { name: 'IBM', icon: SiIbm, color: '#1F70C1' },
  { name: 'Oracle', icon: SiOracle, color: '#F80000' },
  { name: 'Salesforce', icon: SiSalesforce, color: '#00A1E0' },
  { name: 'Adobe', icon: SiAdobe, color: '#FF0000' },
  { name: 'SAP', icon: SiSap, color: '#0FAAFF' },
  { name: 'Cisco', icon: SiCisco, color: '#1BA0D7' },
  { name: 'Dell', icon: SiDell, color: '#007DB8' },
  { name: 'AWS', icon: FaAws, color: '#FF9900' },
  { name: 'Accenture', icon: SiAccenture, color: '#A100FF' },
  { name: 'Deloitte', icon: SiDeloitte, color: '#86BC25' },
];

const TrustedBy = () => {
  return (
    <section className="bg-[#0A0A10] py-12 sm:py-16 md:py-20 lg:py-24 xl:py-[120px] relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="flex flex-col items-center text-center mb-10 sm:mb-12 md:mb-16">
          {/* Tag with muted olive-yellow background */}
          <div className="inline-flex items-center gap-x-2 rounded-full bg-[#282800] px-3 sm:px-4 py-1 sm:py-1.5 mb-3 sm:mb-4">
            <div className="h-[4px] w-[4px] sm:h-[6px] sm:w-[6px] rounded-full bg-[#FFD700]" />
            <p className="text-[10px] sm:text-[11px] md:text-[12px] font-medium uppercase tracking-[0.16em] text-white/90">
              WE WORK WITH
            </p>
          </div>
          
          {/* Main heading with golden yellow accent */}
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-white leading-[1.2] tracking-[-0.02em] px-4">
            Trusted <span className="text-[#FFD700]">By</span>
          </h2>
        </div>

        {/* Scrolling animation container */}
        <div className="relative w-full overflow-hidden">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-r from-[#0A0A10] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-l from-[#0A0A10] to-transparent z-10 pointer-events-none" />
          
          {/* Scrolling clients */}
          <div className="flex gap-4 sm:gap-6 animate-scroll w-fit">
            {/* First set of clients */}
            {clients.map((client, i) => (
              <div
                key={`first-${i}`}
                className="flex-shrink-0 rounded-xl bg-[#1A2B42]/80 px-6 sm:px-8 md:px-10 py-5 sm:py-6 md:py-7 min-w-[140px] sm:min-w-[160px] md:min-w-[180px] flex items-center justify-center border border-white/5 shadow-lg hover:border-[#FFD700]/30 hover:bg-[#1A2B42] transition-all duration-300 group"
              >
                <client.icon 
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 transition-all duration-300 opacity-60 group-hover:opacity-100"
                  style={{ color: client.color }}
                />
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {clients.map((client, i) => (
              <div
                key={`second-${i}`}
                className="flex-shrink-0 rounded-xl bg-[#1A2B42]/80 px-6 sm:px-8 md:px-10 py-5 sm:py-6 md:py-7 min-w-[140px] sm:min-w-[160px] md:min-w-[180px] flex items-center justify-center border border-white/5 shadow-lg hover:border-[#FFD700]/30 hover:bg-[#1A2B42] transition-all duration-300 group"
              >
                <client.icon 
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 transition-all duration-300 opacity-60 group-hover:opacity-100"
                  style={{ color: client.color }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
