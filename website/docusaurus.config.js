// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Cybersecurity & Ethical Hacking Book',
  tagline: 'A comprehensive guide to cybersecurity principles, ethical hacking, and defensive security',
  favicon: '/img/cyber.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://adilmalik01.github.io',
  // url: 'https://your-username.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/cybersecurity-book/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'adilmalik01', // Usually your GitHub org/user name.
  projectName: 'cybersecurity-book', // Usually your repo name.

  onBrokenLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',

          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/adilmalik01/cybersecurity-book/tree/main/website/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Cybersecurity',
        logo: {
          alt: 'Cybersecurity Book Logo',
          src: '/img/cyber.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Book',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/adilmalik01/cybersecurity-book',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Parts of the Book',
            items: [
              {
                label: 'Part I - Foundations',
                to: '/docs/part-i-foundations/cybersecurity-principles',
              },
              {
                label: 'Part II - Threat Landscape',
                to: '/docs/part-ii-threat-landscape', // Use generated index
              },
              {
                label: 'Part III - Ethical Hacking',
                to: '/docs/part-iii-ethical-hacking', // Use generated index
              },
              {
                label: 'Part IV - Defensive Security',
                to: '/docs/part-iv-defensive-security', // Use generated index
              },
              {
                label: 'Part V - Tools & Labs',
                to: '/docs/part-v-tools-labs', // Use generated index
              },
              {
                label: 'Part VI - Capstone',
                to: '/docs/part-vi-capstone', // Use generated index
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'GitHub Repo',
                href: 'https://github.com/adilmalik01/cybersecurity-book',
              },
              {
                label: 'Contributing',
                to: '/docs/intro', // Use a placeholder for now
              },
              {
                label: 'FAQ',
                to: '/docs/intro', // Use a placeholder for now
              },
            ],
          },
          {
            title: 'Legal',
            items: [
              {
                label: 'Ethics Policy',
                to: '/docs/part-i-foundations/cybersecurity-principles',
              },
              {
                label: 'Safety Guidelines',
                to: '/docs/part-i-foundations/cia-triad',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/adilmalik01/cybersecurity-book',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Cybersecurity Book Project.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
