import type { Service } from '@/types';

export const services: Service[] = [
  {
    slug: 'applications',
    title: 'Application Development & Modernisation',
    shortTitle: 'Applications',
    description:
      'End-to-end application engineering — from legacy modernisation to cloud-native builds — designed to accelerate time-to-market across the EMEA region.',
    longDescription:
      'Intelliware Global delivers full-lifecycle application services that span ideation, architecture, development, testing, and managed support. We specialise in modernising monolithic systems into microservices architectures, enabling enterprises to achieve agility without sacrificing stability. Our teams leverage domain-driven design, event-sourced patterns, and CI/CD pipelines to ensure every release is production-ready from day one.',
    icon: 'AppWindow',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80&auto=format&fit=crop',
    pillars: [
      { title: 'Efficiency', description: 'Reduce development cycles by up to 40% with proven accelerators and reusable component libraries.', icon: 'Zap' },
      { title: 'Scalability', description: 'Microservices-first architecture that scales horizontally to meet enterprise demand spikes.', icon: 'TrendingUp' },
      { title: 'Innovation', description: 'Low-code and composable platforms that empower citizen developers alongside professional engineering teams.', icon: 'Lightbulb' },
    ],
    techStack: ['React', 'Angular', 'Next.js', 'Node.js', '.NET', 'Java Spring', 'Kubernetes', 'Docker', 'AWS', 'Azure'],
  },
  {
    slug: 'cloud',
    title: 'Cloud Transformation & Infrastructure',
    shortTitle: 'Cloud',
    description:
      'Multi-cloud strategy, migration, and managed services that unlock elastic scale and operational resilience for global enterprises.',
    longDescription:
      'Our Cloud practice helps organisations navigate the complexity of multi-cloud and hybrid environments. From initial cloud readiness assessments through large-scale migrations to ongoing FinOps optimisation, we ensure every workload runs on the right platform at the right cost. Our certified architects design landing zones, implement infrastructure-as-code, and build self-healing platforms that minimise downtime.',
    icon: 'Cloud',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80&auto=format&fit=crop',
    pillars: [
      { title: 'Efficiency', description: 'Automated provisioning and IaC pipelines that cut infrastructure lead times from weeks to minutes.', icon: 'Zap' },
      { title: 'Scalability', description: 'Auto-scaling architectures across AWS, Azure, and GCP that flex with real-time demand.', icon: 'TrendingUp' },
      { title: 'Innovation', description: 'Serverless and container-native patterns that eliminate infrastructure overhead entirely.', icon: 'Lightbulb' },
    ],
    techStack: ['AWS', 'Azure', 'GCP', 'Terraform', 'Pulumi', 'Kubernetes', 'Docker', 'Ansible', 'CloudFormation', 'Datadog'],
  },
  {
    slug: 'cybersecurity',
    title: 'Cybersecurity & Risk Management',
    shortTitle: 'Cybersecurity',
    description:
      'Proactive threat detection, zero-trust architecture, and regulatory compliance frameworks to safeguard your enterprise across every attack surface.',
    longDescription:
      'In an era of sophisticated cyber threats, Intelliware Global provides a defence-in-depth approach to enterprise security. We design and implement zero-trust architectures, deploy SIEM/SOAR platforms, and conduct red-team assessments to identify vulnerabilities before adversaries do. Our GRC practice ensures full alignment with GDPR, NIS2, and regional EMEA compliance mandates.',
    icon: 'Shield',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80&auto=format&fit=crop',
    pillars: [
      { title: 'Efficiency', description: 'Automated threat detection and response that reduces mean-time-to-remediate by 60%.', icon: 'Zap' },
      { title: 'Scalability', description: 'Cloud-native security platforms that protect workloads across hybrid and multi-cloud estates.', icon: 'TrendingUp' },
      { title: 'Innovation', description: 'AI-driven behavioural analytics and next-gen SIEM platforms for predictive threat intelligence.', icon: 'Lightbulb' },
    ],
    techStack: ['CrowdStrike', 'Splunk', 'Palo Alto', 'Microsoft Sentinel', 'Okta', 'HashiCorp Vault', 'Fortinet', 'Qualys', 'Tenable', 'OWASP'],
  },
  {
    slug: 'data-analytics',
    title: 'Data & Analytics',
    shortTitle: 'Data & Analytics',
    description:
      'Transform raw data into strategic intelligence with modern data platforms, real-time analytics, and AI-powered business insights.',
    longDescription:
      'Intelliware Global builds enterprise data ecosystems that turn information into competitive advantage. From data lake architecture and ETL/ELT pipeline design to self-service BI dashboards and advanced analytics, we enable data-driven decision making at every level of the organisation. Our data engineering teams specialise in real-time streaming architectures and modern data mesh topologies.',
    icon: 'BarChart3',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop',
    pillars: [
      { title: 'Efficiency', description: 'Automated data pipelines that reduce manual reporting effort by up to 80%.', icon: 'Zap' },
      { title: 'Scalability', description: 'Lakehouse architectures on Databricks and Snowflake that scale to petabyte workloads.', icon: 'TrendingUp' },
      { title: 'Innovation', description: 'Predictive analytics and ML-driven insights that anticipate market shifts before they happen.', icon: 'Lightbulb' },
    ],
    techStack: ['Databricks', 'Snowflake', 'Apache Spark', 'Kafka', 'Power BI', 'Tableau', 'dbt', 'Airflow', 'Python', 'SQL'],
  },
  {
    slug: 'digital-transformation',
    title: 'Digital Transformation',
    shortTitle: 'Digital Transformation',
    description:
      'Holistic business transformation programmes that rewire operating models, digitise customer journeys, and unlock new revenue streams.',
    longDescription:
      'Digital transformation is not a technology project — it is a business imperative. Intelliware Global partners with C-suite leaders to define digital strategies, redesign operating models, and execute transformation roadmaps that deliver measurable business outcomes. We combine design thinking, agile delivery, and change management to ensure adoption at scale across the enterprise.',
    icon: 'Workflow',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80&auto=format&fit=crop',
    pillars: [
      { title: 'Efficiency', description: 'Process automation and intelligent workflows that eliminate manual bottlenecks across the value chain.', icon: 'Zap' },
      { title: 'Scalability', description: 'Platform-based transformation models that scale across business units and geographies.', icon: 'TrendingUp' },
      { title: 'Innovation', description: 'Design thinking workshops and rapid prototyping that validate ideas before full-scale investment.', icon: 'Lightbulb' },
    ],
    techStack: ['ServiceNow', 'Salesforce', 'SAP S/4HANA', 'Pega', 'Appian', 'Mulesoft', 'Figma', 'Jira', 'Confluence', 'Power Platform'],
  },
  {
    slug: 'enterprise-solutions',
    title: 'Enterprise Solutions & ERP',
    shortTitle: 'Enterprise Solutions',
    description:
      'SAP, Oracle, and Microsoft Dynamics implementations that unify business processes and deliver a single source of truth across global operations.',
    longDescription:
      'Our Enterprise Solutions practice delivers end-to-end ERP implementations, upgrades, and managed services for SAP S/4HANA, Oracle Cloud, and Microsoft Dynamics 365. We help enterprises consolidate fragmented systems, standardise business processes, and unlock real-time visibility across finance, supply chain, HR, and customer operations. Our certified consultants bring deep industry expertise to every engagement.',
    icon: 'Building2',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80&auto=format&fit=crop',
    pillars: [
      { title: 'Efficiency', description: 'Pre-built industry templates and accelerators that reduce ERP implementation timelines by 30%.', icon: 'Zap' },
      { title: 'Scalability', description: 'Cloud-hosted ERP platforms that support multi-entity, multi-currency global operations.', icon: 'TrendingUp' },
      { title: 'Innovation', description: 'Embedded AI and intelligent automation within ERP workflows for predictive planning and execution.', icon: 'Lightbulb' },
    ],
    techStack: ['SAP S/4HANA', 'Oracle Cloud', 'Microsoft Dynamics 365', 'Workday', 'Infor', 'SuccessFactors', 'Ariba', 'Fiori', 'ABAP', 'Power Apps'],
  },
  {
    slug: 'ai-machine-learning',
    title: 'AI & Machine Learning',
    shortTitle: 'AI & ML',
    description:
      'Production-grade AI solutions — from conversational chatbots and voice agents to agentic frameworks — that deliver measurable business impact.',
    longDescription:
      'Intelliware Global is at the forefront of enterprise AI adoption. We design, build, and deploy production-grade AI systems spanning natural language processing, computer vision, predictive modelling, and generative AI. Our Agentic AI practice builds autonomous agents that can reason, plan, and execute complex multi-step workflows. We specialise in Voice.ai solutions, conversational chatbots, and retrieval-augmented generation (RAG) architectures.',
    icon: 'Brain',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80&auto=format&fit=crop',
    pillars: [
      { title: 'Efficiency', description: 'AI-powered automation that reduces manual cognitive tasks by up to 70%.', icon: 'Zap' },
      { title: 'Scalability', description: 'MLOps pipelines and model serving infrastructure that scale from prototype to production seamlessly.', icon: 'TrendingUp' },
      { title: 'Innovation', description: 'Agentic AI frameworks, Voice.ai platforms, and generative AI solutions that redefine customer and employee experiences.', icon: 'Lightbulb' },
    ],
    techStack: ['PyTorch', 'TensorFlow', 'Hugging Face', 'LangChain', 'OpenAI', 'AWS SageMaker', 'Azure ML', 'Vertex AI', 'MLflow', 'Kubernetes'],
  },
  {
    slug: 'iot-edge-computing',
    title: 'IoT & Edge Computing',
    shortTitle: 'IoT & Edge',
    description:
      'Connected device ecosystems, edge analytics, and industrial IoT platforms that bring intelligence to the physical world.',
    longDescription:
      'Intelliware Global helps enterprises harness the power of connected devices and edge computing. We design IoT architectures that span device provisioning, secure connectivity, edge processing, and cloud-based analytics. Our solutions serve manufacturing floors, smart buildings, fleet management, and healthcare monitoring — delivering real-time insights where they matter most.',
    icon: 'Cpu',
    image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&q=80&auto=format&fit=crop',
    pillars: [
      { title: 'Efficiency', description: 'Edge processing that reduces cloud data transfer costs by up to 50% while enabling real-time decisions.', icon: 'Zap' },
      { title: 'Scalability', description: 'Device management platforms that scale from hundreds to millions of connected endpoints.', icon: 'TrendingUp' },
      { title: 'Innovation', description: 'Digital twin technology and predictive maintenance models that transform asset management.', icon: 'Lightbulb' },
    ],
    techStack: ['AWS IoT Core', 'Azure IoT Hub', 'MQTT', 'Apache Kafka', 'Edge Impulse', 'Raspberry Pi', 'Arduino', 'InfluxDB', 'Grafana', 'Node-RED'],
  },
  {
    slug: 'quality-engineering',
    title: 'Quality Engineering & Testing',
    shortTitle: 'Quality Engineering',
    description:
      'Shift-left quality strategies, test automation frameworks, and performance engineering that ensure every release meets enterprise standards.',
    longDescription:
      'Quality is not a phase — it is a discipline woven into every stage of delivery. Intelliware Global provides comprehensive quality engineering services that span functional testing, API testing, performance engineering, security testing, and accessibility compliance. Our automation-first approach leverages AI-assisted test generation and self-healing test frameworks to maximise coverage while minimising maintenance overhead.',
    icon: 'CheckCircle2',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80&auto=format&fit=crop',
    pillars: [
      { title: 'Efficiency', description: 'AI-powered test generation and self-healing frameworks that reduce test maintenance by 60%.', icon: 'Zap' },
      { title: 'Scalability', description: 'Cloud-based test execution grids that run thousands of tests in parallel across browsers and devices.', icon: 'TrendingUp' },
      { title: 'Innovation', description: 'Shift-left quality practices with in-pipeline testing and real-time quality dashboards.', icon: 'Lightbulb' },
    ],
    techStack: ['Selenium', 'Playwright', 'Cypress', 'JMeter', 'Gatling', 'Appium', 'Postman', 'SonarQube', 'TestRail', 'BrowserStack'],
  },
  {
    slug: 'consulting',
    title: 'Technology Consulting & Advisory',
    shortTitle: 'Consulting',
    description:
      'Strategic technology advisory services that align IT investments with business outcomes and prepare enterprises for the future.',
    longDescription:
      'Intelliware Global\'s consulting practice provides CxO-level advisory across technology strategy, enterprise architecture, vendor evaluation, and programme governance. We help organisations build technology roadmaps that balance innovation with pragmatism, assess build-vs-buy decisions, and establish centres of excellence. Our consultants bring decades of cross-industry experience across the EMEA region.',
    icon: 'Compass',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80&auto=format&fit=crop',
    pillars: [
      { title: 'Efficiency', description: 'Rapid assessments and maturity models that provide actionable insights within weeks, not months.', icon: 'Zap' },
      { title: 'Scalability', description: 'Repeatable frameworks and governance models that scale advisory engagement across the enterprise.', icon: 'TrendingUp' },
      { title: 'Innovation', description: 'Emerging technology radar and innovation labs that keep clients ahead of market disruption.', icon: 'Lightbulb' },
    ],
    techStack: ['TOGAF', 'ArchiMate', 'Gartner', 'Forrester', 'McKinsey 7-S', 'ITIL', 'SAFe', 'OKR', 'Balanced Scorecard', 'Wardley Maps'],
  },
  {
    slug: 'managed-services',
    title: 'Managed Services & Operations',
    shortTitle: 'Managed Services',
    description:
      'Always-on infrastructure management, application support, and NOC/SOC services that keep your enterprise running 24/7/365.',
    longDescription:
      'Intelliware Global\'s Managed Services practice provides round-the-clock monitoring, incident management, and continuous improvement for enterprise IT estates. Our global delivery centres in London, Dubai, and Bangalore offer follow-the-sun support models with guaranteed SLAs. We combine AIOps-driven automation with ITIL-aligned processes to ensure maximum uptime and rapid issue resolution.',
    icon: 'Settings',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80&auto=format&fit=crop',
    pillars: [
      { title: 'Efficiency', description: 'AIOps-driven automation that resolves 40% of incidents without human intervention.', icon: 'Zap' },
      { title: 'Scalability', description: 'Follow-the-sun delivery model across three global centres for true 24/7 coverage.', icon: 'TrendingUp' },
      { title: 'Innovation', description: 'Proactive monitoring and self-healing systems that prevent outages before they impact business.', icon: 'Lightbulb' },
    ],
    techStack: ['ServiceNow', 'PagerDuty', 'Datadog', 'New Relic', 'Splunk', 'Ansible', 'Terraform', 'Prometheus', 'Grafana', 'Opsgenie'],
  },
];
