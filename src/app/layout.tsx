import type { Metadata } from 'next';
import { Outfit, IBM_Plex_Sans } from 'next/font/google';
import './globals.css';
import { DirectionProvider } from '@/context/DirectionContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

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
  title: {
    default: 'Intelliware Global — Enterprise Technology Consulting',
    template: '%s | Intelliware Global',
  },
  description:
    'Intelliware Global Consulting and Services LLP delivers enterprise-grade technology solutions across Cloud, AI, Cybersecurity, Data, and Digital Transformation for EMEA markets.',
  openGraph: {
    title: 'Intelliware Global — Enterprise Technology Consulting',
    description:
      'Bridging human-centric values with cutting-edge digital delivery to empower your global enterprise.',
    siteName: 'Intelliware Global',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" className={`${outfit.variable} ${ibmPlex.variable}`}>
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
