import type { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import { ChevronLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Use — Intelliware Global',
  description: 'Terms of Use for Intelliware Global website and services.',
  alternates: {
    canonical: 'https://www.intelliwareglobal.com/terms-of-use',
  },
};

export default function TermsOfUsePage() {
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
            Terms of Use
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-500">
            Please read these terms carefully before using our website and
            services.
          </p>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <div className="max-w-3xl mx-auto prose prose-lg max-w-none">
            <div className="space-y-8 text-slate-700">
              <div>
                <h2 className="text-2xl font-heading font-semibold text-slate-900 mb-4">
                  1. Acceptance of Terms
                </h2>
                <p>
                  By accessing and using this website, you accept and agree to be
                  bound by the terms and provision of this agreement. If you do
                  not agree to abide by the above, please do not use this service.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-semibold text-slate-900 mb-4">
                  2. Use License
                </h2>
                <p>
                  Permission is granted to temporarily download one copy of the
                  materials on Intelliware Global's website for personal,
                  non-commercial transitory viewing only. This is the grant of a
                  license, not a transfer of title, and under this license you may
                  not:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-3">
                  <li>Modify or copy the materials</li>
                  <li>
                    Use the materials for any commercial purpose or for any public
                    display
                  </li>
                  <li>
                    Attempt to reverse engineer, decompile, or disassemble any
                    software on the website
                  </li>
                  <li>
                    Remove any copyright or other proprietary notations from the
                    materials
                  </li>
                  <li>
                    Transmit the materials to anyone else or "mirror" the
                    materials on any other server
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-semibold text-slate-900 mb-4">
                  3. Disclaimer of Warranties
                </h2>
                <p>
                  The materials on Intelliware Global's website are provided on an
                  'as-is' basis. Intelliware Global makes no warranties, expressed
                  or implied, and hereby disclaims and negates all other warranties
                  including, without limitation, implied warranties or conditions
                  of merchantability, fitness for a particular purpose, or
                  non-infringement of intellectual property or other violation of
                  rights.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-semibold text-slate-900 mb-4">
                  4. Limitations of Liability
                </h2>
                <p>
                  In no event shall Intelliware Global or its suppliers be liable
                  for any damages (including, without limitation, damages for loss
                  of data or profit, or due to business interruption) arising out
                  of the use or inability to use the materials on Intelliware
                  Global's website, even if Intelliware Global or an authorized
                  representative has been notified orally or in writing of the
                  possibility of such damage.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-semibold text-slate-900 mb-4">
                  5. Accuracy of Materials
                </h2>
                <p>
                  The materials appearing on Intelliware Global's website could
                  include technical, typographical, or photographic errors.
                  Intelliware Global does not warrant that any of the materials on
                  our website are accurate, complete, or current. Intelliware
                  Global may make changes to the materials contained on its website
                  at any time without notice.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-semibold text-slate-900 mb-4">
                  6. Links
                </h2>
                <p>
                  Intelliware Global has not reviewed all of the sites linked to
                  our website and is not responsible for the contents of any such
                  linked site. The inclusion of any link does not imply endorsement
                  by Intelliware Global of the site. Use of any such linked website
                  is at the user's own risk.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-semibold text-slate-900 mb-4">
                  7. Modifications
                </h2>
                <p>
                  Intelliware Global may revise these terms of use for our website
                  at any time without notice. By using this website, you are
                  agreeing to be bound by the then current version of these terms
                  of use.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-semibold text-slate-900 mb-4">
                  8. Governing Law
                </h2>
                <p>
                  These terms and conditions are governed by and construed in
                  accordance with the laws of the jurisdiction in which the Company
                  operates, and you irrevocably submit to the exclusive jurisdiction
                  of the courts in that location.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-semibold text-slate-900 mb-4">
                  9. Contact Information
                </h2>
                <p>
                  If you have any questions about these Terms of Use, please contact
                  us at{' '}
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
