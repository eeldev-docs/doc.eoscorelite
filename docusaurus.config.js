// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'EOSCore Lite Documentation',
  tagline: 'EOSCore Lite Documentation',
  url: 'https://eoscore-lite.eeldev.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/eeldev_icon.png',
  organizationName: 'eeldev-docs', // Usually your GitHub org/user name.
  projectName: 'doc.eoscorelite', // Usually your repo name.
  plugins: [require.resolve("docusaurus-plugin-image-zoom")],
  deploymentBranch: 'deployment',
  trailingSlash: false,

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
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
     navbar: {
        title: 'Documentation',
        logo: {
          alt: 'My Site Logo',
          src: 'img/eeldev_icon.png',
        },
        items: [ 
          //{to: '/blog', label: 'Changelogs', position: 'left'},
          /*
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          */
          { href: 'https://eeldev.com', label: 'eeldev.com' },
          { href: 'https://www.unrealengine.com/marketplace/slug/af157f773f084ca89036cd7bc03fb416', label: 'Unreal Marketplace' },
          { href: 'https://www.youtube.com/channel/UC6Rhr_F5BxwfTtcADVPUNYA', label: 'YouTube', position: 'right' },
          { href: 'https://discord.gg/3Yu7pEy', label: 'Discord', position: 'right'},
          { href: 'https://twitter.com/dryeeldev', label: 'Twitter', position: 'right' },
        ],
      },
footer: {
        style: 'dark',
        links: [
          /** 
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/channel/UC6Rhr_F5BxwfTtcADVPUNYA',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/3Yu7pEy',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/dryeeldev',
              },
            ],
          },
          */
          /*
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
          */
        ],
        copyright: `Copyright © ${new Date().getFullYear()} eelDev AB`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
