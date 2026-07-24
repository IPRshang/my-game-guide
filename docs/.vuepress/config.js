module.exports = {
  base: '/my-game-guide/',
  title: '热门游戏攻略站',
  description: 'GTA6、黑神话悟空、艾尔登法环、赛博朋克2077、塞尔达传说 — 最全中文游戏攻略大全',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    // Open Graph
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: '热门游戏攻略站 - 最全中文游戏攻略大全' }],
    ['meta', { property: 'og:description', content: 'GTA6、黑神话悟空、艾尔登法环、赛博朋克2077、塞尔达传说攻略合集' }],
    // 百度统计
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
      '/gta6/': ['', 'map', 'money-guide', 'story-guide', 'best-vehicles', 'weapons', 'cheats', 'hidden-locations'],
      '/wukong/': ['', 'boss-guide', 'builds', 'secrets'],
      '/elden-ring/': ['', 'beginner-guide', 'bosses', 'builds'],
      '/cyberpunk/': ['', 'builds', 'romance', 'endings'],
      '/zelda/': ['', 'shrines', 'weapons', 'cooking']
    }
  },
  markdown: {
    lineNumbers: true
  }
};
