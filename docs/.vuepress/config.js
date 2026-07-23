module.exports = {
  base: '/my-game-guide/',
  title: '热门游戏攻略站',
  description: 'GTA6、黑神话悟空、艾尔登法环、赛博朋克2077、塞尔达传说 — 最全游戏攻略大全',
  head: [
    // Google AdSense Auto Ads
    ['script', { async: true, src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-xxxxxxxxxxxxxxxx', crossorigin: 'anonymous' }],
    // Google Analytics (可选)
    ['script', { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX' }],
    ['script', {}, `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-XXXXXXXXXX');
    `]
  ],
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: '首页', link: '/' },
      { text: 'GTA6', link: '/gta6/' },
      { text: '黑神话悟空', link: '/wukong/' },
      { text: '艾尔登法环', link: '/elden-ring/' },
      { text: '赛博朋克2077', link: '/cyberpunk/' },
      { text: '塞尔达传说', link: '/zelda/' }
    ],
    sidebar: {
      '/gta6/': [
        { title: 'GTA6 攻略', collapsable: false, children: [
          '',
          'money-guide',
          'story-guide',
          'best-vehicles',
          'weapons',
          'cheats',
          'hidden-locations'
        ]},
        { title: '广告赞助', collapsable: true, children: [
          { title: '— 推荐加速器 —', path: '#' }
        ]}
      ],
      '/wukong/': [
        { title: '黑神话悟空', collapsable: false, children: [
          '',
          'boss-guide',
          'builds',
          'secrets'
        ]}
      ],
      '/elden-ring/': [
        { title: '艾尔登法环', collapsable: false, children: [
          '',
          'beginner-guide',
          'bosses',
          'builds'
        ]}
      ],
      '/cyberpunk/': [
        { title: '赛博朋克2077', collapsable: false, children: [
          '',
          'builds',
          'romance',
          'endings'
        ]}
      ],
      '/zelda/': [
        { title: '塞尔达传说', collapsable: false, children: [
          '',
          'shrines',
          'weapons',
          'cooking'
        ]}
      ]
    },
    lastUpdated: '最后更新',
    smoothScroll: true
  },
  markdown: {
    lineNumbers: true
  }
};
