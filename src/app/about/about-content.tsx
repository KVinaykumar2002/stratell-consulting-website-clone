'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, animate } from 'framer-motion';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';

// Lazy load heavy components
const ScrollExpandMedia = dynamic(() => import('@/components/ui/scroll-expansion-hero').then((mod) => ({ default: mod.default })), { 
  ssr: false 
});
const Timeline = dynamic(() => import('@/components/ui/timeline').then((mod) => ({ default: mod.Timeline })), { 
  ssr: false 
});
const TrustedBy = dynamic(() => import('@/components/sections/trusted-by'), { 
  ssr: false 
});

const AnimatedStatNumber = ({
  value,
  decimals = 0,
}: {
  value: number;
  decimals?: number;
}) => {
  const spanRef = useRef<HTMLSpanElement | null>(null);
  const containerRef = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.7 });
  const motionValue = useMotionValue(0);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(motionValue, value, {
      duration: 1.4,
      ease: 'easeOut',
    });

    const unsubscribe = motionValue.on('change', (latest) => {
      if (spanRef.current) {
        spanRef.current.textContent = Number(latest).toFixed(decimals);
      }
    });

    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [decimals, isInView, motionValue, value]);

  return (
    <span ref={containerRef}>
      <span ref={spanRef}>0</span>
    </span>
  );
};

