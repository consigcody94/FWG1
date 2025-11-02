const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: 's8by8xgm',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

async function addDemoContent() {
  console.log('Creating demo page with premium blocks...');

  // Create a demo page showcasing all new blocks
  const demoPage = {
    _type: 'page',
    title: 'Visual Modernization Demo',
    slug: {
      _type: 'slug',
      current: 'demo-modernization',
    },
    description: 'Showcase of all new premium blocks',
    blocks: [
      // Enhanced Hero with badge
      {
        _type: 'hero',
        _key: 'hero1',
        badge: 'Since 2004',
        title: 'Federal Working Group',
        subtitle: 'Excellence in federal IT solutions, cyber defense, and enterprise transformation.',
        buttonText: 'Explore Our Services',
        buttonLink: '/services',
        secondaryButton: {
          text: 'Contact Us',
          link: '/contact',
        },
        alignment: 'center',
        height: '80vh',
        overlayPattern: 'grid',
        backgroundColor: { hex: '#0F172A' },
        textColor: { hex: '#FFFFFF' },
      },
      // Animated Stats
      {
        _type: 'stats',
        _key: 'stats1',
        layout: 'grid',
        animated: true,
        showSeparators: false,
        items: [
          {
            value: '20',
            suffix: '+',
            label: 'Years of Excellence',
            subtext: 'since 2004',
            icon: 'Award',
          },
          {
            value: '500',
            suffix: '+',
            label: 'Cleared Personnel',
            icon: 'Shield',
          },
          {
            value: '50',
            suffix: '+',
            label: 'Federal Agencies',
            subtext: 'served',
            icon: 'Building',
          },
          {
            value: '1000',
            suffix: '+',
            label: 'Projects Completed',
            icon: 'CheckCircle',
          },
        ],
      },
      // Capabilities Matrix
      {
        _type: 'capabilitiesMatrix',
        _key: 'capabilities1',
        heading: 'Our Core Capabilities',
        description: 'Mission-critical services trusted by federal agencies',
        layout: '3',
        hoverEffect: 'lift',
        cardStyle: 'solid',
        capabilities: [
          {
            title: 'Cybersecurity',
            description: 'Advanced threat detection, incident response, and security operations',
            icon: 'Shield',
            stat: '15+ Years',
          },
          {
            title: 'Cloud Modernization',
            description: 'Enterprise cloud migration, DevSecOps, and infrastructure optimization',
            icon: 'Cloud',
            stat: 'FedRAMP Ready',
          },
          {
            title: 'Enterprise Architecture',
            description: 'Strategic planning, system integration, and digital transformation',
            icon: 'Network',
          },
          {
            title: 'Data Analytics',
            description: 'Business intelligence, data science, and predictive analytics',
            icon: 'BarChart',
          },
          {
            title: 'IT Operations',
            description: '24/7 monitoring, support, and infrastructure management',
            icon: 'Settings',
          },
          {
            title: 'Program Management',
            description: 'Agile delivery, portfolio management, and governance',
            icon: 'Target',
          },
        ],
      },
      // Clients/Logos (placeholder - user can add real logos)
      {
        _type: 'clientsLogos',
        _key: 'clients1',
        heading: 'Trusted by Federal Agencies',
        description: 'Delivering excellence across the federal landscape',
        displayStyle: 'grid',
        columns: 4,
        logoSize: 'md',
        grayscale: true,
        logos: [],
      },
      // CTA
      {
        _type: 'cta',
        _key: 'cta1',
        heading: 'Ready to Transform Your Mission?',
        text: 'Let us discuss how Federal Working Group can accelerate your digital transformation.',
        buttonText: 'Get Started',
        buttonLink: '/contact',
        backgroundColor: { hex: '#1E40AF' },
        textColor: { hex: '#FFFFFF' },
        buttonStyle: 'solid',
        alignment: 'center',
      },
    ],
  };

  try {
    const result = await client.create(demoPage);
    console.log('✅ Demo page created successfully!');
    console.log(`🔗 View it at: http://localhost:3000/demo-modernization`);
    console.log(`📝 Edit in Studio: http://localhost:3000/studio/desk/page;${result._id}`);
    return result;
  } catch (error) {
    console.error('Error creating demo page:', error);
    throw error;
  }
}

addDemoContent().catch(console.error);
