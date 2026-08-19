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
        return new Date(time).toISOString();
      }
    }]
  ],
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '热门游戏攻略站',
      description: 'GTA6、黑神话悟空、艾尔登法环、赛博朋克2077、塞尔达传说 — 最全中文游戏攻略大全'
    },
    '/en/': {
      lang: 'en-US',
      title: 'Game Strategy Hub',
      description: 'GTA6, Black Myth Wukong, Elden Ring, Cyberpunk 2077, Zelda: TotK — Complete Strategy Guides'
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
    ['meta', { name: 'keywords', content: '游戏攻略,game guide,黑神话悟空,艾尔登法环,赛博朋克2077,塞尔达传说,GTA6,Black Myth Wukong,Elden Ring,Cyberpunk 2077,Zelda Tears of the Kingdom' }],
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
              { text: '资料库', link: '/gta6/database' }
            ]
          },
          {
            text: '黑神话悟空',
            items: [
              { text: '专区首页', link: '/wukong/' },
              { text: 'Boss攻略', link: '/wukong/boss-guide' },
              { text: '流派配装', link: '/wukong/builds' },
              { text: '法术变化', link: '/wukong/spells' },
              { text: '珍玩收集', link: '/wukong/collectibles' },
              { text: '战斗精通', link: '/wukong/combat-guide' },
              { text: '隐藏要素', link: '/wukong/secrets' },
              { text: '周年回顾', link: '/wukong/anniversary-2026' }
            ]
          },
          {
            text: '艾尔登法环',
            items: [
              { text: '专区首页', link: '/elden-ring/' },
              { text: '新手攻略', link: '/elden-ring/beginner-guide' },
              { text: 'Boss攻略', link: '/elden-ring/bosses' },
              { text: '流派配装', link: '/elden-ring/builds' },
              { text: '传说武器', link: '/elden-ring/legendary-weapons' },
              { text: 'NPC支线', link: '/elden-ring/quests' },
              { text: 'DLC开荒', link: '/elden-ring/dlc-guide' },
              { text: '🗺️ Boss地图', link: '/map.html' }
            ]
          },
          {
            text: '赛博朋克2077',
            items: [
              { text: '专区首页', link: '/cyberpunk/' },
              { text: '流派配装', link: '/cyberpunk/builds' },
              { text: '义体改造', link: '/cyberpunk/cyberware' },
              { text: '浪漫攻略', link: '/cyberpunk/romance' },
              { text: '结局攻略', link: '/cyberpunk/endings' },
              { text: '往日之影', link: '/cyberpunk/phantom-liberty' },
              { text: '成就奖杯', link: '/cyberpunk/achievements' }
            ]
          },
          {
            text: '塞尔达传说',
            items: [
              { text: '专区首页', link: '/zelda/' },
              { text: '神庙攻略', link: '/zelda/shrines' },
              { text: '武器图鉴', link: '/zelda/weapons' },
              { text: '烹饪食谱', link: '/zelda/cooking' },
              { text: '左纳乌装置', link: '/zelda/zonai-devices' },
              { text: '地底世界', link: '/zelda/depths-guide' },
              { text: '克洛格种子', link: '/zelda/korok-seeds' }
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
              children: ['', 'release-guide', 'preorder-guide', 'money-guide', 'early-guide']
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
          '/wukong/': [
            {
              title: '战斗攻略',
              collapsable: false,
              children: ['', 'boss-guide', 'builds', 'spells', 'combat-guide']
            },
            {
              title: '收集系统',
              collapsable: false,
              children: ['collectibles']
            },
            {
              title: '隐藏内容',
              collapsable: false,
              children: ['secrets']
            },
            {
              title: '周年 & 资讯',
              collapsable: false,
              children: ['anniversary-2026']
            }
          ],
          '/elden-ring/': [
            {
              title: '新手上路',
              collapsable: false,
              children: ['', 'beginner-guide']
            },
            {
              title: 'Boss与Build',
              collapsable: false,
              children: ['bosses', 'builds', 'legendary-weapons', 'quests', 'dlc-guide']
            }
          ],
          '/cyberpunk/': [
            {
              title: '构筑攻略',
              collapsable: false,
              children: ['', 'builds', 'cyberware']
            },
            {
              title: '剧情指南',
              collapsable: false,
              children: ['romance', 'endings', 'phantom-liberty']
            },
            {
              title: '成就收集',
              collapsable: false,
              children: ['achievements']
            }
          ],
          '/zelda/': [
            {
              title: '探索攻略',
              collapsable: false,
              children: ['', 'shrines', 'weapons', 'zonai-devices', 'depths-guide']
            },
            {
              title: '生存技巧',
              collapsable: false,
              children: ['cooking']
            },
            {
              title: '收集指南',
              collapsable: false,
              children: ['korok-seeds']
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
              { text: 'Database', link: '/en/gta6/database' }
            ]
          },
          {
            text: 'Wukong',
            items: [
              { text: 'Hub', link: '/en/wukong/' },
              { text: 'Boss Guide', link: '/en/wukong/boss-guide' },
              { text: 'Builds', link: '/en/wukong/builds' },
              { text: 'Spells', link: '/en/wukong/spells' },
              { text: 'Collectibles', link: '/en/wukong/collectibles' },
              { text: 'Secrets', link: '/en/wukong/secrets' }
            ]
          },
          {
            text: 'Elden Ring',
            items: [
              { text: 'Hub', link: '/en/elden-ring/' },
              { text: 'Beginner Guide', link: '/en/elden-ring/beginner-guide' },
              { text: 'Boss Guide', link: '/en/elden-ring/bosses' },
              { text: 'Builds', link: '/en/elden-ring/builds' },
              { text: 'Legendary Weapons', link: '/en/elden-ring/legendary-weapons' },
              { text: 'NPC Quests', link: '/en/elden-ring/quests' },
              { text: '🗺️ Boss Map', link: '/map.html' }
            ]
          },
          {
            text: 'Cyberpunk 2077',
            items: [
              { text: 'Hub', link: '/en/cyberpunk/' },
              { text: 'Builds', link: '/en/cyberpunk/builds' },
              { text: 'Cyberware', link: '/en/cyberpunk/cyberware' },
              { text: 'Romance', link: '/en/cyberpunk/romance' },
              { text: 'Endings', link: '/en/cyberpunk/endings' },
              { text: 'Achievements', link: '/en/cyberpunk/achievements' }
            ]
          },
          {
            text: 'Zelda: TotK',
            items: [
              { text: 'Hub', link: '/en/zelda/' },
              { text: 'Shrines', link: '/en/zelda/shrines' },
              { text: 'Weapons', link: '/en/zelda/weapons' },
              { text: 'Cooking', link: '/en/zelda/cooking' },
              { text: 'Zonai Devices', link: '/en/zelda/zonai-devices' },
              { text: 'Korok Seeds', link: '/en/zelda/korok-seeds' }
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
              children: ['', 'release-guide', 'preorder-guide', 'money-guide']
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
          '/en/wukong/': [
            {
              title: 'Combat',
              collapsable: false,
              children: ['', 'boss-guide', 'builds', 'spells']
            },
            {
              title: 'Collectibles',
              collapsable: false,
              children: ['collectibles']
            },
            {
              title: 'Secrets',
              collapsable: false,
              children: ['secrets']
            }
          ],
          '/en/elden-ring/': [
            {
              title: 'Getting Started',
              collapsable: false,
              children: ['', 'beginner-guide']
            },
            {
              title: 'Boss & Builds',
              collapsable: false,
              children: ['bosses', 'builds', 'legendary-weapons', 'quests']
            }
          ],
          '/en/cyberpunk/': [
            {
              title: 'Builds',
              collapsable: false,
              children: ['', 'builds', 'cyberware']
            },
            {
              title: 'Story',
              collapsable: false,
              children: ['romance', 'endings']
            },
            {
              title: 'Achievements',
              collapsable: false,
              children: ['achievements']
            }
          ],
          '/en/zelda/': [
            {
              title: 'Exploration',
              collapsable: false,
              children: ['', 'shrines', 'weapons', 'zonai-devices']
            },
            {
              title: 'Survival',
              collapsable: false,
              children: ['cooking']
            },
            {
              title: 'Collectibles',
              collapsable: false,
              children: ['korok-seeds']
            }
          ]
        },
        footer: 'Copyright © 2026 Game Strategy Hub | Powered by VuePress'
      }
    }
  }
};