const AboutContentSection = () => {
  return (
    <div className='max-w-6xl mx-auto px-6 md:px-10 lg:px-12'>
      <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-4 py-1.5 backdrop-blur-md mb-6 shadow-sm">
        <span className="h-[6px] w-[6px] rounded-full bg-primary shadow-[0_0_12px_rgba(59,130,246,0.8)]" />
        <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-sky-100/90">
          Who we are
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-start">
        <div className="space-y-6">
          <h1 className='text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-[#1E3A5F] drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)]'>
            A technology partner
            <span className="block text-gray-700">
              built for ambitious businesses.
            </span>
          </h1>
          <p className='text-base md:text-lg text-gray-700 leading-relaxed max-w-2xl'>
            TechnoRealm is a boutique technology consulting studio helping modern organisations
            redesign how they operate, scale, and innovate. We sit at the intersection of
            strategy, engineering, and design to turn complex challenges into beautifully
            simple digital ecosystems.
          </p>
          <p className='text-base md:text-lg text-gray-700 leading-relaxed max-w-2xl'>
            From first principles discovery to production-ready delivery, our team works
            as an embedded partner—aligning with your culture, co-owning your outcomes,
            and engineering solutions that feel tailor‑made rather than off‑the‑shelf.
          </p>

          <div className="grid gap-4 sm:grid-cols-3 pt-4">
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ y: -6, scale: 1.02, boxShadow: '0 24px 80px rgba(0,0,0,0.9)' }}
              transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.4 }}
              className="rounded-2xl border border-gray-200 bg-white/80 px-4 py-5 backdrop-blur-md shadow-sm"
            >
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-gray-600 mb-2">
                Client Impact
              </p>
              <p className="text-2xl md:text-3xl font-semibold text-[#1E3A5F]">
                <AnimatedStatNumber value={95} />
                <span className="ml-0.5 align-baseline text-xl">%</span>
              </p>
              <p className="text-xs text-gray-600 mt-1">
                of clients engage with us on multi‑year, multi‑project roadmaps.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ y: -6, scale: 1.02, boxShadow: '0 24px 80px rgba(0,0,0,0.9)' }}
              transition={{ duration: 0.5, delay: 0.18, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.4 }}
              className="rounded-2xl border border-gray-200 bg-white/80 px-4 py-5 backdrop-blur-md shadow-sm"
            >
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-gray-600 mb-2">
                Delivery
              </p>
              <p className="text-2xl md:text-3xl font-semibold text-[#1E3A5F] flex items-baseline gap-1">
                <AnimatedStatNumber value={4.8} decimals={1} />
                <span className="text-base text-gray-600">/5</span>
              </p>
              <p className="text-xs text-gray-600 mt-1">
                average delivery satisfaction across transformation engagements.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ y: -6, scale: 1.02, boxShadow: '0 24px 80px rgba(0,0,0,0.9)' }}
              transition={{ duration: 0.5, delay: 0.26, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.4 }}
              className="rounded-2xl border border-gray-200 bg-white/80 px-4 py-5 backdrop-blur-md sm:col-span-1 shadow-sm"
            >
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-gray-600 mb-2">
                Reach
              </p>
              <p className="text-2xl md:text-3xl font-semibold text-[#1E3A5F]">
                <AnimatedStatNumber value={10} />
                <span className="ml-0.5 align-baseline text-xl">+</span>
              </p>
              <p className="text-xs text-gray-600 mt-1">
                industries served across finance, SaaS, retail, and emerging tech.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-primary/40 via-purple-500/30 to-sky-400/20 opacity-70 blur-2xl" aria-hidden="true" />
          <div className="relative h-full rounded-3xl border border-gray-200 bg-gradient-to-br from-white via-gray-50 to-[#14B8A6]/10 p-6 md:p-7 flex flex-col justify-between gap-5 backdrop-blur-xl shadow-lg">
            <div className="space-y-3">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#14B8A6]">
                Philosophy
              </p>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                We believe premium consulting feels calm, considered, and surgical. No
                noise, no bloated slide decks—just a small team of specialists moving
                with you from whiteboard to launch.
              </p>
            </div>

            <div className="grid grid-cols-[auto,1fr] gap-3 items-center border-t border-gray-200 pt-4 mt-2">
              <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-primary via-sky-400 to-emerald-400 flex items-center justify-center text-xs font-semibold text-background shadow-[0_0_20px_rgba(59,130,246,0.7)]" aria-hidden="true">
                TR
              </div>
              <div>
                <p className="text-sm font-medium text-[#1E3A5F]">
                  TechnoRealm Leadership Circle
                </p>
                <p className="text-[11px] text-gray-600">
                  Senior partners, product strategists, and principal engineers working
                  on every engagement—not just at kickoff.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function AboutPageContent() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className='min-h-screen bg-gradient-to-b from-white via-gray-50 to-white text-foreground'>
      <Header />
      <div className='min-h-screen'>
        <ScrollExpandMedia
          mediaType='video'
          mediaSrc='https://res.cloudinary.com/dp7oywrdl/video/upload/v1765227997/3252148-uhd_3840_2160_25fps_kwhlgo.mp4'
          bgImageSrc='/about_us_back.jpg'
          title='About TechnoRealm'
          date='Our Story'
          scrollToExpand='Scroll to Learn More'
          textBlend={false}
        >
          <AboutContentSection />
        </ScrollExpandMedia>
      </div>

      {/* Mission & Vision Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6" aria-labelledby="mission-vision-title">
        <div className="container mx-auto max-w-6xl relative">
          <div className="pointer-events-none absolute inset-x-4 sm:inset-x-8 -top-10 h-24 sm:h-32 rounded-full bg-gradient-to-r from-primary/20 via-sky-500/10 to-purple-500/20 blur-3xl opacity-70" aria-hidden="true" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-12 md:mb-16"
          >
            <div className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-3 sm:px-4 py-1.5 sm:py-2 mb-3 sm:mb-4">
              <div className="h-[4px] w-[4px] sm:h-[6px] sm:w-[6px] rounded-full bg-primary" aria-hidden="true"></div>
              <p className="text-[11px] sm:text-[12px] md:text-[13px] font-semibold uppercase leading-none tracking-[0.05em] text-sky-100">
                Our Foundation
              </p>
            </div>
            <h2 id="mission-vision-title" className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-[1.2] tracking-[-0.02em] text-[#1E3A5F] mb-3 sm:mb-4 drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)] px-4">
              Our Mission & Vision
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 md:mb-20 relative z-10">
            <motion.article
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-gray-200 bg-gradient-to-br from-white via-gray-50 to-[#14B8A6]/10 shadow-lg backdrop-blur-xl"
            >
              <h3 className='text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-[#1E3A5F]'>
                Our Mission
              </h3>
              <p className='text-sm sm:text-base text-gray-700 leading-relaxed'>
                To empower businesses with strategic technology insights and actionable
                IT solutions that transform challenges into opportunities for
                sustainable growth. We are committed to delivering measurable results
                that drive operational excellence and digital transformation.
              </p>
            </motion.article>
            
            <motion.article
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-gray-200 bg-gradient-to-br from-white via-gray-50 to-[#14B8A6]/10 shadow-lg backdrop-blur-xl"
            >
              <h3 className='text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-[#1E3A5F]'>
                Our Vision
              </h3>
              <p className='text-sm sm:text-base text-gray-700 leading-relaxed'>
                To be the most trusted technology consulting partner for businesses seeking
                to achieve operational excellence and digital transformation. We envision
                a future where every organization can leverage cutting-edge technology
                to reach their full potential.
              </p>
            </motion.article>
          </div>

          {/* Why Choose Us Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12 sm:mb-16 md:mb-20 relative z-10"
          >
            <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-6 sm:mb-8 text-center text-[#1E3A5F] px-4'>
              Why Choose Us
            </h3>
            <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6' role="list">
              <article className='p-5 sm:p-6 rounded-lg sm:rounded-xl border border-gray-200 bg-white hover:border-[#14B8A6]/50 hover:shadow-[0_0_40px_rgba(20,184,166,0.15)] transition-all shadow-sm'>
                <h4 className='text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-[#1E3A5F]'>
                  Expert Team
                </h4>
                <p className='text-xs sm:text-sm text-gray-700 leading-relaxed'>
                  Our technology consultants bring decades of combined experience across
                  various industries and IT specializations, ensuring you get the best expertise.
                </p>
              </article>
              <article className='p-5 sm:p-6 rounded-lg sm:rounded-xl border border-gray-200 bg-white hover:border-[#14B8A6]/50 hover:shadow-[0_0_40px_rgba(20,184,166,0.15)] transition-all shadow-sm'>
                <h4 className='text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-[#1E3A5F]'>
                  Proven Results
                </h4>
                <p className='text-xs sm:text-sm text-gray-700 leading-relaxed'>
                  We measure success by the tangible impact we deliver to our
                  clients' bottom line. Our track record speaks for itself.
                </p>
              </article>
              <article className='p-5 sm:p-6 rounded-lg sm:rounded-xl border border-gray-200 bg-white hover:border-[#14B8A6]/50 hover:shadow-[0_0_40px_rgba(20,184,166,0.15)] transition-all shadow-sm'>
                <h4 className='text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-[#1E3A5F]'>
                  Custom Solutions
                </h4>
                <p className='text-xs sm:text-sm text-gray-700 leading-relaxed'>
                  Every business is unique, and we tailor our approach to meet
                  your specific needs and goals with precision and care.
                </p>
              </article>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-6" aria-labelledby="timeline-title">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-4 py-2 mb-4">
              <div className="h-[6px] w-[6px] rounded-full bg-primary" aria-hidden="true"></div>
              <p className="text-[13px] font-semibold uppercase leading-none tracking-[0.05em] text-sky-100">
                Our Journey
              </p>
            </div>
            <h2 id="timeline-title" className="font-display text-3xl md:text-4xl lg:text-5xl font-normal leading-[1.2] tracking-[-0.02em] text-[#1E3A5F] mb-4 drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)]">
              Our Journey & Milestones
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              A timeline of our growth, achievements, and commitment to innovation
            </p>
          </motion.div>

          <Timeline
            data={[
              {
                title: "2022",
                content: (
                  <div>
                    <p className="text-gray-700 text-sm md:text-base font-normal mb-6 leading-relaxed">
                      Key milestones and achievements in our technology journey:
                    </p>
                    <ul className="mb-6 space-y-3" role="list">
                      <li className="flex gap-3 items-center text-[#1E3A5F] text-sm md:text-base">
                        <span className="text-[#14B8A6] font-bold" aria-hidden="true">✓</span>
                        <span>Launched digital transformation services</span>
                      </li>
                      <li className="flex gap-3 items-center text-[#1E3A5F] text-sm md:text-base">
                        <span className="text-[#14B8A6] font-bold" aria-hidden="true">✓</span>
                        <span>Expanded mobile development capabilities</span>
                      </li>
                      <li className="flex gap-3 items-center text-[#1E3A5F] text-sm md:text-base">
                        <span className="text-[#14B8A6] font-bold" aria-hidden="true">✓</span>
                        <span>Achieved ISO 27001 certification</span>
                      </li>
                      <li className="flex gap-3 items-center text-[#1E3A5F] text-sm md:text-base">
                        <span className="text-[#14B8A6] font-bold" aria-hidden="true">✓</span>
                        <span>Opened new offices in key markets</span>
                      </li>
                      <li className="flex gap-3 items-center text-[#1E3A5F] text-sm md:text-base">
                        <span className="text-[#14B8A6] font-bold" aria-hidden="true">✓</span>
                        <span>Reached 100+ successful client projects</span>
                      </li>
                    </ul>
                    <div className="grid grid-cols-2 gap-4">
                      <Image
                        src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=500&fit=crop&q=80"
                        alt="Digital transformation consulting services by TechnoRealm - Modern business technology solutions"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-32 md:h-48 lg:h-64 w-full"
                        loading="lazy"
                      />
                      <Image
                        src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=500&fit=crop&q=80"
                        alt="Mobile application development services by TechnoRealm - iOS and Android app development"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-32 md:h-48 lg:h-64 w-full"
                        loading="lazy"
                      />
                      <Image
                        src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=500&h=500&fit=crop&q=80"
                        alt="UI/UX design services by TechnoRealm - User experience and interface design"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-32 md:h-48 lg:h-64 w-full"
                        loading="lazy"
                      />
                      <Image
                        src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=500&fit=crop&q=80"
                        alt="Cybersecurity and risk management services by TechnoRealm - Enterprise security solutions"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-32 md:h-48 lg:h-64 w-full"
                        loading="lazy"
                      />
                    </div>
                  </div>
                ),
              },
              {
                title: "2023",
                content: (
                  <div>
                    <p className="text-gray-700 text-sm md:text-base font-normal mb-4 leading-relaxed">
                      Launched comprehensive DevOps and cloud infrastructure services, enabling clients to achieve faster deployment cycles and improved scalability.
                    </p>
                    <p className="text-gray-700 text-sm md:text-base font-normal mb-6 leading-relaxed">
                      Established strategic partnerships with leading cloud providers and expanded our team of certified engineers.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <Image
                        src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=500&fit=crop&q=80"
                        alt="DevOps consulting and CI/CD pipeline services by TechnoRealm"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-32 md:h-48 lg:h-64 w-full"
                        loading="lazy"
                      />
                      <Image
                        src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=500&fit=crop&q=80"
                        alt="Cloud infrastructure and migration services by TechnoRealm"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-32 md:h-48 lg:h-64 w-full"
                        loading="lazy"
                      />
                      <Image
                        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=500&fit=crop&q=80"
                        alt="Software development and engineering services by TechnoRealm"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-32 md:h-48 lg:h-64 w-full"
                        loading="lazy"
                      />
                      <Image
                        src="https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=500&h=500&fit=crop&q=80"
                        alt="Database management and optimization services by TechnoRealm"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-32 md:h-48 lg:h-64 w-full"
                        loading="lazy"
                      />
                    </div>
                  </div>
                ),
              },
              {
                title: "2024",
                content: (
                  <div>
                    <p className="text-gray-700 text-sm md:text-base font-normal mb-6 leading-relaxed">
                      Expanded our service offerings with cutting-edge AI and machine learning solutions, helping clients transform their businesses with intelligent automation.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <Image
                        src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&h=500&fit=crop&q=80"
                        alt="AI and machine learning consulting services by TechnoRealm - Artificial intelligence solutions"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-32 md:h-48 lg:h-64 w-full"
                        loading="lazy"
                      />
                      <Image
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=500&fit=crop&q=80"
                        alt="Data analytics and business intelligence services by TechnoRealm"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-32 md:h-48 lg:h-64 w-full"
                        loading="lazy"
                      />
                      <Image
                        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=500&fit=crop&q=80"
                        alt="Cloud migration and infrastructure services by TechnoRealm - AWS, Azure, GCP solutions"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-32 md:h-48 lg:h-64 w-full"
                        loading="lazy"
                      />
                      <Image
                        src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=500&fit=crop&q=80"
                        alt="Enterprise security and compliance solutions by TechnoRealm"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-32 md:h-48 lg:h-64 w-full"
                        loading="lazy"
                      />
                    </div>
                  </div>
                ),
              },
            ]}
          />
        </div>
      </section>

      {/* Trusted By Section */}
      <TrustedBy />

      <Footer />
    </main>
  );
}

