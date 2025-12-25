'use client';

import React from 'react';
import { 
  FaMicrosoft, 
  FaAmazon, 
  FaGoogle, 
  FaSalesforce, 
  FaAws,
  FaApple,
  FaSlack,
  FaDropbox,
  FaShopify,
  FaSpotify,
  FaStripe,
  FaUber,
  FaAirbnb
} from 'react-icons/fa';

const clients = [
  { name: 'Microsoft', icon: FaMicrosoft, color: '#00A4EF' },
  { name: 'Amazon', icon: FaAmazon, color: '#FF9900' },
  { name: 'Google', icon: FaGoogle, color: '#4285F4' },
  { name: 'AWS', icon: FaAws, color: '#FF9900' },
  { name: 'Salesforce', icon: FaSalesforce, color: '#00A1E0' },
  { name: 'Apple', icon: FaApple, color: '#A2AAAD' },
  { name: 'Slack', icon: FaSlack, color: '#4A154B' },
  { name: 'Dropbox', icon: FaDropbox, color: '#0061FF' },
  { name: 'Shopify', icon: FaShopify, color: '#96BF48' },
  { name: 'Spotify', icon: FaSpotify, color: '#1DB954' },
  { name: 'Stripe', icon: FaStripe, color: '#635BFF' },
  { name: 'Uber', icon: FaUber, color: '#000000' },
  { name: 'Airbnb', icon: FaAirbnb, color: '#FF5A5F' },
];

const TrustedBy = () => {
  return (
    <section className="bg-[#0A0A10] py-12 sm:py-16 md:py-20 lg:py-24 xl:py-[120px] relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="flex flex-col items-center text-center mb-10 sm:mb-12 md:mb-16">
          {/* Tag with muted olive-yellow background */}
          <div className="inline-flex items-center gap-x-2 rounded-full bg-[#282800] px-3 sm:px-4 py-1 sm:py-1.5 mb-3 sm:mb-4">
            <div className="h-[4px] w-[4px] sm:h-[6px] sm:w-[6px] rounded-full bg-[#14B8A6]" />
            <p className="text-[10px] sm:text-[11px] md:text-[12px] font-medium uppercase tracking-[0.16em] text-white/90">
              WE WORK WITH
            </p>
          </div>
          
          {/* Main heading with golden yellow accent */}
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-white leading-[1.2] tracking-[-0.02em] px-4">
            Trusted <span className="text-[#14B8A6]">By</span>
          </h2>
        </div>

        {/* Scrolling animation container */}
        <div className="relative w-full overflow-hidden">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-r from-[#0A0A10] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-l from-[#0A0A10] to-transparent z-10 pointer-events-none" />
          
          {/* Scrolling clients */}
          <div className="flex items-center gap-10 sm:gap-14 md:gap-20 animate-scroll w-fit">
            {/* First set of clients */}
            {clients.map((client, i) => (
              <div
                key={`first-${i}`}
                className="flex-shrink-0 flex items-center justify-center group"
              >
                <client.icon 
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 transition-all duration-300 opacity-50 group-hover:opacity-100 group-hover:scale-110"
                  style={{ color: client.color }}
                />
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {clients.map((client, i) => (
              <div
                key={`second-${i}`}
                className="flex-shrink-0 flex items-center justify-center group"
              >
                <client.icon 
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 transition-all duration-300 opacity-50 group-hover:opacity-100 group-hover:scale-110"
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
