<template>
  <div class="gl-root">

    <!-- ============ HEADER ============ -->
    <header class="gl-header">
      <div class="gl-wrap gl-header-inner">
        <a class="gl-brand" href="/en/">
          <span class="gl-mark">GG</span>
          <span class="gl-brandname">GGEXPLORE</span>
        </a>
        <nav class="gl-nav">
          <a href="/en/gta6/">Games</a>
          <a href="/en/wukong/">Guides</a>
          <a href="/en/elden-ring/">Walkthroughs</a>
          <a href="/en/cyberpunk/">News</a>
        </nav>
        <div class="gl-header-right">
          <a class="gl-searchicon" href="/en/gta6/" aria-label="Search">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9C9DA" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><line x1="16.5" y1="16.5" x2="21" y2="21"/></svg>
          </a>
          <span class="gl-lang"><b>EN</b> / <a href="/">中</a></span>
          <a class="gl-cta" href="/en/gta6/">Browse Guides</a>
        </div>
      </div>
    </header>

    <!-- ============ HERO ============ -->
    <section class="gl-hero">
      <div class="gl-aurora">
        <span class="gl-glow gl-glow-violet"></span>
        <span class="gl-glow gl-glow-cyan"></span>
        <span class="gl-glow gl-glow-magenta"></span>
      </div>
      <div class="gl-hero-content">
        <div class="gl-badge">
          <span class="gl-badge-dot"></span>
          <span class="gl-badge-text">YOUR ULTIMATE GAME GUIDE HUB</span>
        </div>
        <h1 class="gl-headline">Master Every World.<br/>Conquer Every Quest.</h1>
        <p class="gl-subhead">In-depth guides, walkthroughs, and pro tips for the games you love — GTA VI, Black Myth: Wukong, Elden Ring, Cyberpunk 2077, and more.</p>

        <form class="gl-searchbar" onsubmit="return false;">
          <svg class="gl-search-ico" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9C9DA" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><line x1="16.5" y1="16.5" x2="21" y2="21"/></svg>
          <input class="gl-search-input" type="text" placeholder="Search 500+ guides, walkthroughs, tips..." />
          <a class="gl-search-btn" href="/en/gta6/">Explore</a>
        </form>

        <div class="gl-stats">
          <div class="gl-stat"><span class="gl-stat-num">120+</span><span class="gl-stat-lbl">Guides</span></div>
          <div class="gl-stat"><span class="gl-stat-num">5</span><span class="gl-stat-lbl">Game Worlds</span></div>
          <div class="gl-stat"><span class="gl-stat-num">2M+</span><span class="gl-stat-lbl">Players Helped</span></div>
        </div>
      </div>

      <!-- Featured neon cards -->
      <div class="gl-wrap">
        <div class="gl-featured">
          <a class="gl-fcard gl-fcard-gta" href="/en/gta6/">
            <span class="gl-fcard-art"><span class="gl-fcard-emblem">GTA VI</span></span>
            <span class="gl-fcard-body">
              <span class="gl-fcard-meta">Action · Open World</span>
              <span class="gl-fcard-link">Read Guides &rarr;</span>
            </span>
          </a>
          <a class="gl-fcard gl-fcard-wukong" href="/en/wukong/">
            <span class="gl-fcard-art"><span class="gl-fcard-emblem">Black Myth: Wukong</span></span>
            <span class="gl-fcard-body">
              <span class="gl-fcard-meta">Action RPG · Soulslike</span>
              <span class="gl-fcard-link">Read Guides &rarr;</span>
            </span>
          </a>
          <a class="gl-fcard gl-fcard-elden" href="/en/elden-ring/">
            <span class="gl-fcard-art"><span class="gl-fcard-emblem">Elden Ring</span></span>
            <span class="gl-fcard-body">
              <span class="gl-fcard-meta">Action RPG · Open World</span>
              <span class="gl-fcard-link">Read Guides &rarr;</span>
            </span>
          </a>
        </div>
      </div>
    </section>

    <!-- ============ BROWSE BY WORLD ============ -->
    <section class="gl-section gl-browse">
      <div class="gl-wrap">
        <div class="gl-sec-head">
          <h2 class="gl-sec-title">Browse by World</h2>
          <span class="gl-sec-sub">Five worlds, one hub.</span>
        </div>
        <div class="gl-tilegrid">
          <a class="gl-tile gl-tile-gta" href="/en/gta6/"><span class="gl-tile-accent"></span><span class="gl-tile-name">GTA VI</span><span class="gl-tile-count">38 guides</span></a>
          <a class="gl-tile gl-tile-wukong" href="/en/wukong/"><span class="gl-tile-accent"></span><span class="gl-tile-name">Black Myth: Wukong</span><span class="gl-tile-count">31 guides</span></a>
          <a class="gl-tile gl-tile-elden" href="/en/elden-ring/"><span class="gl-tile-accent"></span><span class="gl-tile-name">Elden Ring</span><span class="gl-tile-count">27 guides</span></a>
          <a class="gl-tile gl-tile-cyber" href="/en/cyberpunk/"><span class="gl-tile-accent"></span><span class="gl-tile-name">Cyberpunk 2077</span><span class="gl-tile-count">22 guides</span></a>
          <a class="gl-tile gl-tile-zelda" href="/en/zelda/"><span class="gl-tile-accent"></span><span class="gl-tile-name">Zelda</span><span class="gl-tile-count">19 guides</span></a>
        </div>
      </div>
    </section>

    <!-- ============ LATEST GUIDES ============ -->
    <section class="gl-section gl-latest">
      <div class="gl-wrap">
        <div class="gl-sec-head">
          <h2 class="gl-sec-title">Latest Guides</h2>
          <a class="gl-sec-link" href="/en/gta6/">View all &rarr;</a>
        </div>
        <div class="gl-guidegrid">
          <a class="gl-gcard" href="/en/gta6/story-guide">
            <span class="gl-gthumb gl-gthumb-gta"><span class="gl-chip">WALKTHROUGH</span></span>
            <span class="gl-gbody">
              <span class="gl-gtitle">GTA VI: Best Vice City Starter Builds</span>
              <span class="gl-gmeta">GTA VI · 12 min read</span>
            </span>
          </a>
          <a class="gl-gcard" href="/en/wukong/boss-guide">
            <span class="gl-gthumb gl-gthumb-wukong"><span class="gl-chip">STRATEGY</span></span>
            <span class="gl-gbody">
              <span class="gl-gtitle">Black Myth: Wukong — Boss Order Guide</span>
              <span class="gl-gmeta">Black Myth · 18 min read</span>
            </span>
          </a>
          <a class="gl-gcard" href="/en/elden-ring/map-fragments">
            <span class="gl-gthumb gl-gthumb-elden"><span class="gl-chip">MAP</span></span>
            <span class="gl-gbody">
              <span class="gl-gtitle">Elden Ring: Complete Map &amp; Sites of Grace</span>
              <span class="gl-gmeta">Elden Ring · 22 min read</span>
            </span>
          </a>
        </div>
      </div>
    </section>

    <!-- ============ WHY GGEXPLORE ============ -->
    <section class="gl-section gl-why">
      <div class="gl-wrap">
        <div class="gl-why-head">
          <h2 class="gl-sec-title">Why players choose GGExplore</h2>
          <p class="gl-why-sub">Built by gamers, for gamers. Everything you need to go from stuck to unstoppable.</p>
        </div>
        <div class="gl-featgrid">
          <div class="gl-feat">
            <span class="gl-feat-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-3-6.7"/><polyline points="21 3 21 9 15 9"/></svg></span>
            <h3 class="gl-feat-title">Always Up to Date</h3>
            <p class="gl-feat-desc">Patch-day ready. Our guides evolve with every update so you're never following yesterday's meta.</p>
          </div>
          <div class="gl-feat">
            <span class="gl-feat-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg></span>
            <h3 class="gl-feat-title">Step-by-Step Clarity</h3>
            <p class="gl-feat-desc">No fluff, no guesswork. Every walkthrough is broken into clear, repeatable steps.</p>
          </div>
          <div class="gl-feat">
            <span class="gl-feat-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></span>
            <h3 class="gl-feat-title">Community Verified</h3>
            <p class="gl-feat-desc">Tips tested and rated by millions of players who've been exactly where you are.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ NEWSLETTER ============ -->
    <section class="gl-section gl-news">
      <div class="gl-wrap">
        <div class="gl-news-panel">
          <div class="gl-news-left">
            <h2 class="gl-news-title">Never miss a drop.</h2>
            <p class="gl-news-desc">New guides, patch breakdowns, and pro tips in your inbox every week.</p>
          </div>
          <form class="gl-news-form" onsubmit="return false;">
            <input class="gl-news-input" type="email" placeholder="you@gamer.com" />
            <a class="gl-news-btn" href="/en/gta6/">Subscribe</a>
          </form>
        </div>
      </div>
    </section>

    <!-- ============ FOOTER ============ -->
    <footer class="gl-footer">
      <div class="gl-wrap gl-footer-inner">
        <div class="gl-foot-top">
          <div class="gl-foot-brand">
            <div class="gl-brand">
              <span class="gl-mark">GG</span>
              <span class="gl-brandname">GGEXPLORE</span>
            </div>
            <p class="gl-foot-tag">Your ultimate hub for game guides, walkthroughs, and pro tips.</p>
          </div>
          <div class="gl-foot-col">
            <h4>Games</h4>
            <a href="/en/gta6/">GTA VI</a>
            <a href="/en/wukong/">Black Myth: Wukong</a>
            <a href="/en/elden-ring/">Elden Ring</a>
          </div>
          <div class="gl-foot-col">
            <h4>Explore</h4>
            <a href="/en/wukong/boss-guide">Walkthroughs</a>
            <a href="/en/gta6/money-guide">Tips &amp; Tricks</a>
            <a href="/en/cyberpunk/">Patch Notes</a>
          </div>
          <div class="gl-foot-col">
            <h4>Company</h4>
            <a href="/en/">About</a>
            <a href="/en/">Contact</a>
            <a href="/en/">Discord</a>
          </div>
        </div>
        <p class="gl-foot-copy">Copyright 2026 GGExplore. Built by gamers, for gamers.</p>
      </div>
    </footer>

  </div>
</template>

<script>
export default {
  name: 'HomeLanding'
}
</script>

<style>
@import './home-landing.css';
</style>
