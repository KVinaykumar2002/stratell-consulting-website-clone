'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, animate } from 'framer-motion';
import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero';
import Image from 'next/image';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import { Timeline } from '@/components/ui/timeline';
import TrustedBy from '@/components/sections/trusted-by';

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

const AboutContent = () => {
  return (
    <div className='max-w-6xl mx-auto px-6 md:px-10 lg:px-12'>
      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-1.5 backdrop-blur-md mb-6">
        <span className="h-[6px] w-[6px] rounded-full bg-primary shadow-[0_0_12px_rgba(59,130,246,0.8)]" />
        <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-sky-100/90">
          Who we are
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-start">
        <div className="space-y-6">
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-zinc-50 drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)]'>
            A technology partner
            <span className="block text-zinc-300">
              built for ambitious businesses.
            </span>
          </h2>
          <p className='text-base md:text-lg text-zinc-300 leading-relaxed max-w-2xl'>
            TechnoRealm is a boutique technology consulting studio helping modern organisations
            redesign how they operate, scale, and innovate. We sit at the intersection of
            strategy, engineering, and design to turn complex challenges into beautifully
            simple digital ecosystems.
          </p>
          <p className='text-base md:text-lg text-zinc-300 leading-relaxed max-w-2xl'>
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
              className="rounded-2xl border border-white/10 bg-black/30 px-4 py-5 backdrop-blur-md"
            >
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-400 mb-2">
                Client Impact
              </p>
              <p className="text-2xl md:text-3xl font-semibold text-zinc-50">
                <AnimatedStatNumber value={95} />
                <span className="ml-0.5 align-baseline text-xl">%</span>
              </p>
              <p className="text-xs text-zinc-400 mt-1">
                of clients engage with us on multi‑year, multi‑project roadmaps.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ y: -6, scale: 1.02, boxShadow: '0 24px 80px rgba(0,0,0,0.9)' }}
              transition={{ duration: 0.5, delay: 0.18, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.4 }}
              className="rounded-2xl border border-white/10 bg-black/30 px-4 py-5 backdrop-blur-md"
            >
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-400 mb-2">
                Delivery
              </p>
              <p className="text-2xl md:text-3xl font-semibold text-zinc-50 flex items-baseline gap-1">
                <AnimatedStatNumber value={4.8} decimals={1} />
                <span className="text-base text-zinc-400">/5</span>
              </p>
              <p className="text-xs text-zinc-400 mt-1">
                average delivery satisfaction across transformation engagements.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ y: -6, scale: 1.02, boxShadow: '0 24px 80px rgba(0,0,0,0.9)' }}
              transition={{ duration: 0.5, delay: 0.26, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.4 }}
              className="rounded-2xl border border-white/10 bg-black/30 px-4 py-5 backdrop-blur-md sm:col-span-1"
            >
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-400 mb-2">
                Reach
              </p>
              <p className="text-2xl md:text-3xl font-semibold text-zinc-50">
                <AnimatedStatNumber value={10} />
                <span className="ml-0.5 align-baseline text-xl">+</span>
              </p>
              <p className="text-xs text-zinc-400 mt-1">
                industries served across finance, SaaS, retail, and emerging tech.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-primary/40 via-purple-500/30 to-sky-400/20 opacity-70 blur-2xl" />
          <div className="relative h-full rounded-3xl border border-white/10 bg-gradient-to-br from-black/70 via-black/40 to-primary/10 p-6 md:p-7 flex flex-col justify-between gap-5 backdrop-blur-xl">
            <div className="space-y-3">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-sky-200">
                Philosophy
              </p>
              <p className="text-sm md:text-base text-zinc-300 leading-relaxed">
                We believe premium consulting feels calm, considered, and surgical. No
                noise, no bloated slide decks—just a small team of specialists moving
                with you from whiteboard to launch.
              </p>
            </div>

            <div className="grid grid-cols-[auto,1fr] gap-3 items-center border-t border-white/10 pt-4 mt-2">
              <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-primary via-sky-400 to-emerald-400 flex items-center justify-center text-xs font-semibold text-background shadow-[0_0_20px_rgba(59,130,246,0.7)]">
                TR
              </div>
              <div>
                <p className="text-sm font-medium text-zinc-50">
                  TechnoRealm Leadership Circle
                </p>
                <p className="text-[11px] text-zinc-400">
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

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className='min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-foreground'>
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
          <AboutContent />
        </ScrollExpandMedia>
      </div>

      {/* Mission & Vision Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl relative">
          <div className="pointer-events-none absolute inset-x-8 -top-10 h-32 rounded-full bg-gradient-to-r from-primary/20 via-sky-500/10 to-purple-500/20 blur-3xl opacity-70" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-4 py-2 mb-4">
              <div className="h-[6px] w-[6px] rounded-full bg-primary"></div>
              <p className="text-[13px] font-semibold uppercase leading-none tracking-[0.05em] text-sky-100">
                Our Foundation
              </p>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-normal leading-[1.2] tracking-[-0.02em] text-zinc-100 mb-4 drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)]">
              Our Mission & Vision
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-20 relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-950/80 via-zinc-900/80 to-primary/10 shadow-[0_18px_60px_rgba(0,0,0,0.8)] backdrop-blur-xl"
            >
              <h3 className='text-2xl font-semibold mb-4 text-zinc-100'>
                Our Mission
              </h3>
              <p className='text-zinc-300 leading-relaxed'>
                To empower businesses with strategic technology insights and actionable
                IT solutions that transform challenges into opportunities for
                sustainable growth. We are committed to delivering measurable results
                that drive operational excellence and digital transformation.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-950/80 via-zinc-900/80 to-sky-500/10 shadow-[0_18px_60px_rgba(0,0,0,0.8)] backdrop-blur-xl"
            >
              <h3 className='text-2xl font-semibold mb-4 text-zinc-100'>
                Our Vision
              </h3>
              <p className='text-zinc-300 leading-relaxed'>
                To be the most trusted technology consulting partner for businesses seeking
                to achieve operational excellence and digital transformation. We envision
                a future where every organization can leverage cutting-edge technology
                to reach their full potential.
              </p>
            </motion.div>
          </div>

          {/* Why Choose Us Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-20 relative z-10"
          >
            <h3 className='text-2xl md:text-3xl font-semibold mb-8 text-center text-zinc-100'>
              Why Choose Us
            </h3>
            <div className='grid md:grid-cols-3 gap-6'>
              <div className='p-6 rounded-xl border border-white/8 bg-zinc-950/70 hover:border-primary/50 hover:shadow-[0_0_40px_rgba(59,130,246,0.35)] transition-all backdrop-blur-xl'>
                <h4 className='font-semibold mb-3 text-zinc-100'>
                  Expert Team
                </h4>
                <p className='text-sm text-zinc-300 leading-relaxed'>
                  Our technology consultants bring decades of combined experience across
                  various industries and IT specializations, ensuring you get the best expertise.
                </p>
              </div>
              <div className='p-6 rounded-xl border border-white/8 bg-zinc-950/70 hover:border-primary/50 hover:shadow-[0_0_40px_rgba(59,130,246,0.35)] transition-all backdrop-blur-xl'>
                <h4 className='font-semibold mb-3 text-zinc-100'>
                  Proven Results
                </h4>
                <p className='text-sm text-zinc-300 leading-relaxed'>
                  We measure success by the tangible impact we deliver to our
                  clients' bottom line. Our track record speaks for itself.
                </p>
              </div>
              <div className='p-6 rounded-xl border border-white/8 bg-zinc-950/70 hover:border-primary/50 hover:shadow-[0_0_40px_rgba(59,130,246,0.35)] transition-all backdrop-blur-xl'>
                <h4 className='font-semibold mb-3 text-zinc-100'>
                  Custom Solutions
                </h4>
                <p className='text-sm text-zinc-300 leading-relaxed'>
                  Every business is unique, and we tailor our approach to meet
                  your specific needs and goals with precision and care.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-4 py-2 mb-4">
              <div className="h-[6px] w-[6px] rounded-full bg-primary"></div>
              <p className="text-[13px] font-semibold uppercase leading-none tracking-[0.05em] text-sky-100">
                Our Journey
              </p>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-normal leading-[1.2] tracking-[-0.02em] text-zinc-100 mb-4 drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)]">
              Our Journey & Milestones
            </h2>
            <p className="text-zinc-300 max-w-2xl mx-auto">
              A timeline of our growth, achievements, and commitment to innovation
            </p>
          </motion.div>

          <Timeline
            data={[
              {
                title: "2022",
                content: (
                  <div>
                    <p className="text-zinc-300 text-sm md:text-base font-normal mb-6 leading-relaxed">
                      Key milestones and achievements in our technology journey:
                    </p>
                    <div className="mb-6 space-y-3">
                      <div className="flex gap-3 items-center text-zinc-100 text-sm md:text-base">
                        <span className="text-[#E5B800] font-bold">✓</span>
                        <span>Launched digital transformation services</span>
                      </div>
                      <div className="flex gap-3 items-center text-zinc-100 text-sm md:text-base">
                        <span className="text-[#E5B800] font-bold">✓</span>
                        <span>Expanded mobile development capabilities</span>
                      </div>
                      <div className="flex gap-3 items-center text-zinc-100 text-sm md:text-base">
                        <span className="text-[#E5B800] font-bold">✓</span>
                        <span>Achieved ISO 27001 certification</span>
                      </div>
                      <div className="flex gap-3 items-center text-zinc-100 text-sm md:text-base">
                        <span className="text-[#E5B800] font-bold">✓</span>
                        <span>Opened new offices in key markets</span>
                      </div>
                      <div className="flex gap-3 items-center text-zinc-100 text-sm md:text-base">
                        <span className="text-[#E5B800] font-bold">✓</span>
                        <span>Reached 100+ successful client projects</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <Image
                        src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=500&fit=crop&q=80"
                        alt="Digital transformation"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-32 md:h-48 lg:h-64 w-full"
                      />
                      <Image
                        src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=500&fit=crop&q=80"
                        alt="Mobile development"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-32 md:h-48 lg:h-64 w-full"
                      />
                      <Image
                        src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=500&h=500&fit=crop&q=80"
                        alt="UI/UX design"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-32 md:h-48 lg:h-64 w-full"
                      />
                      <Image
                        src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=500&fit=crop&q=80"
                        alt="Cybersecurity"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-32 md:h-48 lg:h-64 w-full"
                      />
                    </div>
                  </div>
                ),
              },
              {
                title: "2023",
                content: (
                  <div>
                    <p className="text-zinc-300 text-sm md:text-base font-normal mb-4 leading-relaxed">
                      Launched comprehensive DevOps and cloud infrastructure services, enabling clients to achieve faster deployment cycles and improved scalability.
                    </p>
                    <p className="text-zinc-300 text-sm md:text-base font-normal mb-6 leading-relaxed">
                      Established strategic partnerships with leading cloud providers and expanded our team of certified engineers.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <Image
                        src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=500&fit=crop&q=80"
                        alt="DevOps services"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-32 md:h-48 lg:h-64 w-full"
                      />
                      <Image
                        src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=500&fit=crop&q=80"
                        alt="Cloud infrastructure"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-32 md:h-48 lg:h-64 w-full"
                      />
                      <Image
                        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=500&fit=crop&q=80"
                        alt="Software development"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-32 md:h-48 lg:h-64 w-full"
                      />
                      <Image
                        src="https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=500&h=500&fit=crop&q=80"
                        alt="Database management"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-32 md:h-48 lg:h-64 w-full"
                      />
                    </div>
                  </div>
                ),
              },
              {
                title: "2024",
                content: (
                  <div>
                    <p className="text-zinc-300 text-sm md:text-base font-normal mb-6 leading-relaxed">
                      Expanded our service offerings with cutting-edge AI and machine learning solutions, helping clients transform their businesses with intelligent automation.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <Image
                        src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&h=500&fit=crop&q=80"
                        alt="AI and ML services"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-32 md:h-48 lg:h-64 w-full"
                      />
                      <Image
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=500&fit=crop&q=80"
                        alt="Data analytics"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-32 md:h-48 lg:h-64 w-full"
                      />
                      <Image
                        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=500&fit=crop&q=80"
                        alt="Cloud migration"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-32 md:h-48 lg:h-64 w-full"
                      />
                      <Image
                        src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=500&fit=crop&q=80"
                        alt="Cybersecurity"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-32 md:h-48 lg:h-64 w-full"
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
