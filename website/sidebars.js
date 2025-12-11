// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Part I - Foundations',
      items: [
        'part-i-foundations/cybersecurity-principles',
        'part-i-foundations/cia-triad',
        'part-i-foundations/networking-basics',
        'part-i-foundations/os-fundamentals'
      ],
      link: {
        type: 'generated-index',
        title: 'Part I - Foundations',
        description: 'Core cybersecurity principles, CIA triad, networking basics, and OS fundamentals',
        slug: '/part-i-foundations'
      }
    },
    {
      type: 'category',
      label: 'Part II - Threat Landscape',
      items: [
        'part-ii-threat-landscape/common-threats-and-attack-vectors',
        'part-ii-threat-landscape/vulnerability-assessment',
        'part-ii-threat-landscape/risk-management-framework',
        'part-ii-threat-landscape/threat-intelligence'
      ],
      link: {
        type: 'generated-index',
        title: 'Part II - Threat Landscape',
        description: 'Understanding common threats, vulnerabilities, and threat intelligence',
        slug: '/part-ii-threat-landscape'
      }
    },
    {
      type: 'category',
      label: 'Part III - Ethical Hacking',
      items: [
        'part-iii-ethical-hacking/introduction-to-ethical-hacking',
        'part-iii-ethical-hacking/network-penetration-testing',
        'part-iii-ethical-hacking/web-application-security-testing',
        'part-iii-ethical-hacking/social-engineering-and-physical-security'
      ],
      link: {
        type: 'generated-index',
        title: 'Part III - Ethical Hacking',
        description: 'Techniques and methodologies for ethical hacking and penetration testing',
        slug: '/part-iii-ethical-hacking'
      }
    },
    {
      type: 'category',
      label: 'Part IV - Defensive Security',
      items: [
        'part-iv-defensive-security/defense-in-depth-strategy',
        'part-iv-defensive-security/identity-and-access-management',
        'part-iv-defensive-security/security-monitoring-and-incident-response',
        'part-iv-defensive-security/cryptography-and-data-protection'
      ],
      link: {
        type: 'generated-index',
        title: 'Part IV - Defensive Security',
        description: 'Implementing comprehensive defensive security measures',
        slug: '/part-iv-defensive-security'
      }
    },
    {
      type: 'category',
      label: 'Part V - Tools & Labs',
      items: [
        'part-v-tools-labs/essential-cybersecurity-tools',
        'part-v-tools-labs/vulnerability-assessment-lab',
        'part-v-tools-labs/penetration-testing-lab',
        'part-v-tools-labs/incident-response-lab'
      ],
      link: {
        type: 'generated-index',
        title: 'Part V - Tools & Labs',
        description: 'Essential tools and practical labs for cybersecurity professionals',
        slug: '/part-v-tools-labs'
      }
    },
    {
      type: 'category',
      label: 'Part VI - Capstone',
      items: [
        'part-vi-capstone/capstone-project-security-assessment',
        'part-vi-capstone/security-architecture-design',
        'part-vi-capstone/security-program-management',
        'part-vi-capstone/emerging-trends-and-future-security'
      ],
      link: {
        type: 'generated-index',
        title: 'Part VI - Capstone',
        description: 'Integrating all cybersecurity concepts in comprehensive projects',
        slug: '/part-vi-capstone'
      }
    }
  ],
};

export default sidebars;
