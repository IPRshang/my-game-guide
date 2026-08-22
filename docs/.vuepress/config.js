module.exports = {
  base: '/',
  markdown: {
    lineNumbers: true
  },
  plugins: [
    ['sitemap', {
      hostname: 'https://ggexplore.com/',
      exclude: ['/404.html'],
      dateFormatter: (time) => {
        const d = new Date(time);
        return isNaN(d.getTime()) ? new Date().toISOString() : d.toISOString();
      }
    }]
  ],
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '热门游戏攻略站',
      description: 'GTA6、Arknights: Endfield、Neverness to Everness — 热门游戏攻略站'
    },
    '/en/': {
      lang: 'en-US',
      title: 'Game Strategy Hub',
      description: 'GTA6, Arknights: Endfield, Neverness to Everness — Game Strategy Guides'
    },
    '/es/': {
      lang: 'es-ES',
      title: 'Guías de Videojuegos',
      description: 'GTA6, Arknights: Endfield, Neverness to Everness — Guías de estrategia'
    }
  },
  head: [
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
    // SEO meta tags
    ['meta', { name: 'robots', content: 'index, follow' }],
    ['meta', { name: 'author', content: 'Game Strategy Hub' }],
    ['meta', { name: 'keywords', content: '游戏攻略,game guide,GTA6,Arknights Endfield,Neverness to Everness,redeem codes,tier list,ggexplore' }],
    // Open Graph / Facebook
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'Game Strategy Hub | 热门游戏攻略站' }],
    ['meta', { property: 'og:image', content: 'https://ggexplore.com/og-image.png' }],
    // Twitter Card
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:site', content: '@GameStrategyHub' }],
    ['meta', { name: 'twitter:image', content: 'https://ggexplore.com/og-image.png' }],
    // Google Search Console — 把下面 content 替换为 GSC 提供的真实验证码后重新部署即可验证
    ['meta', { name: 'google-site-verification', content: 'bPUpcxFWlq1QuUGCtsb-fSoUcwQGm8T2YUjU_6PUZM4' }],
    // Google AdSense — 申请通过后，把 client 的 ca-pub-XXXX 换成你的发布商 ID，并去掉本行注释即可启用自动广告
    ['script', { src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8163601143398403', async: true, crossorigin: 'anonymous' }],
    // Baidu Site Verification
    ['meta', { name: 'baidu-site-verification', content: 'codeva-OQUtj5l4cW' }],
  ],
  themeConfig: {
    smoothScroll: true,
    locales: {
      '/': {
        label: '中文',
        selectText: '语言',
        lastUpdated: '最后更新',
        nav: [
          { text: '首页', link: '/' },
          {
            text: 'GTA6',
            items: [
              { text: '专区首页', link: '/gta6/' },
              { text: '发售配置', link: '/gta6/release-guide' },
              { text: '预购指南', link: '/gta6/preorder-guide' },
              { text: '赚钱攻略', link: '/gta6/money-guide' },
              { text: '剧情攻略', link: '/gta6/story-guide' },
              { text: '最强载具', link: '/gta6/best-vehicles' },
              { text: '角色技能', link: '/gta6/character-guide' },
              { text: '成就奖杯', link: '/gta6/achievements' },
              { text: '新手开局', link: '/gta6/early-guide' },
              { text: '资料库', link: '/gta6/database' },
              { text: '地图地点', link: '/gta6/map-guide' },
            ]
          },
          { text: 'Endfield', link: '/endfield/' },
          { text: 'NTE', link: '/nte/' },
          { text: '🔥每日推荐', link: '/daily/' },
          { text: '关于', link: '/about/' },
          { text: '隐私政策', link: '/privacy/' }
        ],
        sidebar: {
          '/gta6/': [
            {
              title: '新手上路',
              collapsable: false,
              children: ['', 'release-guide', 'preorder-guide', 'money-guide', 'early-guide', 'map-guide']
            },
            {
              title: '进阶攻略',
              collapsable: false,
              children: ['story-guide', 'best-vehicles', 'weapons', 'character-guide']
            },
            {
              title: '秘籍彩蛋',
              collapsable: false,
              children: ['cheats', 'hidden-locations']
            },
            {
              title: '收集与成就',
              collapsable: false,
              children: ['achievements']
            },
            {
              title: '资料库',
              collapsable: false,
              children: ['database']
            }
          ],
          '/endfield/': [
            {
              title: '终末地',
              collapsable: false,
              children: ['', 'codes', 'tier-list', 'beginner', 'planner']
            }
          ],
          '/nte/': [
            {
              title: 'NTE',
              collapsable: false,
              children: ['', 'codes', 'tier-list', 'beginner', 'gacha']
            }
          ]

        },
        footer: 'Copyright © 2026 热门游戏攻略站 | 由 VuePress 驱动'
      },
      '/en/': {
        label: 'English',
        selectText: 'Languages',
        lastUpdated: 'Last Updated',
        nav: [
          { text: 'Home', link: '/en/' },
          {
            text: 'GTA6',
            items: [
              { text: 'Hub', link: '/en/gta6/' },
              { text: 'Release & Specs', link: '/en/gta6/release-guide' },
              { text: 'Pre-Order Guide', link: '/en/gta6/preorder-guide' },
              { text: 'Money Guide', link: '/en/gta6/money-guide' },
              { text: 'Story Walkthrough', link: '/en/gta6/story-guide' },
              { text: 'Best Vehicles', link: '/en/gta6/best-vehicles' },
              { text: 'Character Skills', link: '/en/gta6/character-guide' },
              { text: 'Achievements', link: '/en/gta6/achievements' },
              { text: 'Database', link: '/en/gta6/database' },
              { text: 'Map & Locations', link: '/en/gta6/map-guide' },
            ]
          },
          { text: 'Arknights: Endfield', link: '/en/endfield/' },
          { text: 'Neverness to Everness', link: '/en/nte/' },
          { text: 'About', link: '/en/about/' },
          { text: 'Privacy', link: '/en/privacy/' }
        ],
        sidebar: {
          '/en/gta6/': [
            {
              title: 'Getting Started',
              collapsable: false,
              children: ['', 'release-guide', 'preorder-guide', 'money-guide', 'map-guide']
            },
            {
              title: 'Advanced',
              collapsable: false,
              children: ['story-guide', 'best-vehicles', 'weapons', 'character-guide']
            },
            {
              title: 'Secrets & Cheats',
              collapsable: false,
              children: ['cheats', 'hidden-locations']
            },
            {
              title: 'Collectibles & Achievements',
              collapsable: false,
              children: ['achievements']
            },
            {
              title: 'Database',
              collapsable: false,
              children: ['database']
            }
          ],
'/en/endfield/': [
            {
              title: 'Endfield',
              collapsable: false,
              children: ['', 'codes', 'tier-list', 'beginner', 'planner']
            }
          ],
          '/en/nte/': [
            {
              title: 'NTE',
              collapsable: false,
              children: ['', 'codes', 'tier-list', 'beginner', 'gacha']
            }
          ]
        },
        footer: 'Copyright © 2026 Game Strategy Hub | Powered by VuePress'
      },
      '/es/': {
        label: 'Español',
        selectText: 'Idiomas',
        lastUpdated: 'Última actualización',
        nav: [
          { text: 'Inicio', link: '/es/' },
          {
            text: 'GTA 6',
            items: [
              { text: 'Inicio de sección', link: '/es/gta6/' }
            ]
          },
          { text: 'Endfield', link: '/es/endfield/' },
          { text: 'NTE', link: '/es/nte/' },
          { text: 'Acerca de', link: '/es/about/' },
          { text: 'Privacidad', link: '/es/privacy/' }
        ],
        sidebar: {
          '/es/gta6/': [
            {
              title: 'GTA 6',
              collapsable: false,
              children: ['']
            }
          ],
          '/es/endfield/': [
            {
              title: 'Endfield',
              collapsable: false,
              children: ['']
            }
          ],
          '/es/nte/': [
            {
              title: 'NTE',
              collapsable: false,
              children: ['']
            }
          ]

        },
        footer: 'Copyright © 2026 Guías de Videojuegos | Impulsado por VuePress'
      }
    }
  }
};
