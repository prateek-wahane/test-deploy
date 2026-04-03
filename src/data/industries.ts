import type { Industry } from '@/types';

export const industries: Industry[] = [
  {
    slug: 'banking-financial-services',
    title: 'Banking & Financial Services',
    shortTitle: 'Banking',
    description:
      'Digital-first banking platforms, regulatory technology, and AI-driven risk management that help financial institutions compete in a post-PSD2, open-banking era.',
    longDescription:
      'Intelliware Global partners with leading banks, investment firms, and fintechs across EMEA to deliver next-generation financial services technology. From core banking modernisation and payment platform engineering to RegTech compliance and AI-driven fraud detection, we help financial institutions innovate while managing risk.',
    icon: 'Landmark',
    challenges: [
      'Legacy core banking systems that limit agility and innovation',
      'Rising regulatory complexity across EMEA jurisdictions',
      'Increasing sophistication of financial fraud and cyber threats',
      'Customer expectations for seamless digital banking experiences',
    ],
    solutions: [
      'Core banking modernisation with cloud-native, API-first architectures',
      'Automated regulatory reporting and compliance monitoring platforms',
      'AI-powered fraud detection and real-time transaction monitoring',
      'Omni-channel digital banking experiences with personalisation engines',
    ],
  },
  {
    slug: 'healthcare',
    title: 'Healthcare & Life Sciences',
    shortTitle: 'Healthcare',
    description:
      'Interoperable health platforms, clinical decision support systems, and patient engagement solutions that improve outcomes while reducing cost of care.',
    longDescription:
      'Intelliware Global delivers technology solutions that transform healthcare delivery across hospitals, payers, and pharmaceutical companies. Our deep understanding of HL7 FHIR, GDPR health data regulations, and clinical workflows enables us to build systems that clinicians trust and patients love.',
    icon: 'Heart',
    challenges: [
      'Fragmented patient data across siloed clinical systems',
      'Strict regulatory requirements (GDPR, HIPAA, MDR)',
      'Rising cost pressures and demand for value-based care',
      'Need for remote patient monitoring and telemedicine at scale',
    ],
    solutions: [
      'FHIR-based interoperability platforms for unified patient records',
      'AI-assisted clinical decision support and diagnostic tools',
      'Telemedicine platforms with real-time video and remote monitoring',
      'Population health analytics for proactive care management',
    ],
  },
  {
    slug: 'hi-tech',
    title: 'Hi-Tech & Software',
    shortTitle: 'Hi-Tech',
    description:
      'Product engineering, platform modernisation, and go-to-market acceleration for technology companies scaling across European and Middle Eastern markets.',
    longDescription:
      'Intelliware Global serves as a strategic engineering partner for hi-tech companies looking to accelerate product development, modernise legacy platforms, and expand into new markets. We bring deep expertise in SaaS architecture, API platform design, and developer experience engineering.',
    icon: 'Laptop',
    challenges: [
      'Pressure to accelerate product release cycles',
      'Technical debt from rapid early-stage growth',
      'Need to localise products for diverse EMEA markets',
      'Talent shortages in specialised engineering domains',
    ],
    solutions: [
      'Dedicated engineering pods with full-stack product development capabilities',
      'Platform modernisation from monolith to microservices',
      'Multi-tenant SaaS architecture and API platform design',
      'Localisation and internationalisation for EMEA market entry',
    ],
  },
  {
    slug: 'insurance',
    title: 'Insurance',
    shortTitle: 'Insurance',
    description:
      'Digital underwriting, claims automation, and InsurTech integration that modernise insurance operations from quote to claim.',
    longDescription:
      'Intelliware Global helps insurers and reinsurers across EMEA transform their operations through digital-first platforms. From automated underwriting engines and AI-driven claims processing to customer self-service portals and IoT-based risk assessment, we enable insurers to reduce costs, improve loss ratios, and deliver superior policyholder experiences.',
    icon: 'ShieldCheck',
    challenges: [
      'Manual underwriting processes that slow policy issuance',
      'High claims processing costs and long settlement cycles',
      'Difficulty integrating InsurTech innovations with legacy systems',
      'Evolving regulatory requirements across European markets',
    ],
    solutions: [
      'AI-powered underwriting engines with real-time risk scoring',
      'Straight-through claims processing with computer vision and NLP',
      'API-first policy administration platforms for InsurTech integration',
      'Regulatory compliance automation for Solvency II and IDD',
    ],
  },
  {
    slug: 'life-sciences',
    title: 'Life Sciences & Pharma',
    shortTitle: 'Life Sciences',
    description:
      'Clinical trial platforms, pharmacovigilance systems, and regulatory submission automation that accelerate drug development and market access.',
    longDescription:
      'Intelliware Global supports pharmaceutical companies, biotech firms, and CROs with technology solutions that accelerate drug discovery, streamline clinical trials, and ensure regulatory compliance. Our teams understand the unique demands of GxP-validated environments and bring deep domain expertise in clinical data management.',
    icon: 'Microscope',
    challenges: [
      'Lengthy and costly clinical trial processes',
      'Complex global regulatory submission requirements',
      'Need for real-world evidence and post-market surveillance',
      'Data silos between research, clinical, and commercial functions',
    ],
    solutions: [
      'Cloud-based clinical trial management and eClinical platforms',
      'Automated regulatory submission and compliance tracking',
      'AI-driven drug discovery and molecular modelling',
      'Unified data platforms bridging R&D, clinical, and commercial data',
    ],
  },
  {
    slug: 'manufacturing',
    title: 'Manufacturing & Industry 4.0',
    shortTitle: 'Manufacturing',
    description:
      'Smart factory platforms, digital twins, and supply chain intelligence that drive operational excellence in the age of Industry 4.0.',
    longDescription:
      'Intelliware Global helps manufacturers embrace the fourth industrial revolution with connected factory solutions, predictive maintenance platforms, and supply chain optimisation engines. Our IoT and edge computing expertise enables real-time visibility across production lines, warehouses, and logistics networks.',
    icon: 'Factory',
    challenges: [
      'Unplanned downtime and reactive maintenance strategies',
      'Supply chain disruptions and lack of real-time visibility',
      'Quality control inconsistencies across production lines',
      'Difficulty attracting and retaining skilled workforce',
    ],
    solutions: [
      'IoT-enabled predictive maintenance reducing downtime by up to 45%',
      'Digital twin technology for production simulation and optimisation',
      'AI-driven quality inspection with computer vision',
      'Connected supply chain platforms with real-time tracking and analytics',
    ],
  },
  {
    slug: 'media-entertainment',
    title: 'Media & Entertainment',
    shortTitle: 'Media & Entertainment',
    description:
      'Content management platforms, OTT streaming architecture, and audience analytics that help media companies monetise in the digital-first era.',
    longDescription:
      'Intelliware Global builds technology platforms that enable media companies, broadcasters, and content publishers to create, manage, distribute, and monetise content at scale. From OTT streaming architecture and content recommendation engines to digital rights management and audience analytics, we power the future of entertainment.',
    icon: 'Film',
    challenges: [
      'Fragmented content distribution across multiple platforms',
      'Declining traditional revenue models and advertising spend',
      'Rising viewer expectations for personalised content experiences',
      'Complex digital rights management across territories',
    ],
    solutions: [
      'Scalable OTT streaming platforms with adaptive bitrate delivery',
      'AI-powered content recommendation and personalisation engines',
      'Automated content supply chain from creation to distribution',
      'Audience analytics platforms for data-driven content strategy',
    ],
  },
  {
    slug: 'retail-cpg',
    title: 'Retail & Consumer Goods',
    shortTitle: 'Retail & CPG',
    description:
      'Unified commerce platforms, demand forecasting, and personalised customer experiences that drive revenue across physical and digital channels.',
    longDescription:
      'Intelliware Global helps retailers and consumer goods companies build seamless omni-channel experiences that drive customer loyalty and revenue growth. From commerce platform engineering and supply chain optimisation to AI-driven merchandising and personalised marketing, we enable retail transformation at scale.',
    icon: 'ShoppingCart',
    challenges: [
      'Disconnected online and offline customer experiences',
      'Inventory management complexity across channels',
      'Demand forecasting accuracy in volatile markets',
      'Rising customer acquisition costs and declining loyalty',
    ],
    solutions: [
      'Unified commerce platforms connecting POS, eCommerce, and mobile',
      'AI-driven demand forecasting and inventory optimisation',
      'Personalisation engines for targeted offers and recommendations',
      'Customer data platforms for 360-degree shopper insights',
    ],
  },
  {
    slug: 'telecom',
    title: 'Telecommunications',
    shortTitle: 'Telecom',
    description:
      'Network modernisation, BSS/OSS transformation, and 5G-enabled service platforms that prepare telecom operators for the connected future.',
    longDescription:
      'Intelliware Global partners with telecom operators and network equipment providers to modernise BSS/OSS platforms, implement 5G service architectures, and build digital customer engagement channels. Our understanding of TMF frameworks and telecom-specific regulatory requirements enables seamless transformation.',
    icon: 'Radio',
    challenges: [
      'Legacy BSS/OSS systems limiting service agility',
      'Capital-intensive 5G network rollouts',
      'Increasing competition from OTT and digital-native players',
      'Customer churn in saturated markets',
    ],
    solutions: [
      'Cloud-native BSS/OSS platforms for rapid service launch',
      'Network function virtualisation and edge computing architecture',
      'AI-driven customer engagement and churn prediction models',
      'Automated network operations with AIOps-driven monitoring',
    ],
  },
  {
    slug: 'energy-utilities',
    title: 'Energy & Utilities',
    shortTitle: 'Energy & Utilities',
    description:
      'Smart grid platforms, sustainability analytics, and asset management solutions that drive the transition to clean, connected, and customer-centric energy.',
    longDescription:
      'Intelliware Global helps energy companies and utilities navigate the dual challenge of decarbonisation and digitalisation. From smart grid management and renewable energy integration to customer engagement platforms and regulatory compliance, we enable the energy transition with technology.',
    icon: 'Plug',
    challenges: [
      'Ageing grid infrastructure and increasing renewable integration',
      'Regulatory pressure for decarbonisation and sustainability reporting',
      'Customer demand for transparent and personalised energy services',
      'Cybersecurity risks to critical infrastructure',
    ],
    solutions: [
      'Smart grid management platforms with real-time monitoring and control',
      'Sustainability analytics and ESG reporting automation',
      'Customer engagement portals with usage insights and demand response',
      'OT/IT convergence security frameworks for critical infrastructure',
    ],
  },
];
