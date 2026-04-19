import type { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import { ChevronLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Disclaimer — Intelliware Global',
  description: 'Disclaimer for Intelliware Global website and services.',
  alternates: {
    canonical: 'https://www.intelliwareglobal.com/disclaimer',
  },
};

export default function DisclaimerPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28 bg-slate-50">
        <Container className="relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8 font-semibold"
          >
            <ChevronLeft size={18} />
            Back to Home
          </Link>

          <h1 className="text-4xl font-heading font-semibold tracking-heading sm:text-5xl lg:text-6xl text-slate-900">
            Disclaimer
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-500">
            Important information regarding the use of our website and services.
          </p>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <div className="max-w-3xl mx-auto prose prose-lg max-w-none">
            <div className="space-y-8 text-slate-700">
              <div>
                <h2 className="text-2xl font-heading font-semibold text-slate-900 mb-4">
                  1. General Information
                </h2>
                <p>
                  This website and all content provided by Intelliware Global
                  ('Company', 'we', 'our', or 'us') are provided on an 'as-is'
                  basis. We make no warranties, expressed or implied, regarding
                  the website, its content, or any products or services offered
                  through it.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-semibold text-slate-900 mb-4">
                  2. No Professional Advice
                </h2>
                <p>
                  The information provided on this website is for general
                  informational purposes only and should not be construed as
                  professional advice. We do not provide legal, financial,
                  medical, or other professional advice. Consult with qualified
                  professionals for specific advice related to your situation.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-semibold text-slate-900 mb-4">
                  3. Limitation of Liability
                </h2>
                <p>
                  To the fullest extent permitted by law, Intelliware Global
                  shall not be liable for any direct, indirect, incidental,
                  special, consequential, or punitive damages arising from your
                  use of or inability to use the website, services, or content.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-semibold text-slate-900 mb-4">
                  4. Third-Party Links
                </h2>
                <p>
                  Our website may contain links to third-party websites. We are
                  not responsible for the content, accuracy, or practices of
                  these external sites. Your use of third-party websites is
                  subject to their terms and policies.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-semibold text-slate-900 mb-4">
                  5. Changes to Content
                </h2>
                <p>
                  We reserve the right to modify, update, or remove any content
                  on our website without notice. Information may change, and we
                  do not guarantee that content is current or complete.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-semibold text-slate-900 mb-4">
                  6. Accuracy of Information
                </h2>
                <p>
                  While we strive to provide accurate information, we do not
                  warrant the accuracy, completeness, or timeliness of any
                  information on this website. You rely on this information at
                  your own risk.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-semibold text-slate-900 mb-4">
                  7. Use of Website
                </h2>
                <p>
                  You agree not to use this website for any unlawful purposes
                  or in any way that could damage, disable, or impair our
                  services. This includes but is not limited to attempting to
                  gain unauthorized access, transmitting malware, or engaging in
                  harassment.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-semibold text-slate-900 mb-4">
                  8. Contact Information
                </h2>
                <p>
                  If you have questions about this disclaimer, please contact us
                  at{' '}
                  <a
                    href="mailto:info@intelliwareglobal.com"
                    className="text-accent hover:text-accent/80"
                  >
                    info@intelliwareglobal.com
                  </a>
                </p>
              </div>

              <div className="mt-12 pt-8 border-t border-slate-200 text-sm text-slate-500">
                <p>Last updated: April 19, 2024</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
