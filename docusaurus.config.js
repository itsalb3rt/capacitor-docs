module.exports = {
  title: 'Ionic Documentation',
  tagline:
    'Ionic is the app platform for web developers. Build amazing mobile, web, and desktop apps all with one shared code base and open web standards',
  url: 'https://ionicframework.com',
  baseUrl: '/docs/',
  /* TODO
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'fr', 'ja', 'pt', 'zh'],
    localeConfigs: {
      en: { label: 'English' },
      es: { label: 'Español' },
      fr: { label: 'Français' },
      ja: { label: '日本語' },
      pt: { label: 'Português' },
      zh: { label: '中文' },
    },
  },
  */
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'ionic-team',
  projectName: 'ionic-docs',
  themeConfig: {
    navbar: {
      logo: {
        alt: 'Ionic Logo',
        src: 'img/framework-logo.svg',
      },
      items: [
        {
          to: '/',
          activeBaseRegex: '^/docs/(?!api|components|cli|native)',
          label: 'Guide',
          position: 'left',
        },
        {
          to: '/components',
          activeBaseRegex: '^/docs/(api|components)',
          label: 'Components',
          position: 'left',
        },
        {
          to: '/cli',
          label: 'CLI',
          position: 'left',
        },
        {
          to: '/native',
          label: 'Native',
          position: 'left',
        },
        {
          label: 'Community',
          position: 'right',
          items: [
            {
              href: 'https://ionicframework.com/community',
              label: 'Community Hub',
            },
            {
              href: 'https://forum.ionicframework.com/',
              label: 'Forum',
            },
            {
              href: 'https://ionicworldwide.herokuapp.com/',
              label: 'Slack',
            },
            {
              href: 'https://spectrum.chat/ionic',
              label: 'Spectrum',
            },
            {
              href: 'https://www.meetup.com/topics/ionic-framework/',
              label: 'Meetups',
            },
            {
              href: 'https://blog.ionicframework.com/',
              label: 'Blog',
            },
            {
              href: 'https://twitter.com/ionicframework',
              label: 'Twitter',
            },
          ],
        },
        {
          label: 'Support',
          position: 'right',
          items: [
            {
              href: 'https://ionicframework.com/support',
              label: 'Help Center',
            },
            {
              href: 'https://ionic.zendesk.com/',
              label: 'Customer Support',
            },
            {
              href: 'https://ionicframework.com/advisory',
              label: 'Enterprise Advisory',
            },
          ],
        },
        // {
        //   href: 'https://ionicframework.com/docs/cli',
        //   label: 'CLI',
        //   className: 'navbar-cli',
        //   position: 'right',
        // },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      links: [],
    },
    algolia: {
      apiKey: 'b3d47db9759a0a5884cf7807e23c77c5',
      indexName: 'capacitorjs',
    },
    gtag: {
      trackingID: 'UA-44023830-8',
    },
    prism: {
      // https://github.com/FormidableLabs/prism-react-renderer/blob/master/src/vendor/prism/includeLangs.js
      additionalLanguages: ['shell-session'],
    },
  },
  themes: ['@ionic-internal/docusaurus-theme'],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/ionic-team/ionic-docs/edit/main/',
        },
        blog: false,
      },
    ],
  ],
};
