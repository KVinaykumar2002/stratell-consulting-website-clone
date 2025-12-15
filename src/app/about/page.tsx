'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero';
import Image from 'next/image';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import { Timeline } from '@/components/ui/timeline';

const AboutContent = () => {
  return (
    <div className='max-w-4xl mx-auto'>
      <h2 className='text-3xl font-bold mb-6 text-foreground'>
        About TechnoRealm
      </h2>
      <div className='space-y-6 text-lg text-muted-foreground'>
        <p>
          TechnoRealm is a leading technology consulting firm dedicated
          to helping organizations streamline operations, optimize performance,
          and achieve measurable growth through innovative IT solutions. With years of experience across
          multiple industries, we bring technical expertise and innovation to every
          project.
        </p>
        <p>
          Our team of seasoned technology consultants works closely with clients to
          understand their unique challenges and develop tailored IT solutions
          that drive real results. We combine strategic thinking with practical
          technical execution to deliver value at every stage of your digital transformation journey.
        </p>
      </div>
    </div>
  );
};

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className='min-h-screen bg-background'>
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
      <section className="py-20 px-6 bg-muted/30">
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
              <p className="text-[13px] font-semibold uppercase leading-none tracking-[0.05em] text-primary">
                Our Foundation
              </p>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-normal leading-[1.2] tracking-[-0.02em] text-foreground mb-4">
              Our Mission & Vision
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-8 rounded-2xl bg-card border border-border shadow-sm"
            >
              <h3 className='text-2xl font-semibold mb-4 text-foreground'>
                Our Mission
              </h3>
              <p className='text-muted-foreground leading-relaxed'>
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
              className="p-8 rounded-2xl bg-card border border-border shadow-sm"
            >
              <h3 className='text-2xl font-semibold mb-4 text-foreground'>
                Our Vision
              </h3>
              <p className='text-muted-foreground leading-relaxed'>
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
            className="mb-20"
          >
            <h3 className='text-2xl md:text-3xl font-semibold mb-8 text-center text-foreground'>
              Why Choose Us
            </h3>
            <div className='grid md:grid-cols-3 gap-6'>
              <div className='p-6 rounded-xl bg-card border border-border hover:shadow-md transition-shadow'>
                <h4 className='font-semibold mb-3 text-foreground'>
                  Expert Team
                </h4>
                <p className='text-sm text-muted-foreground leading-relaxed'>
                  Our technology consultants bring decades of combined experience across
                  various industries and IT specializations, ensuring you get the best expertise.
                </p>
              </div>
              <div className='p-6 rounded-xl bg-card border border-border hover:shadow-md transition-shadow'>
                <h4 className='font-semibold mb-3 text-foreground'>
                  Proven Results
                </h4>
                <p className='text-sm text-muted-foreground leading-relaxed'>
                  We measure success by the tangible impact we deliver to our
                  clients' bottom line. Our track record speaks for itself.
                </p>
              </div>
              <div className='p-6 rounded-xl bg-card border border-border hover:shadow-md transition-shadow'>
                <h4 className='font-semibold mb-3 text-foreground'>
                  Custom Solutions
                </h4>
                <p className='text-sm text-muted-foreground leading-relaxed'>
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
              <p className="text-[13px] font-semibold uppercase leading-none tracking-[0.05em] text-primary">
                Our Journey
              </p>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-normal leading-[1.2] tracking-[-0.02em] text-foreground mb-4">
              Our Journey & Milestones
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A timeline of our growth, achievements, and commitment to innovation
            </p>
          </motion.div>

          <Timeline
            data={[
              {
                title: "2024",
                content: (
                  <div>
                    <p className="text-foreground text-sm md:text-base font-normal mb-6 leading-relaxed">
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
              {
                title: "2023",
                content: (
                  <div>
                    <p className="text-foreground text-sm md:text-base font-normal mb-4 leading-relaxed">
                      Launched comprehensive DevOps and cloud infrastructure services, enabling clients to achieve faster deployment cycles and improved scalability.
                    </p>
                    <p className="text-foreground text-sm md:text-base font-normal mb-6 leading-relaxed">
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
                title: "2022",
                content: (
                  <div>
                    <p className="text-foreground text-sm md:text-base font-normal mb-6 leading-relaxed">
                      Key milestones and achievements in our technology journey:
                    </p>
                    <div className="mb-6 space-y-3">
                      <div className="flex gap-3 items-center text-foreground text-sm md:text-base">
                        <span className="text-primary font-bold">✓</span>
                        <span>Launched digital transformation services</span>
                      </div>
                      <div className="flex gap-3 items-center text-foreground text-sm md:text-base">
                        <span className="text-primary font-bold">✓</span>
                        <span>Expanded mobile development capabilities</span>
                      </div>
                      <div className="flex gap-3 items-center text-foreground text-sm md:text-base">
                        <span className="text-primary font-bold">✓</span>
                        <span>Achieved ISO 27001 certification</span>
                      </div>
                      <div className="flex gap-3 items-center text-foreground text-sm md:text-base">
                        <span className="text-primary font-bold">✓</span>
                        <span>Opened new offices in key markets</span>
                      </div>
                      <div className="flex gap-3 items-center text-foreground text-sm md:text-base">
                        <span className="text-primary font-bold">✓</span>
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
            ]}
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
