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
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">1. Introduction</h2>
                <p className="leading-relaxed">
                  TechnoRealm ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">2. Information We Collect</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">2.1 Personal Information</h3>
                    <p className="leading-relaxed">
                      We may collect personal information that you voluntarily provide to us when you:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                      <li>Fill out contact forms or request information</li>
                      <li>Subscribe to our newsletter or communications</li>
                      <li>Engage with our services</li>
                      <li>Contact us via email or phone</li>
                    </ul>
                    <p className="leading-relaxed mt-4">
                      This information may include your name, email address, phone number, company name, job title, and any other information you choose to provide.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">2.2 Automatically Collected Information</h3>
                    <p className="leading-relaxed">
                      When you visit our website, we may automatically collect certain information about your device, including:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                      <li>IP address</li>
                      <li>Browser type and version</li>
                      <li>Operating system</li>
                      <li>Pages visited and time spent on pages</li>
                      <li>Referring website addresses</li>
                      <li>Date and time of access</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">3. How We Use Your Information</h2>
                <p className="leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Send you marketing communications (with your consent)</li>
                  <li>Analyze website usage and trends</li>
                  <li>Detect, prevent, and address technical issues</li>
                  <li>Comply with legal obligations</li>
                  <li>Protect our rights and prevent fraud</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">4. Information Sharing and Disclosure</h2>
                <p className="leading-relaxed mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Service Providers:</strong> We may share information with third-party service providers who perform services on our behalf</li>
                  <li><strong>Legal Requirements:</strong> We may disclose information if required by law or in response to valid legal requests</li>
                  <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred</li>
                  <li><strong>With Your Consent:</strong> We may share information with your explicit consent</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">5. Data Security</h2>
                <p className="leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">6. Your Rights</h2>
                <p className="leading-relaxed mb-4">
                  Depending on your location, you may have the following rights regarding your personal information:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Access and receive a copy of your personal data</li>
                  <li>Rectify inaccurate or incomplete data</li>
                  <li>Request deletion of your personal data</li>
                  <li>Object to processing of your personal data</li>
                  <li>Request restriction of processing</li>
                  <li>Data portability</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">7. Cookies and Tracking Technologies</h2>
                <p className="leading-relaxed">
                  We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">8. Third-Party Links</h2>
                <p className="leading-relaxed">
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">9. Children's Privacy</h2>
                <p className="leading-relaxed">
                  Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">10. Changes to This Privacy Policy</h2>
                <p className="leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">11. Contact Us</h2>
                <p className="leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:
                </p>
                <div className="bg-zinc-900/50 rounded-lg p-6 space-y-2">
                  <p className="text-white font-semibold">TechnoRealm</p>
                  <p>420 TechnoRealm Avenue, Suite 300</p>
                  <p>Boston, MA 02116, USA</p>
                  <p>
                    <a href="mailto:privacy@technorealm.com" className="text-[#14B8A6] hover:underline">
                      privacy@technorealm.com
                    </a>
                  </p>
                  <p>
                    <a href="tel:+15558676543" className="text-[#14B8A6] hover:underline">
                      +1 (555) 867-6543
                    </a>
                  </p>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

