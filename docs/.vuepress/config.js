module.exports = {
  base: '/my-game-guide/',
  title: '热门游戏攻略站',
  description: 'GTA6、黑神话悟空、艾尔登法环、赛博朋克2077、塞尔达传说 — 最全中文游戏攻略大全',
  head: [
    ['script', {}, `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?896ed0566f9fdd9364a533ce8cec952a";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
      })();
    `]
  ],
  themeConfig: {
    lastUpdated: '最后更新',
    smoothScroll: true,
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
          children: ['', 'money-guide', 'story-guide', 'best-vehicles', 'weapons', 'cheats', 'hidden-locations']
        }
      ],
      '/wukong/': [
        {
          title: '黑神话悟空',
          collapsable: false,
          children: ['', 'boss-guide', 'builds', 'secrets']
        }
      ],
      '/elden-ring/': [
        {
          title: '艾尔登法环',
          collapsable: false,
          children: ['', 'beginner-guide', 'bosses', 'builds']
        }
      ],
      '/cyberpunk/': [
        {
          title: '赛博朋克 2077',
          collapsable: false,
          children: ['', 'builds', 'romance', 'endings']
        }
      ],
      '/zelda/': [
        {
          title: '塞尔达传说：王国之泪',
          collapsable: false,
          children: ['', 'shrines', 'weapons', 'cooking']
        }
      ]
    },
    footer: 'Copyright © 2026 热门游戏攻略站 | 由 VuePress 驱动'
  },
  markdown: {
    lineNumbers: true
  }
};
