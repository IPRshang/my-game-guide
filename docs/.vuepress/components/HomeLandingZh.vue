<template>
  <div class="gl-root">

    <!-- ============ 顶部导航 ============ -->
    <header class="gl-header">
      <div class="gl-wrap gl-header-inner">
        <a class="gl-brand" href="/">
          <span class="gl-mark">GG</span>
          <span class="gl-brandname">GGEXPLORE</span>
        </a>
        <nav class="gl-nav">
          <a href="/gta6/">游戏</a>
          <a href="/wukong/">攻略</a>
          <a href="/elden-ring/">流程</a>
          <a href="/cyberpunk/">资讯</a>
        </nav>
        <div class="gl-header-right">
          <a class="gl-searchicon" href="/gta6/" aria-label="搜索">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9C9DA" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><line x1="16.5" y1="16.5" x2="21" y2="21"/></svg>
          </a>
          <span class="gl-lang"><a href="/en/">EN</a> / <b>中</b></span>
          <a class="gl-cta" href="/gta6/">浏览攻略</a>
        </div>
      </div>
    </header>

    <!-- ============ 主视觉 ============ -->
    <section class="gl-hero">
      <div class="gl-aurora">
        <span class="gl-glow gl-glow-violet"></span>
        <span class="gl-glow gl-glow-cyan"></span>
        <span class="gl-glow gl-glow-magenta"></span>
      </div>
      <div class="gl-hero-content">
        <div class="gl-badge">
          <span class="gl-badge-dot"></span>
          <span class="gl-badge-text">你的终极游戏攻略中心</span>
        </div>
        <h1 class="gl-headline">纵横每一世界<br/>征服每一场冒险</h1>
        <p class="gl-subhead">深入详尽的攻略、通关流程与高手技巧，覆盖你所热爱的游戏 —— GTA6、黑神话：悟空、艾尔登法环、赛博朋克 2077 等。</p>

        <form class="gl-searchbar" onsubmit="return false;">
          <svg class="gl-search-ico" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9C9DA" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><line x1="16.5" y1="16.5" x2="21" y2="21"/></svg>
          <input class="gl-search-input" type="text" placeholder="搜索 500+ 篇攻略、流程、技巧…" />
          <a class="gl-search-btn" href="/gta6/">探索</a>
        </form>

        <div class="gl-stats">
          <div class="gl-stat"><span class="gl-stat-num">120+</span><span class="gl-stat-lbl">篇攻略</span></div>
          <div class="gl-stat"><span class="gl-stat-num">5</span><span class="gl-stat-lbl">个游戏世界</span></div>
          <div class="gl-stat"><span class="gl-stat-num">200万+</span><span class="gl-stat-lbl">玩家受益</span></div>
        </div>
      </div>

      <!-- 精选卡片 -->
      <div class="gl-wrap">
        <div class="gl-featured">
          <a class="gl-fcard gl-fcard-gta" href="/gta6/">
            <span class="gl-fcard-art"><span class="gl-fcard-emblem">GTA6</span></span>
            <span class="gl-fcard-body">
              <span class="gl-fcard-meta">动作 · 开放世界</span>
              <span class="gl-fcard-link">查看攻略 &rarr;</span>
            </span>
          </a>
          <a class="gl-fcard gl-fcard-wukong" href="/wukong/">
            <span class="gl-fcard-art"><span class="gl-fcard-emblem">黑神话：悟空</span></span>
            <span class="gl-fcard-body">
              <span class="gl-fcard-meta">动作角色扮演 · 魂类</span>
              <span class="gl-fcard-link">查看攻略 &rarr;</span>
            </span>
          </a>
          <a class="gl-fcard gl-fcard-elden" href="/elden-ring/">
            <span class="gl-fcard-art"><span class="gl-fcard-emblem">艾尔登法环</span></span>
            <span class="gl-fcard-body">
              <span class="gl-fcard-meta">动作角色扮演 · 开放世界</span>
              <span class="gl-fcard-link">查看攻略 &rarr;</span>
            </span>
          </a>
        </div>
      </div>
    </section>

    <!-- ============ 按世界浏览 ============ -->
    <section class="gl-section gl-browse">
      <div class="gl-wrap">
        <div class="gl-sec-head">
          <h2 class="gl-sec-title">按世界浏览</h2>
          <span class="gl-sec-sub">五座世界，一个中枢。</span>
        </div>
        <div class="gl-tilegrid">
          <a class="gl-tile gl-tile-gta" href="/gta6/"><span class="gl-tile-accent"></span><span class="gl-tile-name">GTA6</span><span class="gl-tile-count">38 篇攻略</span></a>
          <a class="gl-tile gl-tile-wukong" href="/wukong/"><span class="gl-tile-accent"></span><span class="gl-tile-name">黑神话：悟空</span><span class="gl-tile-count">31 篇攻略</span></a>
          <a class="gl-tile gl-tile-elden" href="/elden-ring/"><span class="gl-tile-accent"></span><span class="gl-tile-name">艾尔登法环</span><span class="gl-tile-count">27 篇攻略</span></a>
          <a class="gl-tile gl-tile-cyber" href="/cyberpunk/"><span class="gl-tile-accent"></span><span class="gl-tile-name">赛博朋克 2077</span><span class="gl-tile-count">22 篇攻略</span></a>
          <a class="gl-tile gl-tile-zelda" href="/zelda/"><span class="gl-tile-accent"></span><span class="gl-tile-name">塞尔达</span><span class="gl-tile-count">19 篇攻略</span></a>
        </div>
      </div>
    </section>

    <!-- ============ 最新攻略 ============ -->
    <section class="gl-section gl-latest">
      <div class="gl-wrap">
        <div class="gl-sec-head">
          <h2 class="gl-sec-title">最新攻略</h2>
          <a class="gl-sec-link" href="/gta6/">查看全部 &rarr;</a>
        </div>
        <div class="gl-guidegrid">
          <a class="gl-gcard" href="/gta6/money-guide">
            <span class="gl-gthumb gl-gthumb-gta"><span class="gl-chip">赚钱攻略</span></span>
            <span class="gl-gbody">
              <span class="gl-gtitle">GTA6：快速赚钱与开局资金积累</span>
              <span class="gl-gmeta">GTA6 · 阅读 12 分钟</span>
            </span>
          </a>
          <a class="gl-gcard" href="/wukong/boss-guide">
            <span class="gl-gthumb gl-gthumb-wukong"><span class="gl-chip">打法策略</span></span>
            <span class="gl-gbody">
              <span class="gl-gtitle">黑神话：悟空 —— Boss 击杀顺序指南</span>
              <span class="gl-gmeta">黑神话 · 阅读 18 分钟</span>
            </span>
          </a>
          <a class="gl-gcard" href="/elden-ring/map-fragments">
            <span class="gl-gthumb gl-gthumb-elden"><span class="gl-chip">地图总览</span></span>
            <span class="gl-gbody">
              <span class="gl-gtitle">艾尔登法环：全地图与赐福点总览</span>
              <span class="gl-gmeta">艾尔登法环 · 阅读 22 分钟</span>
            </span>
          </a>
        </div>
      </div>
    </section>

    <!-- ============ 为何选择 ============ -->
    <section class="gl-section gl-why">
      <div class="gl-wrap">
        <div class="gl-why-head">
          <h2 class="gl-sec-title">玩家为何选择 GGExplore</h2>
          <p class="gl-why-sub">由玩家打造，为玩家而生。从卡关到无敌，你需要的一切都在这里。</p>
        </div>
        <div class="gl-featgrid">
          <div class="gl-feat">
            <span class="gl-feat-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-3-6.7"/><polyline points="21 3 21 9 15 9"/></svg></span>
            <h3 class="gl-feat-title">持续更新</h3>
            <p class="gl-feat-desc">版本更新当日即同步。我们的攻略随每一次更新而进化，让你永远不会停留在过时的打法上。</p>
          </div>
          <div class="gl-feat">
            <span class="gl-feat-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg></span>
            <h3 class="gl-feat-title">步骤清晰</h3>
            <p class="gl-feat-desc">不废话、不靠猜。每一篇流程都拆解为清晰、可复现的步骤。</p>
          </div>
          <div class="gl-feat">
            <span class="gl-feat-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></span>
            <h3 class="gl-feat-title">社区验证</h3>
            <p class="gl-feat-desc">由数百万和你处境相同的玩家实测并打分的技巧，值得信赖。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ 订阅 ============ -->
    <section class="gl-section gl-news">
      <div class="gl-wrap">
        <div class="gl-news-panel">
          <div class="gl-news-left">
            <h2 class="gl-news-title">精彩更新，绝不漏接。</h2>
            <p class="gl-news-desc">每周精选新攻略、版本拆解与高手技巧，直送你的邮箱。</p>
          </div>
          <form class="gl-news-form" onsubmit="return false;">
            <input class="gl-news-input" type="email" placeholder="你@玩家邮箱.com" />
            <a class="gl-news-btn" href="/gta6/">订阅</a>
          </form>
        </div>
      </div>
    </section>

    <!-- ============ 页脚 ============ -->
    <footer class="gl-footer">
      <div class="gl-wrap gl-footer-inner">
        <div class="gl-foot-top">
          <div class="gl-foot-brand">
            <div class="gl-brand">
              <span class="gl-mark">GG</span>
              <span class="gl-brandname">GGEXPLORE</span>
            </div>
            <p class="gl-foot-tag">你的终极游戏攻略、流程与高手技巧中枢。</p>
          </div>
          <div class="gl-foot-col">
            <h4>游戏</h4>
            <a href="/gta6/">GTA6</a>
            <a href="/wukong/">黑神话：悟空</a>
            <a href="/elden-ring/">艾尔登法环</a>
          </div>
          <div class="gl-foot-col">
            <h4>探索</h4>
            <a href="/wukong/boss-guide">通关流程</a>
            <a href="/gta6/money-guide">攻略技巧</a>
            <a href="/cyberpunk/">版本更新</a>
          </div>
          <div class="gl-foot-col">
            <h4>关于</h4>
            <a href="/">关于我们</a>
            <a href="/">联系我们</a>
            <a href="/">Discord</a>
          </div>
        </div>
        <p class="gl-foot-copy">© 2026 GGExplore。由玩家打造，为玩家而生。</p>
      </div>
    </footer>

  </div>
</template>

<script>
export default {
  name: 'HomeLandingZh'
}
</script>

<style>
@import './home-landing.css';
</style>

<!-- 中文专属字体兜底：标题/品牌字优先用 Sora，无字形时回退到中文字体 -->
<style>
.gl-headline, .gl-sec-title, .gl-brandname, .gl-tile-name,
.gl-gtitle, .gl-feat-title, .gl-news-title, .gl-badge-text,
.gl-chip, .gl-stat-num, .gl-fcard-emblem {
  font-family: 'Sora', 'PingFang SC', 'Microsoft YaHei', 'Noto Sans SC', sans-serif;
}
.gl-subhead, .gl-stat-lbl, .gl-fcard-meta, .gl-gmeta, .gl-why-sub,
.gl-feat-desc, .gl-news-desc, .gl-foot-tag, .gl-foot-col a, .gl-foot-copy,
.gl-sec-sub, .gl-fcard-link, .gl-sec-link {
  font-family: 'Inter', 'PingFang SC', 'Microsoft YaHei', 'Noto Sans SC', sans-serif;
}
</style>
