"use client";

import { useEffect } from "react";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { motion } from "framer-motion";

export default function PrivacyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      <Header />
      
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="text-center mb-12">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.2] tracking-[-0.02em] text-white mb-4">
                Privacy Policy
              </h1>
              <p className="text-zinc-400 text-sm md:text-base">
                Last Updated: January 2025
              </p>
            </div>

            <div className="prose prose-invert prose-lg max-w-none space-y-8 text-zinc-300">
              <section>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-8">1. Introduction</h2>
                <p className="leading-relaxed">
                  Welcome to Technorealm ("we," "our," or "us"). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website technorealmtr.com (the "Website") or use our services.
                </p>
                <p className="leading-relaxed mt-4">
                  Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the Website or use our services.
                </p>
              </section>

              <section>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-8">2. Information We Collect</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">2.1 Personal Information</h3>
                    <p className="leading-relaxed">
                      We may collect personal information that you voluntarily provide to us when you:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                      <li>Register for an account</li>
                      <li>Sign up for our newsletter</li>
                      <li>Complete forms on our Website</li>
                      <li>Participate in surveys or contests</li>
                      <li>Contact us through our support channels</li>
                    </ul>
                    <p className="leading-relaxed mt-4">
                      This information may include:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                      <li>Name</li>
                      <li>Email address</li>
                      <li>Phone number</li>
                      <li>Postal address</li>
                      <li>Payment information</li>
                      <li>Any other information you choose to provide</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">2.2 Automatically Collected Information</h3>
                    <p className="leading-relaxed">
                      When you visit our Website, we may automatically collect certain information about your device and usage, including:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                      <li>IP address</li>
                      <li>Browser type and version</li>
                      <li>Operating system</li>
                      <li>Device information</li>
                      <li>Pages visited and time spent</li>
                      <li>Referring websites</li>
                      <li>Click patterns and interactions with our Website</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">2.3 Cookies and Similar Technologies</h3>
                    <p className="leading-relaxed">
                      We use cookies, web beacons, pixels, and similar tracking technologies to collect information about your browsing activities and to distinguish you from other users of our Website. For more information about our use of cookies, please see our Cookie Policy.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-8">3. How We Use Your Information</h2>
                <p className="leading-relaxed mb-4">
                  We may use the information we collect for various purposes, including to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send administrative information, such as updates, security alerts, and support messages</li>
                  <li>Respond to your comments, questions, and requests</li>
                  <li>Personalize your experience on our Website</li>
                  <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
                  <li>Detect, prevent, and address technical issues</li>
                  <li>Carry out any other purpose for which the information was collected</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-8">4. How We Share Your Information</h2>
                <p className="leading-relaxed mb-4">
                  We may share your information in the following situations:
                </p>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">4.1 Third-Party Service Providers</h3>
                    <p className="leading-relaxed">
                      We may share your information with third-party vendors, service providers, contractors, or agents who perform services for us or on our behalf.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">4.2 Business Transfers</h3>
                    <p className="leading-relaxed">
                      If we are involved in a merger, acquisition, financing, or sale of all or a portion of our assets, your information may be transferred to the acquiring entity as part of that transaction.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">4.3 Legal Requirements</h3>
                    <p className="leading-relaxed">
                      We may disclose your information if required to do so by law or in response to valid requests by public authorities.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">4.4 With Your Consent</h3>
                    <p className="leading-relaxed">
                      We may share your information with your consent or as otherwise disclosed at the time of collection.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-8">5. Data Security</h2>
                <p className="leading-relaxed">
                  We have implemented appropriate technical and organizational measures to protect the security of your personal information. However, please be aware that no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-8">6. Data Retention</h2>
                <p className="leading-relaxed">
                  We will retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
                </p>
              </section>

              <section>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-8">7. Your Rights</h2>
                <p className="leading-relaxed mb-4">
                  Depending on your location, you may have certain rights regarding your personal information, including:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Right to access your personal information</li>
                  <li>Right to correct inaccurate or incomplete information</li>
                  <li>Right to request deletion of your personal information</li>
                  <li>Right to restrict or object to the processing of your personal information</li>
                  <li>Right to data portability</li>
                  <li>Right to withdraw consent</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
                </p>
              </section>

              <section>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-8">8. Children's Privacy</h2>
                <p className="leading-relaxed">
                  Our services are not intended for individuals under the age of 16. We do not knowingly collect personal information from children under 16. If we learn we have collected or received personal information from a child under 16 without verification of parental consent, we will delete that information.
                </p>
              </section>

              <section>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-8">9. Third-Party Links</h2>
                <p className="leading-relaxed">
                  Our Website may contain links to third-party websites or services. We are not responsible for the content or privacy practices of these third-party sites. We encourage you to review the privacy policies of any third-party sites you visit.
                </p>
              </section>

              <section>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-8">10. Updates to This Privacy Policy</h2>
                <p className="leading-relaxed">
                  We may update this Privacy Policy from time to time. The updated version will be indicated by the "Last Updated" date at the top of this policy. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.
                </p>
              </section>

              <section>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-8">11. Your California Privacy Rights</h2>
                <p className="leading-relaxed">
                  If you are a California resident, you may have additional rights under the California Consumer Privacy Act (CCPA) regarding your personal information. Please see our California Privacy Notice for more information.
                </p>
              </section>

              <section>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-8">12. International Data Transfers</h2>
                <p className="leading-relaxed">
                  Your information may be transferred to, and processed in, countries other than the country in which you are resident. These countries may have data protection laws that differ from those of your country. We have taken appropriate safeguards to ensure that your personal information remains protected in accordance with this Privacy Policy.
                </p>
              </section>

              <section>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-8">13. Do Not Track Signals</h2>
                <p className="leading-relaxed">
                  Some browsers feature a "Do Not Track" setting that signals websites not to track user activity. We currently do not respond to Do Not Track signals.
                </p>
              </section>

              <section>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-8">14. Contact Us</h2>
                <p className="leading-relaxed mb-4">
                  If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
                </p>
                <div className="bg-zinc-900/50 rounded-lg p-6 space-y-2">
                  <p className="text-white font-semibold">TechnoRealm</p>
                  <p>445 Dexter Avenue, Suite 4050</p>
                  <p>Montgomery, AL 36104, USA</p>
                  <p>
                    <a href="mailto:hr@technorealmtr.com" className="text-[#14B8A6] hover:underline">
                      hr@technorealmtr.com
                    </a>
                  </p>
                  <p>
                    <a href="tel:+12149406126" className="text-[#14B8A6] hover:underline">
                      +1 (214) 940-6126
                    </a>
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-8">15. Changes to Our Privacy Policy</h2>
                <p className="leading-relaxed">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this policy. You are advised to review this Privacy Policy periodically for any changes.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

