import type { Metadata } from 'next';
import { Outfit, IBM_Plex_Sans } from 'next/font/google';
import './globals.css';
import { DirectionProvider } from '@/context/DirectionContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import JsonLd, { organizationSchema, websiteSchema } from '@/components/seo/JsonLd';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const ibmPlex = IBM_Plex_Sans({
  subsets: ['latin'],
  variable: '--font-ibm',
  display: 'swap',
  weight: ['400', '500', '600'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.intelliwareglobal.com'),
  title: {
    default: 'Intelliware Global — Enterprise Technology Consulting & IT Services',
    template: '%s | Intelliware Global',
  },
  description:
    'Intelliware Global Consulting and Services LLP delivers enterprise-grade technology solutions across Cloud, AI, Cybersecurity, Data & Analytics, and Digital Transformation for enterprises in EMEA markets. Offices in London, Dubai, Bangalore, Pune, Hyderabad, and Mumbai.',
  keywords: [
    'IT consulting', 'technology consulting', 'enterprise solutions', 'digital transformation',
    'cloud services', 'cybersecurity', 'AI solutions', 'data analytics',
    'IT outsourcing', 'managed services', 'EMEA technology partner',
    'Intelliware Global', 'application development', 'enterprise software',
    'London IT consulting', 'Dubai technology services', 'India IT services',
  ],
  authors: [{ name: 'Intelliware Global Consulting and Services LLP' }],
  creator: 'Intelliware Global',
  publisher: 'Intelliware Global Consulting and Services LLP',
  formatDetection: {
    email: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://www.intelliwareglobal.com',
    siteName: 'Intelliware Global',
    title: 'Intelliware Global — Enterprise Technology Consulting & IT Services',
    description:
      'Bridging human-centric values with cutting-edge digital delivery. Cloud, AI, Cybersecurity, Data & Digital Transformation for global enterprises.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Intelliware Global — Enterprise Technology Consulting',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Intelliware Global — Enterprise Technology Consulting',
    description:
      'Enterprise-grade Cloud, AI, Cybersecurity, Data & Digital Transformation solutions for EMEA markets.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.intelliwareglobal.com',
  },
  verification: {
    // Add your Google Search Console verification code here
    // google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" className={`${outfit.variable} ${ibmPlex.variable}`}>
      <head>
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
      </head>
      <body className="min-h-screen font-body antialiased bg-white text-slate-900">
        <DirectionProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </DirectionProvider>
      </body>
    </html>
  );
}
