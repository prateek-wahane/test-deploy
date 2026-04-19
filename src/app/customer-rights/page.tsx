import type { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import { ChevronLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Customer Rights and Responsibility — Intelliware Global',
  description:
    'Information about customer rights and responsibilities at Intelliware Global.',
  alternates: {
    canonical: 'https://www.intelliwareglobal.com/customer-rights',
  },
};

export default function CustomerRightsPage() {
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
            Customer Rights and Responsibility
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-500">
            Understanding your rights and responsibilities when working with
            Intelliware Global.
          </p>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <div className="max-w-3xl mx-auto prose prose-lg max-w-none">
            <div className="space-y-8 text-slate-700">
              <div>
                <h2 className="text-2xl font-heading font-semibold text-slate-900 mb-4">
                  Customer Rights
                </h2>

                <div className="mt-4 space-y-4">
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-slate-900 mb-2">
                      1. Right to Quality Service
                    </h3>
                    <p>
                      You have the right to receive professional, high-quality
                      services that meet industry standards and match the terms
                      agreed upon in your service agreement.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-heading font-semibold text-slate-900 mb-2">
                      2. Right to Clear Communication
                    </h3>
                    <p>
                      We commit to clear, timely, and transparent communication
                      regarding your services, projects, timelines, and any issues
                      that may arise.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-heading font-semibold text-slate-900 mb-2">
                      3. Right to Data Protection
                    </h3>
                    <p>
                      Your data and confidential information will be protected
                      according to applicable data protection laws and our privacy
                      policies. We maintain strict security measures to safeguard
                      your information.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-heading font-semibold text-slate-900 mb-2">
                      4. Right to Dispute Resolution
                    </h3>
                    <p>
                      If you have concerns about our services, you have the right to
                      raise disputes through our formal complaint and resolution
                      process.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-heading font-semibold text-slate-900 mb-2">
                      5. Right to Fair Pricing
                    </h3>
                    <p>
                      You have the right to clear, transparent pricing information
                      and any agreed-upon pricing terms will be honored throughout
                      your engagement.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-heading font-semibold text-slate-900 mb-2">
                      6. Right to Professional Expertise
                    </h3>
                    <p>
                      You are entitled to work with qualified, experienced
                      professionals who understand your industry and business
                      objectives.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-semibold text-slate-900 mb-4">
                  Customer Responsibilities
                </h2>

                <div className="mt-4 space-y-4">
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-slate-900 mb-2">
                      1. Provide Accurate Information
                    </h3>
                    <p>
                      You are responsible for providing accurate, complete, and
                      timely information necessary for us to deliver services
                      effectively.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-heading font-semibold text-slate-900 mb-2">
                      2. Timely Feedback and Approval
                    </h3>
                    <p>
                      You commit to providing timely feedback, approvals, and
                      decisions to prevent project delays and ensure successful
                      delivery.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-heading font-semibold text-slate-900 mb-2">
                      3. Comply with Terms and Conditions
                    </h3>
                    <p>
                      You agree to comply with all terms, conditions, and policies
                      outlined in your service agreement and our website terms of
                      use.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-heading font-semibold text-slate-900 mb-2">
                      4. Protect Confidential Information
                    </h3>
                    <p>
                      You are responsible for protecting any confidential or
                      proprietary information shared with us and using it solely for
                      the purposes of our engagement.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-heading font-semibold text-slate-900 mb-2">
                      5. Maintain Payment Obligations
                    </h3>
                    <p>
                      You commit to meeting all financial obligations as outlined in
                      your service agreement, including timely payment for services
                      rendered.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-heading font-semibold text-slate-900 mb-2">
                      6. Report Issues Promptly
                    </h3>
                    <p>
                      You are responsible for promptly reporting any issues, concerns,
                      or problems with our services so we can address them quickly.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-heading font-semibold text-slate-900 mb-2">
                      7. Respect Intellectual Property
                    </h3>
                    <p>
                      You agree to respect all intellectual property rights,
                      including copyrights, trademarks, and patents owned by
                      Intelliware Global and third parties.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-semibold text-slate-900 mb-4">
                  Our Commitment to You
                </h2>
                <p>
                  At Intelliware Global, we are committed to maintaining a
                  professional, respectful, and productive relationship with all our
                  clients. We strive to deliver exceptional value and ensure your
                  satisfaction with our services. When both parties honor their
                  rights and responsibilities, we create the foundation for a
                  successful partnership.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-semibold text-slate-900 mb-4">
                  Questions or Concerns?
                </h2>
                <p>
                  If you have any questions about customer rights and
                  responsibilities, or if you need to report a concern, please
                  contact us at{' '}
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
