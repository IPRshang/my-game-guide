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
      title: 'GTA6 / Endfield / NTE / Ananta 攻略站',
      description: 'GTA6、Arknights: Endfield、Neverness to Everness、Ananta 一站式攻略站：发售时间、兑换码、节奏榜、抽卡模拟器、基地规划器、地图、泄露汇总与每日游戏推荐。'
    },
    '/en/': {
      lang: 'en-US',
      title: 'GTA6, Endfield, NTE and Ananta Guides | ggexplore.com',
      description: 'Game guides for GTA 6, Arknights: Endfield, Neverness to Everness (NTE), and Ananta: release dates, redeem codes, tier lists, gacha simulator, base planner, maps, leaks and daily picks.'
    },
    '/es/': {
      lang: 'es-ES',
      title: 'Guías de GTA6, Endfield, NTE y Ananta | ggexplore.com',
      description: 'Guías de GTA 6, Arknights: Endfield, Neverness to Everness (NTE) y Ananta: fechas de lanzamiento, códigos, tier lists, simulador, planner, mapas, filtraciones y recomendaciones diarias.'
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
    ['meta', { name: 'keywords', content: 'GTA6攻略,GTA6指南,Arknights Endfield攻略,终末地攻略,NTE攻略,Neverness to Everness攻略,Ananta攻略,兑换码,redeem codes,tier list,节奏榜,抽卡模拟器,基地规划器,gacha simulator,base planner,泄露,leaks,发售时间,release date,地图,map,每日推荐' }],
    // Open Graph / Facebook
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'ggexplore.com | Game Strategy Hub' }],
    ['meta', { property: 'og:image', content: 'https://ggexplore.com/images/og-image-v3.png' }],
    // Twitter Card
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:site', content: '@GameStrategyHub' }],
    ['meta', { name: 'twitter:image', content: 'https://ggexplore.com/images/og-image-v3.png' }],
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
              { text: '价格版本', link: '/gta6/price' },
              { text: '赚钱攻略', link: '/gta6/money-guide' },
              { text: '剧情攻略', link: '/gta6/story-guide' },
              { text: '最强载具', link: '/gta6/best-vehicles' },
              { text: '角色技能', link: '/gta6/character-guide' },
              { text: '成就奖杯', link: '/gta6/achievements' },
              { text: '新手开局', link: '/gta6/early-guide' },
              { text: '资料库', link: '/gta6/database' },
              { text: '地图地点', link: '/gta6/map-guide' },
              { text: '8/27 前瞻观看', link: '/gta6/extended-look-guide' },
              { text: '8/27 深度解读', link: '/gta6/extended-look-recap' },
              { text: '泄露汇总', link: '/gta6/leaks' },
              { text: 'PC 版状态', link: '/gta6/pc-version' },
            ]
          },
          {
            text: 'Endfield',
            items: [
              { text: '专区首页', link: '/endfield/' },
              { text: '兑换码', link: '/endfield/codes' },
              { text: '节奏榜', link: '/endfield/tier-list' },
              { text: '新手攻略', link: '/endfield/beginner' },
              { text: '基地规划器', link: '/endfield/planner' },
              { text: '经济系统', link: '/endfield/currencies' },
              { text: '工厂攻略', link: '/endfield/factory-guide' },
              { text: '战斗技巧', link: '/endfield/combat-tips' },
              { text: '版本 1.5', link: '/endfield/dreamscape-of-wind-and-snow' },
              { text: '对比鸣潮', link: '/endfield/vs-wuthering-waves' }
            ]
          },
          {
            text: 'NTE',
            items: [
              { text: '专区首页', link: '/nte/' },
              { text: '兑换码', link: '/nte/codes' },
              { text: '节奏榜', link: '/nte/tier-list' },
              { text: '新手攻略', link: '/nte/beginner' },
              { text: '版本 1.4', link: '/nte/version-1-4' },
              { text: '角色·新', link: '/nte/character-shinku' },
              { text: '角色·色', link: '/nte/character-iroi' },
              { text: '驾驶指南', link: '/nte/driving-guide' },
              { text: '资源规划', link: '/nte/stamina-resources' },
              { text: '对比鸣潮', link: '/nte/vs-wuthering-waves' }
            ]
          },
          {
            text: 'Ananta',
            items: [
              { text: '专区首页', link: '/ananta/' },
              { text: '配置要求', link: '/ananta/system-requirements' },
              { text: '预注册', link: '/ananta/pre-registration' },
              { text: 'Gamescom 复盘', link: '/ananta/gamescom-2026-recap' },
              { text: '是否跳票', link: '/ananta/is-it-cancelled' },
              { text: '商业化', link: '/ananta/monetization' },
              { text: '角色图鉴', link: '/ananta/characters' },
              { text: '三方对比', link: '/ananta/vs-nte-vs-gta6' }
            ]
          },
          {
            text: '🔥每日推荐',
            items: [
              { text: '今日推荐', link: '/daily/' },
                            { text: '悟空·两周年', link: '/daily/wukong-anniversary-2026' },
              { text: '艾尔登·玛莲妮亚', link: '/daily/elden-malenia-switch2' },
              { text: '致命躯壳 II', link: '/daily/mortal-shell-ii-guide' },
              { text: '塞尔达·全收集', link: '/daily/zelda-totk-collection/' },
// DAILY_FEATURE_INSERT
            ]
          },
          { text: '关于', link: '/about/' },
          { text: '隐私政策', link: '/privacy/' }
        ],
        sidebar: {
          '/gta6/': [
            {
              title: '新手上路',
              collapsable: false,
              children: ['', 'release-guide', 'preorder-guide', 'price', 'money-guide', 'early-guide', 'map-guide', 'extended-look-guide', 'extended-look-recap', 'leaks', 'pc-version']
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
              children: ['', 'codes', 'tier-list', 'beginner', 'planner', 'currencies', 'gacha-pity', 'datalogger', 'factory-guide', 'system-requirements', 'sandleaf-guide', 'combat-tips', 'exploration-guide', 'dreamscape-of-wind-and-snow', 'vs-wuthering-waves']
            }
          ],
          '/nte/': [
            {
              title: 'NTE',
              collapsable: false,
              children: ['', 'codes', 'tier-list', 'beginner', 'gacha', 'fix-crash', 'stamina-resources', 'team-build', 'system-requirements', 'ai-controversy', 'version-1-3', 'version-1-4', 'character-shinku', 'character-iroi', 'driving-guide', 'vs-wuthering-waves']
            }
          ],
          '/ananta/': [
            {
              title: 'Ananta',
              collapsable: false,
              children: ['', 'system-requirements', 'pre-registration', 'gamescom-2026-recap', 'is-it-cancelled', 'monetization', 'characters', 'vs-nte-vs-gta6']
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
              { text: 'Price & Editions', link: '/en/gta6/price' },
              { text: 'Money Guide', link: '/en/gta6/money-guide' },
              { text: 'Story Walkthrough', link: '/en/gta6/story-guide' },
              { text: 'Best Vehicles', link: '/en/gta6/best-vehicles' },
              { text: 'Character Skills', link: '/en/gta6/character-guide' },
              { text: 'Achievements', link: '/en/gta6/achievements' },
              { text: 'Database', link: '/en/gta6/database' },
              { text: 'Map & Locations', link: '/en/gta6/map-guide' },
              { text: 'Watch Aug 27', link: '/en/gta6/extended-look-guide' },
              { text: 'Breakdown Aug 27', link: '/en/gta6/extended-look-recap' },
              { text: 'Leaks', link: '/en/gta6/leaks' },
              { text: 'PC Status', link: '/en/gta6/pc-version' }
            ]
          },
          {
            text: 'Arknights: Endfield',
            items: [
              { text: 'Hub', link: '/en/endfield/' },
              { text: 'Codes', link: '/en/endfield/codes' },
              { text: 'Tier List', link: '/en/endfield/tier-list' },
              { text: 'Beginner', link: '/en/endfield/beginner' },
              { text: 'Planner', link: '/en/endfield/planner' },
              { text: 'Economy', link: '/en/endfield/currencies' },
              { text: 'Factory', link: '/en/endfield/factory-guide' },
              { text: 'Combat Tips', link: '/en/endfield/combat-tips' },
              { text: 'Dreamscape 1.5', link: '/en/endfield/dreamscape-of-wind-and-snow' },
              { text: 'vs Wuthering Waves', link: '/en/endfield/vs-wuthering-waves' }
            ]
          },
          {
            text: 'Neverness to Everness',
            items: [
              { text: 'Hub', link: '/en/nte/' },
              { text: 'Codes', link: '/en/nte/codes' },
              { text: 'Tier List', link: '/en/nte/tier-list' },
              { text: 'Beginner', link: '/en/nte/beginner' },
              { text: 'Version 1.4', link: '/en/nte/version-1-4' },
              { text: 'Character: Shinku', link: '/en/nte/character-shinku' },
              { text: 'Character: Iroi', link: '/en/nte/character-iroi' },
              { text: 'Driving Guide', link: '/en/nte/driving-guide' },
              { text: 'Stamina & Resources', link: '/en/nte/stamina-resources' },
              { text: 'vs Wuthering Waves', link: '/en/nte/vs-wuthering-waves' }
            ]
          },
          {
            text: 'Ananta',
            items: [
              { text: 'Hub', link: '/en/ananta/' },
              { text: 'System Requirements', link: '/en/ananta/system-requirements' },
              { text: 'Pre-Registration', link: '/en/ananta/pre-registration' },
              { text: 'Gamescom Recap', link: '/en/ananta/gamescom-2026-recap' },
              { text: 'Is It Cancelled?', link: '/en/ananta/is-it-cancelled' },
              { text: 'Monetization', link: '/en/ananta/monetization' },
              { text: 'Characters', link: '/en/ananta/characters' },
              { text: 'vs NTE vs GTA6', link: '/en/ananta/vs-nte-vs-gta6' }
            ]
          },
          { text: 'About', link: '/en/about/' },
          { text: 'Privacy', link: '/en/privacy/' }
        ],
        sidebar: {
          '/en/gta6/': [
            {
              title: 'Getting Started',
              collapsable: false,
              children: ['', 'release-guide', 'preorder-guide', 'price', 'money-guide', 'map-guide', 'extended-look-guide', 'extended-look-recap', 'leaks', 'pc-version']
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
              children: ['', 'codes', 'tier-list', 'beginner', 'planner', 'currencies', 'gacha-pity', 'datalogger', 'factory-guide', 'system-requirements', 'sandleaf-guide', 'combat-tips', 'exploration-guide', 'dreamscape-of-wind-and-snow', 'vs-wuthering-waves']
            }
          ],
          '/en/nte/': [
            {
              title: 'NTE',
              collapsable: false,
              children: ['', 'codes', 'tier-list', 'beginner', 'gacha', 'fix-crash', 'stamina-resources', 'team-build', 'system-requirements', 'ai-controversy', 'version-1-3', 'version-1-4', 'character-shinku', 'character-iroi', 'driving-guide', 'vs-wuthering-waves']
            }
          ],
          '/en/ananta/': [
            {
              title: 'Ananta',
              collapsable: false,
              children: ['', 'system-requirements', 'pre-registration', 'gamescom-2026-recap', 'is-it-cancelled', 'monetization', 'characters', 'vs-nte-vs-gta6']
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
              { text: 'Inicio de sección', link: '/es/gta6/' },
              { text: 'Guía de lanzamiento', link: '/es/gta6/release-guide' },
              { text: 'Guía de precompra', link: '/es/gta6/preorder-guide' },
              { text: '8/27 Análisis a fondo', link: '/es/gta6/extended-look-recap' }
            ]
          },
          {
            text: 'Endfield',
            items: [
              { text: 'Inicio', link: '/es/endfield/' },
              { text: 'Códigos', link: '/es/endfield/codes' },
              { text: 'Tier List', link: '/es/endfield/tier-list' },
              { text: 'Principiantes', link: '/es/endfield/beginner' },
              { text: 'Planificador', link: '/es/endfield/planner' },
              { text: 'Economía', link: '/es/endfield/currencies' },
              { text: 'Fábrica', link: '/es/endfield/factory-guide' },
              { text: 'Dreamscape 1.5', link: '/es/endfield/dreamscape-of-wind-and-snow' }
            ]
          },
          {
            text: 'NTE',
            items: [
              { text: 'Inicio', link: '/es/nte/' },
              { text: 'Códigos', link: '/es/nte/codes' },
              { text: 'Tier List', link: '/es/nte/tier-list' },
              { text: 'Principiantes', link: '/es/nte/beginner' },
              { text: 'Versión 1.4', link: '/es/nte/version-1-4' },
              { text: 'Personaje: Shinku', link: '/es/nte/character-shinku' },
              { text: 'Personaje: Iroi', link: '/es/nte/character-iroi' },
              { text: 'Conducción', link: '/es/nte/driving-guide' },
              { text: 'Recursos', link: '/es/nte/stamina-resources' },
              { text: 'vs Wuthering Waves', link: '/es/nte/vs-wuthering-waves' }
            ]
          },
          {
            text: 'Ananta',
            items: [
              { text: 'Inicio', link: '/es/ananta/' },
              { text: 'Gamescom 2026', link: '/es/ananta/gamescom-2026-recap' }
            ]
          },
          { text: 'Acerca de', link: '/es/about/' },
          { text: 'Privacidad', link: '/es/privacy/' }
        ],
        sidebar: {
          '/es/gta6/': [
            {
              title: 'GTA 6',
              collapsable: false,
              children: ['', 'release-guide', 'preorder-guide', 'price', 'money-guide', 'early-guide', 'map-guide', 'extended-look-guide', 'extended-look-recap', 'leaks', 'pc-version', 'achievements', 'best-vehicles', 'character-guide', 'story-guide', 'cheats', 'hidden-locations', 'database', 'weapons']
            }
          ],
          '/es/endfield/': [
            {
              title: 'Endfield',
              collapsable: false,
              children: ['', 'codes', 'tier-list', 'beginner', 'planner', 'currencies', 'gacha-pity', 'datalogger', 'factory-guide', 'system-requirements', 'sandleaf-guide', 'combat-tips', 'exploration-guide', 'dreamscape-of-wind-and-snow', 'vs-wuthering-waves']
            }
          ],
          '/es/nte/': [
            {
              title: 'NTE',
              collapsable: false,
              children: ['', 'codes', 'tier-list', 'beginner', 'gacha', 'fix-crash', 'stamina-resources', 'team-build', 'system-requirements', 'ai-controversy', 'version-1-3', 'version-1-4', 'character-iroi', 'character-shinku', 'driving-guide', 'vs-wuthering-waves']
            }
          ],
          '/es/ananta/': [
            {
              title: 'Ananta',
              collapsable: false,
              children: ['', 'system-requirements', 'pre-registration', 'gamescom-2026-recap', 'is-it-cancelled', 'monetization', 'characters', 'vs-nte-vs-gta6']
            }
          ]

        },
        footer: 'Copyright © 2026 Guías de Videojuegos | Impulsado por VuePress'
      }
    }
  }
};
