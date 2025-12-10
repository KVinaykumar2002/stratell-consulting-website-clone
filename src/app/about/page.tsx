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
        <div className='grid md:grid-cols-2 gap-8 mt-12'>
          <div>
            <h3 className='text-2xl font-semibold mb-4 text-foreground'>
              Our Mission
            </h3>
            <p className='text-muted-foreground'>
              To empower businesses with strategic technology insights and actionable
              IT solutions that transform challenges into opportunities for
              sustainable growth.
            </p>
          </div>
          <div>
            <h3 className='text-2xl font-semibold mb-4 text-foreground'>
              Our Vision
            </h3>
            <p className='text-muted-foreground'>
              To be the most trusted technology consulting partner for businesses seeking
              to achieve operational excellence and digital transformation.
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
                Our technology consultants bring decades of combined experience across
                various industries and IT specializations.
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
      <Footer />
    </main>
  );
}

