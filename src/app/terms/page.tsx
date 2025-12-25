"use client";

import { useEffect } from "react";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { motion } from "framer-motion";

export default function TermsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a1628] via-zinc-950 to-[#0a1628]">
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
                Terms & Conditions
              </h1>
              <p className="text-zinc-400 text-sm md:text-base">
                Last Updated: January 2025
              </p>
            </div>

            <div className="prose prose-invert prose-lg max-w-none space-y-8 text-zinc-300">
              <section>
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
                <p className="leading-relaxed">
                  By accessing and using the TechnoRealm website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these Terms & Conditions, please do not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">2. Use License</h2>
                <p className="leading-relaxed mb-4">
                  Permission is granted to temporarily access the materials on TechnoRealm's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>Attempt to reverse engineer any software contained on the website</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                  <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">3. Services</h2>
                <p className="leading-relaxed mb-4">
                  TechnoRealm provides IT consulting services including but not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Cloud infrastructure and migration services</li>
                  <li>AI and machine learning consulting</li>
                  <li>Cybersecurity and risk management</li>
                  <li>DevOps consulting</li>
                  <li>Application development</li>
                  <li>Data analytics and business intelligence</li>
                  <li>System integration</li>
                  <li>Digital transformation consulting</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  All services are subject to separate service agreements that will be provided prior to engagement.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">4. Intellectual Property</h2>
                <p className="leading-relaxed">
                  The materials on TechnoRealm's website, including but not limited to text, graphics, logos, images, and software, are the property of TechnoRealm and are protected by copyright, trademark, and other intellectual property laws. You may not use, reproduce, or distribute any content from this website without our prior written permission.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">5. User Accounts</h2>
                <p className="leading-relaxed mb-4">
                  If you create an account on our website, you are responsible for:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Maintaining the confidentiality of your account credentials</li>
                  <li>All activities that occur under your account</li>
                  <li>Notifying us immediately of any unauthorized use of your account</li>
                  <li>Providing accurate and complete information</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">6. Prohibited Uses</h2>
                <p className="leading-relaxed mb-4">
                  You agree not to use our website or services:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>In any way that violates any applicable law or regulation</li>
                  <li>To transmit, or procure the sending of, any advertising or promotional material without our prior written consent</li>
                  <li>To impersonate or attempt to impersonate TechnoRealm, a TechnoRealm employee, another user, or any other person or entity</li>
                  <li>In any way that infringes upon the rights of others</li>
                  <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the website</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">7. Disclaimer</h2>
                <p className="leading-relaxed mb-4">
                  The materials on TechnoRealm's website are provided on an 'as is' basis. TechnoRealm makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Implied warranties or conditions of merchantability</li>
                  <li>Fitness for a particular purpose</li>
                  <li>Non-infringement of intellectual property or other violation of rights</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  Further, TechnoRealm does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">8. Limitations of Liability</h2>
                <p className="leading-relaxed">
                  In no event shall TechnoRealm or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on TechnoRealm's website, even if TechnoRealm or a TechnoRealm authorized representative has been notified orally or in writing of the possibility of such damage.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">9. Accuracy of Materials</h2>
                <p className="leading-relaxed">
                  The materials appearing on TechnoRealm's website could include technical, typographical, or photographic errors. TechnoRealm does not warrant that any of the materials on its website are accurate, complete, or current. TechnoRealm may make changes to the materials contained on its website at any time without notice.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">10. Links</h2>
                <p className="leading-relaxed">
                  TechnoRealm has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by TechnoRealm of the site. Use of any such linked website is at the user's own risk.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">11. Modifications</h2>
                <p className="leading-relaxed">
                  TechnoRealm may revise these Terms & Conditions at any time without notice. By using this website, you are agreeing to be bound by the then current version of these Terms & Conditions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">12. Governing Law</h2>
                <p className="leading-relaxed">
                  These terms and conditions are governed by and construed in accordance with the laws of the Commonwealth of Massachusetts, United States, and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">13. Contact Information</h2>
                <p className="leading-relaxed mb-4">
                  If you have any questions about these Terms & Conditions, please contact us:
                </p>
                <div className="bg-zinc-900/50 rounded-lg p-6 space-y-2">
                  <p className="text-white font-semibold">TechnoRealm</p>
                  <p>420 TechnoRealm Avenue, Suite 300</p>
                  <p>Boston, MA 02116, USA</p>
                  <p>
                    <a href="mailto:legal@technorealm.com" className="text-[#14B8A6] hover:underline">
                      legal@technorealm.com
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

