module.exports = {
  base: '/my-game-guide/',
  title: '热门游戏攻略站',
  description: 'GTA6、黑神话悟空、艾尔登法环、赛博朋克2077、塞尔达传说 — 最全中文游戏攻略大全',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: 'GTA6', link: '/gta6/' },
      { text: '黑神话悟空', link: '/wukong/' },
      { text: '艾尔登法环', link: '/elden-ring/' },
      { text: '赛博朋克2077', link: '/cyberpunk/' },
      { text: '塞尔达传说', link: '/zelda/' }
    ],
    sidebar: {
      '/gta6/': ['', 'money-guide', 'story-guide', 'best-vehicles', 'weapons', 'cheats', 'hidden-locations'],
      '/wukong/': ['', 'boss-guide', 'builds', 'secrets'],
      '/elden-ring/': ['', 'beginner-guide', 'bosses', 'builds'],
      '/cyberpunk/': ['', 'builds', 'romance', 'endings'],
      '/zelda/': ['', 'shrines', 'weapons', 'cooking']
    }
  }
};
