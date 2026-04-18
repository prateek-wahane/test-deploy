import type { NavigationConfig } from '@/types';

export const navigation: NavigationConfig = {
  whatWeDo: [
    {
      title: 'Services',
      href: '/services',
      items: [
        { label: 'Applications', href: '/services/applications' },
        { label: 'Cloud', href: '/services/cloud' },
        { label: 'Cybersecurity', href: '/services/cybersecurity' },
        { label: 'Data & Analytics', href: '/services/data-analytics' },
        { label: 'Digital Transformation', href: '/services/digital-transformation' },
        { label: 'Enterprise Solutions', href: '/services/enterprise-solutions' },
        { label: 'AI & Machine Learning', href: '/services/ai-machine-learning' },
        { label: 'IoT & Edge Computing', href: '/services/iot-edge-computing' },
        { label: 'Quality Engineering', href: '/services/quality-engineering' },
        { label: 'Consulting', href: '/services/consulting' },
        { label: 'Managed Services', href: '/services/managed-services' },
      ],
    },
    {
      title: 'Industries',
      href: '/industries',
      items: [
        { label: 'Banking & Financial Services', href: '/industries/banking-financial-services' },
        { label: 'Healthcare', href: '/industries/healthcare' },
        { label: 'Hi-Tech', href: '/industries/hi-tech' },
        { label: 'Insurance', href: '/industries/insurance' },
        { label: 'Life Sciences', href: '/industries/life-sciences' },
        { label: 'Manufacturing', href: '/industries/manufacturing' },
        { label: 'Media & Entertainment', href: '/industries/media-entertainment' },
        { label: 'Retail & CPG', href: '/industries/retail-cpg' },
        { label: 'Telecom', href: '/industries/telecom' },
        { label: 'Energy & Utilities', href: '/industries/energy-utilities' },
      ],
    },
  ],
  whoWeAre: [
    { label: 'About Us', href: '/about/about-us' },
    { label: 'Aspiration', href: '/about/aspiration' },
    { label: 'Brand', href: '/about/brand' },
    { label: 'Values', href: '/about/values' },
    { label: 'Leadership', href: '/about/leadership', hidden: true },
  ],
  portfolio: [
    { label: 'Wipro', href: 'https://www.wipro.com', external: true, hidden: true },
  ],
  careers: { label: 'Careers', href: '/careers', hidden: true },
  contact: { label: 'Contact Us', href: '/contact' },
};
