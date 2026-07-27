module.exports = {
  base: '/my-game-guide/',
  markdown: {
    lineNumbers: true
  },
  plugins: [
    ['sitemap', {
      hostname: 'https://iprshang.github.io/my-game-guide/',
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
    ['meta', { property: 'og:locale', content: 'zh_CN' }],
    ['meta', { property: 'og:image', content: 'https://iprshang.github.io/my-game-guide/og-image.svg' }],
    // Twitter Card
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:site', content: '@GameStrategyHub' }],
    ['meta', { name: 'twitter:image', content: 'https://iprshang.github.io/my-game-guide/og-image.svg' }],
    // Canonical URL
    ['link', { rel: 'canonical', href: 'https://iprshang.github.io/my-game-guide/' }],
    // Google Search Console (需替换为实际验证码)
    // ['meta', { name: 'google-site-verification', content: 'YOUR_GOOGLE_VERIFICATION_CODE' }],
    // Baidu Site Verification (需替换为实际验证码)
    // ['meta', { name: 'baidu-site-verification', content: 'code-XXXXX' }],
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
              { text: '赚钱攻略', link: '/gta6/money-guide' },
              { text: '剧情攻略', link: '/gta6/story-guide' },
              { text: '最强载具', link: '/gta6/best-vehicles' }
            ]
          },
          {
            text: '黑神话悟空',
            items: [
              { text: '专区首页', link: '/wukong/' },
              { text: 'Boss攻略', link: '/wukong/boss-guide' },
              { text: '流派配装', link: '/wukong/builds' },
              { text: '隐藏要素', link: '/wukong/secrets' }
            ]
          },
          {
            text: '艾尔登法环',
            items: [
              { text: '专区首页', link: '/elden-ring/' },
              { text: '新手攻略', link: '/elden-ring/beginner-guide' },
              { text: 'Boss攻略', link: '/elden-ring/bosses' },
              { text: '流派配装', link: '/elden-ring/builds' }
            ]
          },
          {
            text: '赛博朋克2077',
            items: [
              { text: '专区首页', link: '/cyberpunk/' },
              { text: '流派配装', link: '/cyberpunk/builds' },
              { text: '浪漫攻略', link: '/cyberpunk/romance' },
              { text: '结局攻略', link: '/cyberpunk/endings' }
            ]
          },
          {
            text: '塞尔达传说',
            items: [
              { text: '专区首页', link: '/zelda/' },
              { text: '神庙攻略', link: '/zelda/shrines' },
              { text: '武器图鉴', link: '/zelda/weapons' },
              { text: '烹饪食谱', link: '/zelda/cooking' }
            ]
          }
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
              { text: 'Money Guide', link: '/en/gta6/money-guide' },
              { text: 'Story Walkthrough', link: '/en/gta6/story-guide' },
              { text: 'Best Vehicles', link: '/en/gta6/best-vehicles' }
            ]
          },
          {
            text: 'Wukong',
            items: [
              { text: 'Hub', link: '/en/wukong/' },
              { text: 'Boss Guide', link: '/en/wukong/boss-guide' },
              { text: 'Builds', link: '/en/wukong/builds' },
              { text: 'Secrets', link: '/en/wukong/secrets' }
            ]
          },
          {
            text: 'Elden Ring',
            items: [
              { text: 'Hub', link: '/en/elden-ring/' },
              { text: 'Beginner Guide', link: '/en/elden-ring/beginner-guide' },
              { text: 'Boss Guide', link: '/en/elden-ring/bosses' },
              { text: 'Builds', link: '/en/elden-ring/builds' }
            ]
          },
          {
            text: 'Cyberpunk 2077',
            items: [
              { text: 'Hub', link: '/en/cyberpunk/' },
              { text: 'Builds', link: '/en/cyberpunk/builds' },
              { text: 'Romance', link: '/en/cyberpunk/romance' },
              { text: 'Endings', link: '/en/cyberpunk/endings' }
            ]
          },
          {
            text: 'Zelda: TotK',
            items: [
              { text: 'Hub', link: '/en/zelda/' },
              { text: 'Shrines', link: '/en/zelda/shrines' },
              { text: 'Weapons', link: '/en/zelda/weapons' },
              { text: 'Cooking', link: '/en/zelda/cooking' }
            ]
          }
        ],
        sidebar: {
          '/en/gta6/': [
            {
              title: 'Grand Theft Auto VI',
              collapsable: false,
              children: ['', 'money-guide', 'story-guide', 'best-vehicles', 'weapons', 'cheats', 'hidden-locations']
            }
          ],
          '/en/wukong/': [
            {
              title: 'Black Myth: Wukong',
              collapsable: false,
              children: ['', 'boss-guide', 'builds', 'secrets']
            }
          ],
          '/en/elden-ring/': [
            {
              title: 'Elden Ring',
              collapsable: false,
              children: ['', 'beginner-guide', 'bosses', 'builds']
            }
          ],
          '/en/cyberpunk/': [
            {
              title: 'Cyberpunk 2077',
              collapsable: false,
              children: ['', 'builds', 'romance', 'endings']
            }
          ],
          '/en/zelda/': [
            {
              title: 'Zelda: Tears of the Kingdom',
              collapsable: false,
              children: ['', 'shrines', 'weapons', 'cooking']
            }
          ]
        },
        footer: 'Copyright © 2026 Game Strategy Hub | Powered by VuePress'
      }
    }
  }
};
