"use client";

const services = [
  {
    title: "IT Infrastructure & Cloud Setup",
    description:
      "TechnoRealm designs and deploys secure, scalable IT infrastructure tailored to your business. From cloud architecture to workload migration, we build a reliable foundation that keeps your operations fast, stable, and ready to grow.",
    image: "/services/Atlassian-implementation.png",
    imageAlt: "IT infrastructure and cloud setup illustration",
  },
  {
    title: "Managed IT Support & Maintenance",
    description:
      "Our experts provide proactive monitoring, issue resolution, patching, and performance optimization across your systems. TechnoRealm ensures your teams stay productive with dependable, ongoing support and minimal downtime.",
    image: "/services/atlassian-support.png",
    imageAlt: "Managed IT support and maintenance illustration",
  },
  {
    title: "Application Modernization Services",
    description:
      "Modernize legacy platforms with cloud-native architecture, API integration, and performance-focused engineering. We help you transform critical applications into flexible systems that support speed, security, and long-term innovation.",
    image: "/services/why-testtriangle.png",
    imageAlt: "Application modernization services illustration",
  },
  {
    title: "Technology Consulting & Cost Optimization",
    description:
      "TechnoRealm aligns your technology roadmap with business goals through strategic consulting and solution planning. We identify high-impact improvements, optimize platform spend, and deliver better ROI from your IT investments.",
    image: "/services/atlassian-License.png",
    imageAlt: "Technology consulting and cost optimization illustration",
  },
];

export default function HomeServicesShowcase() {
  return (
    <section className="bg-gradient-to-b from-white via-gray-50 to-white py-10 md:py-12 lg:py-14">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-8 md:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#1E3A5F]">
            Our <span className="text-[#14B8A6]">Services</span>
          </h2>
        </header>

        <div className="space-y-6 md:space-y-8">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;

            return (
              <article
                key={service.title}
                className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6 items-center"
              >
                <div className={isEven ? "md:order-1 md:col-span-3" : "md:order-2 md:col-span-3"}>
                  <h3 className="text-xl md:text-2xl font-semibold text-[#1E3A5F] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[#475569] leading-7 text-sm md:text-base max-w-4xl">
                    {service.description}
                  </p>
                </div>

                <div className={isEven ? "md:order-2 md:col-span-2" : "md:order-1 md:col-span-2"}>
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    loading="lazy"
                    className="w-full max-w-[300px] md:max-w-[320px] mx-auto h-auto object-contain"
                  />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
