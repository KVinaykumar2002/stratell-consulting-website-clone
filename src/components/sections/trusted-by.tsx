'use client';

import React from 'react';

const clients = [
  'Microsoft',
  'Amazon',
  'Google',
  'IBM',
  'Oracle',
  'Salesforce',
  'Adobe',
  'SAP',
  'Cisco',
  'Dell',
  'HP',
  'Accenture',
  'Deloitte',
  'PwC',
  'EY',
];

const TrustedBy = () => {
  return (
    <section className="bg-[#0A0A10] py-16 md:py-20 lg:py-[120px] relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-10 lg:px-12">
        <div className="flex flex-col items-center text-center mb-16">
          {/* Tag with muted olive-yellow background */}
          <div className="inline-flex items-center gap-x-2 rounded-full bg-[#282800] px-4 py-1.5 mb-4">
            <div className="h-[6px] w-[6px] rounded-full bg-[#FFD700]" />
            <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-white/90">
              WE WORK WITH
            </p>
          </div>
          
          {/* Main heading with golden yellow accent */}
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-normal text-white leading-[1.2] tracking-[-0.02em]">
            Trusted <span className="text-[#FFD700]">By</span>
          </h2>
        </div>

        {/* Scrolling animation container */}
        <div className="relative w-full overflow-hidden">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0A0A10] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0A0A10] to-transparent z-10 pointer-events-none" />
          
          {/* Scrolling clients */}
          <div className="flex gap-6 animate-scroll w-fit">
            {/* First set of clients */}
            {clients.map((client, i) => (
              <div
                key={`first-${i}`}
                className="flex-shrink-0 rounded-xl bg-[#1A2B42] px-8 py-6 min-w-[200px] flex items-center justify-center border border-white/5 shadow-lg hover:border-[#FFD700]/30 transition-all duration-300"
              >
                <span className="font-sans text-sm font-medium uppercase tracking-widest text-zinc-300">
                  {client}
                </span>
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {clients.map((client, i) => (
              <div
                key={`second-${i}`}
                className="flex-shrink-0 rounded-xl bg-[#1A2B42] px-8 py-6 min-w-[200px] flex items-center justify-center border border-white/5 shadow-lg hover:border-[#FFD700]/30 transition-all duration-300"
              >
                <span className="font-sans text-sm font-medium uppercase tracking-widest text-zinc-300">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;