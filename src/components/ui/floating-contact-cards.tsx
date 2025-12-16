'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useRef } from 'react';

interface FloatingCardProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  delay?: number;
}

const FloatingCard = ({ icon, title, content, delay = 0 }: FloatingCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseYSpring = useSpring(y, { stiffness: 500, damping: 100 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['17.5deg', '-17.5deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-17.5deg', '17.5deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="relative group"
    >
      <div
        style={{
          transform: 'translateZ(75px)',
          transformStyle: 'preserve-3d',
        }}
        className="relative rounded-2xl bg-gradient-to-br from-[#1A2B42]/80 via-[#1E3A5F]/60 to-[#0A0A10]/80 backdrop-blur-xl border border-[#FFD700]/20 p-6 md:p-8 shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:shadow-[0_12px_48px_rgba(255,215,0,0.3)] transition-all duration-300"
      >
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#FFD700]/0 via-[#FFD700]/0 to-[#FFD700]/0 group-hover:from-[#FFD700]/10 group-hover:via-[#FFD700]/5 group-hover:to-[#FFD700]/10 transition-all duration-500 -z-10 blur-xl" />
        
        {/* Icon */}
        <div
          style={{
            transform: 'translateZ(50px)',
          }}
          className="mb-4"
        >
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FFD700] to-[#E5B800] flex items-center justify-center text-[#1E3A5F] shadow-lg">
            {icon}
          </div>
        </div>

        {/* Content */}
        <div
          style={{
            transform: 'translateZ(50px)',
          }}
        >
          <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
          <p className="text-sm text-zinc-300 leading-relaxed">{content}</p>
        </div>

        {/* Shine effect */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </div>
      </div>
    </motion.div>
  );
};

export const FloatingContactCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
      <FloatingCard
        icon={<Mail className="w-6 h-6" />}
        title="Email Us"
        content="hello@technorealm.com"
        delay={0}
      />
      <FloatingCard
        icon={<Phone className="w-6 h-6" />}
        title="Call Us"
        content="+1 (555) 123-4567"
        delay={0.1}
      />
      <FloatingCard
        icon={<MapPin className="w-6 h-6" />}
        title="Visit Us"
        content="123 Tech Street, Silicon Valley"
        delay={0.2}
      />
      <FloatingCard
        icon={<Clock className="w-6 h-6" />}
        title="Business Hours"
        content="Mon - Fri: 9AM - 6PM EST"
        delay={0.3}
      />
    </div>
  );
};
