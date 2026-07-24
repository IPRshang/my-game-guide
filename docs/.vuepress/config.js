module.exports = {
  base: '/my-game-guide/',
  title: '热门游戏攻略站',
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
    nav: [
      { text: '首页', link: '/' },
      { text: 'GTA6', link: '/gta6/' }
    ],
    sidebar: {
      '/gta6/': ['', 'money-guide', 'story-guide', 'best-vehicles', 'weapons', 'cheats', 'hidden-locations']
    }
  }
};
