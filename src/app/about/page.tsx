'use client';

import { useEffect } from 'react';
import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero';
import Image from 'next/image';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';

const AboutContent = () => {
  return (
    <div className='max-w-4xl mx-auto'>
      <h2 className='text-3xl font-bold mb-6 text-foreground'>
        About Stratwell Consulting
      </h2>
      <div className='space-y-6 text-lg text-muted-foreground'>
        <p>
          Stratwell Consulting is a leading business consulting firm dedicated
          to helping organizations streamline operations, optimize performance,
          and achieve measurable growth. With years of experience across
          multiple industries, we bring expertise and innovation to every
          project.
        </p>
        <p>
          Our team of seasoned consultants works closely with clients to
          understand their unique challenges and develop tailored solutions
          that drive real results. We combine strategic thinking with practical
          execution to deliver value at every stage of your business journey.
        </p>
        <div className='grid md:grid-cols-2 gap-8 mt-12'>
          <div>
            <h3 className='text-2xl font-semibold mb-4 text-foreground'>
              Our Mission
            </h3>
            <p className='text-muted-foreground'>
              To empower businesses with strategic insights and actionable
              solutions that transform challenges into opportunities for
              sustainable growth.
            </p>
          </div>
          <div>
            <h3 className='text-2xl font-semibold mb-4 text-foreground'>
              Our Vision
            </h3>
            <p className='text-muted-foreground'>
              To be the most trusted consulting partner for businesses seeking
              to achieve operational excellence and strategic transformation.
            </p>
          </div>
        </div>
        <div className='mt-12'>
          <h3 className='text-2xl font-semibold mb-6 text-foreground'>
            Why Choose Us
          </h3>
          <div className='grid md:grid-cols-3 gap-6'>
            <div className='p-6 rounded-lg bg-card border border-border'>
              <h4 className='font-semibold mb-2 text-foreground'>
                Expert Team
              </h4>
              <p className='text-sm text-muted-foreground'>
                Our consultants bring decades of combined experience across
                various industries and specializations.
              </p>
            </div>
            <div className='p-6 rounded-lg bg-card border border-border'>
              <h4 className='font-semibold mb-2 text-foreground'>
                Proven Results
              </h4>
              <p className='text-sm text-muted-foreground'>
                We measure success by the tangible impact we deliver to our
                clients' bottom line.
              </p>
            </div>
            <div className='p-6 rounded-lg bg-card border border-border'>
              <h4 className='font-semibold mb-2 text-foreground'>
                Custom Solutions
              </h4>
              <p className='text-sm text-muted-foreground'>
                Every business is unique, and we tailor our approach to meet
                your specific needs and goals.
              </p>
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
    <main className='min-h-screen bg-background'>
      <Header />
      <div className='min-h-screen'>
        <ScrollExpandMedia
          mediaType='image'
          mediaSrc='https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1280&h=720&fit=crop&q=80'
          bgImageSrc='https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop&q=80'
          title='About Stratwell'
          date='Our Story'
          scrollToExpand='Scroll to Learn More'
          textBlend={false}
        >
          <AboutContent />
        </ScrollExpandMedia>
      </div>
      <Footer />
    </main>
  );
}

