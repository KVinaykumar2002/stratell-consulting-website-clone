import React from 'react';

const TrustedBy = () => {
  return (
    <section className="bg-background py-16 md:py-20 lg:py-[120px]">
      <div className="container">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-x-2 rounded-full bg-accent px-4 py-2">
            <div className="h-[6px] w-[6px] rounded-full bg-primary" />
            <p className="text-label-badge text-accent-foreground">WE WORK WITH</p>
          </div>
          <h2 className="mt-4 font-display text-4xl font-normal text-foreground md:text-5xl lg:text-[56px] lg:leading-[1.2] lg:tracking-[-0.01em]">
            Trusted By
          </h2>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-2 items-center justify-items-center gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-5">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="flex h-12 w-full items-center justify-center">
              <span className="font-sans text-lg font-bold tracking-widest text-muted-foreground opacity-60 transition-opacity duration-300 hover:opacity-100">
                CLIENT
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;