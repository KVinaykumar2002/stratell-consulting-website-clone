import { Head } from '@/lib/use-head';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';

const siteUrl = import.meta.env.VITE_SITE_URL || 'https://technorealm.com';
const paypalEnrollUrl = 'https://www.paypal.com/ncp/payment/9Q4ZTDC2J8D74';

const trainingPrograms = [
  {
    name: 'Data Engineer',
    duration: '12 weeks',
    level: 'Intermediate',
    focus: 'Data pipelines, ETL orchestration, cloud data platforms, and data warehousing.',
    outcomes: ['Build scalable ETL pipelines', 'Model lakehouse and warehouse data', 'Ship production-ready data workflows'],
  },
  {
    name: 'Gen AI',
    duration: '10 weeks',
    level: 'Intermediate',
    focus: 'Prompt engineering, RAG systems, LLM application design, and deployment practices.',
    outcomes: ['Design practical Gen AI use cases', 'Implement RAG and vector search', 'Deploy AI assistants responsibly'],
  },
  {
    name: 'Business Intelligence',
    duration: '8 weeks',
    level: 'Beginner to Intermediate',
    focus: 'KPI design, dashboard strategy, stakeholder storytelling, and BI governance.',
    outcomes: ['Define measurable business KPIs', 'Build executive-ready dashboards', 'Drive decisions with clear narratives'],
  },
  {
    name: 'Power BI',
    duration: '6 weeks',
    level: 'Beginner to Intermediate',
    focus: 'DAX, Power Query, data modeling, and interactive reporting for business teams.',
    outcomes: ['Create robust semantic models', 'Write practical DAX measures', 'Publish high-impact Power BI reports'],
  },
  {
    name: 'Data Analyst',
    duration: '8 weeks',
    level: 'Beginner',
    focus: 'SQL fundamentals, data cleaning, exploratory analysis, and business reporting.',
    outcomes: ['Analyze business data confidently', 'Use SQL for real-world analysis', 'Present insights to stakeholders'],
  },
];

export default function TrainingPage() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const isPaymentSuccess = query.get('success') === 'true';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Head
        title="Training Programs | technorealmtr.com"
        description="Enroll in TechnoRealm training programs including Data Engineer, Gen AI, Business Intelligence, Power BI, and Data Analyst."
        keywords="training programs, data engineer training, gen ai training, business intelligence course, power bi course, data analyst course"
        canonical={`${siteUrl}/training`}
        ogTitle="Training Programs | technorealmtr.com"
        ogDescription="Enroll in our practical training tracks for data and AI careers."
        ogUrl={`${siteUrl}/training`}
        ogImage={`${siteUrl}/og-image.png`}
        twitterTitle="Training Programs | technorealmtr.com"
        twitterDescription="Enroll in Data Engineer, Gen AI, BI, Power BI, and Data Analyst programs."
        twitterImage={`${siteUrl}/og-image.png`}
      />

      <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
        <Header />

        <section className="px-6 pt-36 pb-12">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#1E3A5F]">
                Training Programs
              </h1>
              <p className="mt-3 text-gray-700 max-w-2xl mx-auto">
                Industry-aligned programs designed from current hiring trends and real project requirements.
                Choose your track and click Enroll Now to continue payment on PayPal.
              </p>
            </div>

            {isPaymentSuccess && (
              <div className="mb-8 rounded-xl border border-emerald-200 bg-emerald-50 px-5 py-4 text-emerald-900">
                Payment successful. We will contact you shortly. Thank you.
              </div>
            )}

            <div className="mb-10 grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-gray-200 bg-white p-4">
                <p className="text-sm font-semibold text-[#1E3A5F]">Market-Aligned Curriculum</p>
                <p className="mt-1 text-sm text-gray-600">Topics selected around current data, BI, and AI job expectations.</p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-4">
                <p className="text-sm font-semibold text-[#1E3A5F]">Hands-On Projects</p>
                <p className="mt-1 text-sm text-gray-600">Case-study based learning with practical assignments and mentor feedback.</p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-4">
                <p className="text-sm font-semibold text-[#1E3A5F]">Career Support</p>
                <p className="mt-1 text-sm text-gray-600">Resume pointers, portfolio guidance, and interview preparation support.</p>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {trainingPrograms.map((program) => (
                <article
                  key={program.name}
                  className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md"
                >
                  <h2 className="text-xl font-semibold text-[#1E3A5F]">{program.name}</h2>
                  <p className="mt-2 text-xs font-medium uppercase tracking-wide text-[#14B8A6]">
                    {program.duration} • {program.level}
                  </p>
                  <p className="mt-2 text-sm text-gray-600">
                    {program.focus}
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-700">
                    {program.outcomes.map((outcome) => (
                      <li key={outcome}>- {outcome}</li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    onClick={() => {
                      window.location.href = paypalEnrollUrl;
                    }}
                    className="mt-5 inline-flex w-full items-center justify-center rounded-lg bg-[#14B8A6] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#0D9488]"
                  >
                    Enroll Now
                  </button>
                </article>
              ))}
            </div>

            <p className="mt-8 text-sm text-gray-600">
              Research note: Our syllabus design emphasizes job-ready, project-based learning paths used in modern data teams.
            </p>
            <p className="mt-3 text-sm text-gray-600">
              After successful payment, we will contact you shortly. Thank you.
            </p>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
