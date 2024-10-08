// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'UDOT WIKI',
  tagline: 'The Complete Guide to UDOT',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'universaldot', // Usually your GitHub org/user name.
  projectName: 'wiki', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/UniversalDot/udot-wiki/tree/master/wiki',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/UniversalDot/udot-wiki/tree/master/wiki',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'mk', 'es'],
    localeConfigs: {
      en: {
        htmlLang: 'en-GB',
      },
      // You can omit a locale (e.g. fr) if you don't need to override the defaults
      fa: {
        direction: 'rtl',
      },
    },
  },

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Wiki',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'localeDropdown',
            position: 'right',
            dropdownItemsAfter: [
              {
                href: 'https://github.com/UniversalDot/udot-wiki/issues/21',
                label: 'Help Us Translate',
              },
            ],
          },
          {
            type: 'doc',
            docId: 'learn',
            position: 'left',
            label: 'Learn',
          },
          {
            type: 'doc',
            docId: 'join',
            position: 'left',
            label: 'Join',
          },
          {
            type: 'doc',
            docId: 'build',
            position: 'left',
            label: 'Build',
          },
          {to: '/blog', label: 'Blog', position: 'right'},
          {
            href: 'https://github.com/UniversalDot',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Intro',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/@universaldotfoundation',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/universaldot-foundation',
              },
              {
                label: 'Slack',
                href: 'https://universaldot.slack.com',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/Universaldot_',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/UniversalDot',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} UniversalDot Foundation. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
