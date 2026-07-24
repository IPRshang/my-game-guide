module.exports = {
  base: '/my-game-guide/',
  title: '热门游戏攻略站',
  description: 'GTA6 最全中文攻略大全',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: 'GTA6', link: '/gta6/' }
    ],
    sidebar: {
      '/gta6/': ['', 'money-guide', 'story-guide', 'best-vehicles', 'weapons', 'cheats', 'hidden-locations']
    }
  }
};
