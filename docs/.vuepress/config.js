module.exports = {
  base: '/my-game-guide/',
  title: '热门游戏攻略站',
  description: 'GTA6、黑神话悟空、艾尔登法环、赛博朋克2077、塞尔达传说 — 游戏攻略大全',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  plugins: [
    '@vuepress/back-to-top',
    '@vuepress/nprogress'
  ],
  themeConfig: {
    logo: '/logo.png',
    lastUpdated: '最后更新',
    smoothScroll: true,
    nav: [
      { text: '首页', link: '/' },
      { text: 'GTA6', link: '/gta6/' },
      { text: '黑神话悟空', link: '/wukong/' },
      { text: '艾尔登法环', link: '/elden-ring/' },
      { text: '赛博朋克2077', link: '/cyberpunk/' },
      { text: '塞尔达传说', link: '/zelda/' }
    ],
    sidebar: {
      '/gta6/': [{ title: 'GTA6', collapsable: false, children: ['', 'map', 'money-guide', 'story-guide', 'best-vehicles', 'weapons', 'cheats', 'hidden-locations'] }],
      '/wukong/': [{ title: '黑神话悟空', collapsable: false, children: ['', 'boss-guide', 'builds', 'secrets'] }],
      '/elden-ring/': [{ title: '艾尔登法环', collapsable: false, children: ['', 'beginner-guide', 'bosses', 'builds'] }],
      '/cyberpunk/': [{ title: '赛博朋克2077', collapsable: false, children: ['', 'builds', 'romance', 'endings'] }],
      '/zelda/': [{ title: '塞尔达传说', collapsable: false, children: ['', 'shrines', 'weapons', 'cooking'] }]
    },
    footer: 'Copyright © 2026 热门游戏攻略站 | 由 VuePress 驱动'
  },
  markdown: {
    lineNumbers: true
  }
};
