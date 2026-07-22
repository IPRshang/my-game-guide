module.exports = {
  title: '🔥 热门游戏攻略站',
  description: 'GTA6、上古卷轴6 最新攻略大全',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: 'GTA6 攻略', link: '/gta6/' }
    ],
    sidebar: {
      '/gta6/': [
        '',
        'money-guide'
      ]
    }
  }
};