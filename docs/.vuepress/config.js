module.exports = {
  base: '/my-game-guide/',
  title: '热门游戏攻略站',
  description: 'GTA6、黑神话悟空、艾尔登法环、赛博朋克2077、塞尔达传说 — 最全中文游戏攻略大全，每日更新',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    // SEO: Open Graph
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: '热门游戏攻略站 - 最全中文游戏攻略大全' }],
    ['meta', { property: 'og:description', content: 'GTA6、黑神话悟空、艾尔登法环、赛博朋克2077、塞尔达传说攻略合集' }],
    ['meta', { property: 'og:image', content: 'https://iprshang.github.io/my-game-guide/og-image.png' }],
    ['meta', { property: 'og:url', content: 'https://iprshang.github.io/my-game-guide/' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: '热门游戏攻略站' }],
    ['meta', { name: 'twitter:description', content: '最全中文游戏攻略大全' }],
    // 百度站长验证 (在 https://ziyuan.baidu.com 获取)
    // ['meta', { name: 'baidu-site-verification', content: 'code-xxxxxxxxxx' }],
    // 百度统计
    ['script', {}, `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?896ed0566f9fdd9364a533ce8cec952a";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
      })();
    `],
    // Google AdSense (替换为你的发布商 ID)
    // ['script', { async: true, src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-xxxxxxxxxxxxxxxx', crossorigin: 'anonymous' }],
    // Google Analytics (替换为你的 GA ID)
    // ['script', { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX' }],
    // ['script', {}, `
    //   window.dataLayer = window.dataLayer || [];
    //   function gtag(){dataLayer.push(arguments);}
    //   gtag('js', new Date());
    //   gtag('config', 'G-XXXXXXXXXX');
    // `]
  ],

  // ===== 插件 =====
  plugins: [
    // 返回顶部
    '@vuepress/back-to-top',
    // 页面加载进度条
    '@vuepress/nprogress',
    // 图片点击放大
    [
      '@vuepress/medium-zoom',
      {
        selector: '.theme-default-content img',
        options: {
          margin: 16,
          background: 'rgba(0,0,0,0.85)',
          scrollOffset: 0
        }
      }
    ],
    // 站内搜索
    ['@vuepress/search', {
      searchMaxSuggestions: 10,
      test: null,
      hotKeys: ['s', '/']
    }],
    // Sitemap
    [
      'sitemap',
      {
        hostname: 'https://iprshang.github.io/my-game-guide/',
        exclude: ['/404.html'],
        dateFormatter: (time) => {
          const d = new Date(time);
          return d.toISOString().split('T')[0];
        }
      }
    ]
  ],

  themeConfig: {
    logo: '/logo.png',
    domain: 'https://iprshang.github.io/my-game-guide',
    lastUpdated: '最后更新',
    smoothScroll: true,
    search: true,
    searchMaxSuggestions: 10,
    searchPlaceholder: '搜索攻略、任务、Boss...',
    nav: [
      { text: '首页', link: '/' },
      {
        text: 'GTA6',
        items: [
          { text: '专区首页', link: '/gta6/' },
          { text: '赚钱攻略', link: '/gta6/money-guide' },
          { text: '剧情攻略', link: '/gta6/story-guide' },
          { text: '最强载具', link: '/gta6/best-vehicles' }
        ]
      },
      { text: '黑神话悟空', link: '/wukong/' },
      { text: '艾尔登法环', link: '/elden-ring/' },
      { text: '赛博朋克2077', link: '/cyberpunk/' },
      { text: '塞尔达传说', link: '/zelda/' }
    ],
    sidebar: {
      '/gta6/': [
        {
          title: 'Grand Theft Auto VI',
          collapsable: false,
          children: ['', 'map', 'money-guide', 'story-guide', 'best-vehicles', 'weapons', 'cheats', 'hidden-locations']
        }
      ],
      '/wukong/': [
        { title: '黑神话悟空', collapsable: false, children: ['', 'boss-guide', 'builds', 'secrets'] }
      ],
      '/elden-ring/': [
        { title: '艾尔登法环', collapsable: false, children: ['', 'beginner-guide', 'bosses', 'builds'] }
      ],
      '/cyberpunk/': [
        { title: '赛博朋克 2077', collapsable: false, children: ['', 'builds', 'romance', 'endings'] }
      ],
      '/zelda/': [
        { title: '塞尔达传说：王国之泪', collapsable: false, children: ['', 'shrines', 'weapons', 'cooking'] }
      ]
    },
    footer: 'Copyright © 2026 热门游戏攻略站 | <a href="https://iprshang.github.io/mahjong/" target="_blank">🎲 累了搓两把麻将？</a> | 由 VuePress 驱动'
  },

  markdown: {
    lineNumbers: true,
    extractHeaders: ['h2', 'h3']
  },

  extraWatchFiles: [
    '.vuepress/styles/index.styl',
    '.vuepress/styles/palette.styl'
  ]
};
