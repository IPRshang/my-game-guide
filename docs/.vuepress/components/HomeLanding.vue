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
@import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Inter:wght@400;500;600;700&family=Chakra+Petch:wght@600;700&display=swap');

.gl-root {
  width: 100%;
  min-height: 100vh;
  background: #08080C;
  color: #F4F4F8;
  font-family: 'Inter', system-ui, -apple-system, "Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}

.gl-wrap { max-width: 1280px; margin: 0 auto; padding: 0 48px; }

/* ---------- HEADER ---------- */
.gl-header {
  position: sticky;
  top: 0;
  z-index: 50;
  height: 76px;
  background: #0B0B12;
  border-bottom: 1px solid rgba(255,255,255,0.06);
  backdrop-filter: blur(8px);
}
.gl-header-inner {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.gl-brand { display: flex; align-items: center; gap: 12px; text-decoration: none; }
.gl-mark {
  width: 38px; height: 38px; border-radius: 11px;
  display: flex; align-items: center; justify-content: center;
  background: linear-gradient(135deg, #8B5CF6 0%, #22D3EE 100%);
  color: #fff; font-family: 'Sora', sans-serif; font-weight: 800; font-size: 15px;
}
.gl-brandname {
  font-family: 'Sora', sans-serif; font-weight: 700; font-size: 19px;
  color: #F4F4F8; letter-spacing: 1px;
}
.gl-nav { display: flex; gap: 34px; }
.gl-nav a {
  color: #C9C9DA; text-decoration: none; font-size: 15px; font-weight: 500;
  transition: color .15s ease;
}
.gl-nav a:hover { color: #fff; }
.gl-header-right { display: flex; align-items: center; gap: 18px; }
.gl-searchicon {
  width: 40px; height: 40px; border-radius: 20px;
  display: flex; align-items: center; justify-content: center;
  background: #15151F; border: 1px solid rgba(255,255,255,0.10);
}
.gl-lang { font-size: 14px; font-weight: 600; color: #9A9AB0; }
.gl-lang b { color: #F4F4F8; }
.gl-lang a { color: #9A9AB0; text-decoration: none; }
.gl-lang a:hover { color: #fff; }
.gl-cta {
  padding: 11px 22px; border-radius: 11px; text-decoration: none;
  background: linear-gradient(135deg, #8B5CF6 0%, #22D3EE 100%);
  color: #0A0A0F; font-weight: 700; font-size: 14px;
}

/* ---------- HERO ---------- */
.gl-hero {
  position: relative;
  padding: 92px 48px 64px;
  overflow: hidden;
  text-align: center;
}
.gl-aurora { position: absolute; inset: 0; pointer-events: none; }
.gl-glow { position: absolute; border-radius: 50%; mix-blend-mode: screen; }
.gl-glow-violet {
  left: -220px; top: -180px; width: 780px; height: 780px;
  background: radial-gradient(circle, rgba(139,92,246,0.55) 0%, rgba(139,92,246,0) 70%);
}
.gl-glow-cyan {
  right: -160px; top: -140px; width: 700px; height: 700px;
  background: radial-gradient(circle, rgba(34,211,238,0.42) 0%, rgba(34,211,238,0) 70%);
}
.gl-glow-magenta {
  left: 280px; top: 360px; width: 720px; height: 720px;
  background: radial-gradient(circle, rgba(244,114,182,0.38) 0%, rgba(244,114,182,0) 70%);
}
.gl-hero-content {
  position: relative;
  z-index: 2;
  max-width: 920px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
}
.gl-badge {
  display: inline-flex; align-items: center; gap: 10px;
  padding: 8px 16px; border-radius: 999px;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.12);
}
.gl-badge-dot {
  width: 8px; height: 8px; border-radius: 4px;
  background: linear-gradient(135deg, #8B5CF6 0%, #22D3EE 100%);
}
.gl-badge-text {
  font-family: 'Chakra Petch', sans-serif; font-weight: 600;
  font-size: 12.5px; letter-spacing: 2px; color: #C9C9DA;
}
.gl-headline {
  margin: 0;
  font-family: 'Sora', sans-serif; font-weight: 800; font-size: 72px;
  line-height: 78px; text-align: center;
  background: linear-gradient(135deg, #F472B6 0%, #8B5CF6 50%, #66D9FF 100%);
  -webkit-background-clip: text; background-clip: text;
  -webkit-text-fill-color: transparent; color: transparent;
  filter: drop-shadow(0 0 60px rgba(139,92,246,0.45)) drop-shadow(0 0 24px rgba(139,92,246,0.35));
}
.gl-subhead {
  margin: 0; max-width: 680px; font-size: 19px; line-height: 30px;
  color: #A6A6BD;
}
.gl-searchbar {
  display: flex; align-items: center; gap: 12px;
  width: 560px; max-width: 100%; height: 60px; padding: 0 8px 0 20px;
  border-radius: 30px;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.12);
  backdrop-filter: blur(14px);
}
.gl-search-ico { flex: 0 0 auto; }
.gl-search-input {
  flex: 1; min-width: 0; border: none; background: transparent; outline: none;
  color: #F4F4F8; font-size: 15px; font-family: 'Inter', sans-serif;
}
.gl-search-input::placeholder { color: #7A7A92; }
.gl-search-btn {
  flex: 0 0 auto; padding: 12px 24px; border-radius: 22px; text-decoration: none;
  background: linear-gradient(135deg, #8B5CF6 0%, #22D3EE 100%);
  color: #0A0A0F; font-weight: 700; font-size: 14px;
}
.gl-stats { display: flex; gap: 52px; margin-top: 6px; }
.gl-stat { display: flex; flex-direction: column; align-items: center; gap: 4px; }
.gl-stat-num { font-family: 'Sora', sans-serif; font-weight: 800; font-size: 30px; color: #F4F4F8; }
.gl-stat-lbl { font-size: 13px; color: #8A8AA0; }

/* ---------- FEATURED CARDS ---------- */
.gl-featured {
  position: relative; z-index: 2;
  display: flex; gap: 28px; justify-content: center;
  margin-top: 56px; flex-wrap: wrap;
}
.gl-fcard {
  width: 372px; max-width: 100%; border-radius: 20px; overflow: hidden;
  display: flex; flex-direction: column; text-decoration: none;
  background: #141414; border: 1px solid rgba(255,255,255,0.08);
  transition: transform .25s ease;
}
.gl-fcard:hover { transform: translateY(-6px); }
.gl-fcard-art {
  position: relative; height: 200px; display: flex; align-items: flex-end;
  padding: 22px;
}
.gl-fcard-emblem {
  font-family: 'Sora', sans-serif; font-weight: 800; font-size: 28px;
  color: #fff; line-height: 1.1;
}
.gl-fcard-body { padding: 16px 20px; display: flex; flex-direction: column; gap: 8px; }
.gl-fcard-meta { font-size: 13.5px; color: #9A9AB0; }
.gl-fcard-link { font-size: 14px; font-weight: 700; }
.gl-fcard-gta .gl-fcard-art { background: linear-gradient(135deg, #FF2D78 0%, #FF8A3D 100%); }
.gl-fcard-gta { box-shadow: 0 14px 34px rgba(255,45,120,0.32); }
.gl-fcard-gta .gl-fcard-link { color: #FF8A3D; }
.gl-fcard-wukong .gl-fcard-art { background: linear-gradient(135deg, #FFC83D 0%, #E0533B 100%); }
.gl-fcard-wukong { box-shadow: 0 14px 34px rgba(255,200,61,0.30); }
.gl-fcard-wukong .gl-fcard-link { color: #FFC83D; }
.gl-fcard-elden .gl-fcard-art { background: linear-gradient(135deg, #E8C24B 0%, #3A6EA3 100%); }
.gl-fcard-elden { box-shadow: 0 14px 34px rgba(58,110,163,0.32); }
.gl-fcard-elden .gl-fcard-link { color: #E8C24B; }

/* ---------- SECTIONS ---------- */
.gl-section { padding: 72px 0; }
.gl-sec-head {
  display: flex; align-items: center; justify-content: space-between;
  margin-bottom: 34px;
}
.gl-sec-title {
  margin: 0; font-family: 'Sora', sans-serif; font-weight: 800; font-size: 34px;
  color: #F4F4F8;
}
.gl-sec-sub { font-size: 15px; color: #9A9AB0; }
.gl-sec-link { font-size: 15px; font-weight: 600; color: #8B5CF6; text-decoration: none; }
.gl-sec-link:hover { text-decoration: underline; }

/* Browse tiles */
.gl-browse { background: #08080C; padding: 84px 0 44px; }
.gl-tilegrid { display: flex; gap: 20px; flex-wrap: wrap; }
.gl-tile {
  width: 240px; height: 120px; border-radius: 14px; padding: 18px 20px;
  display: flex; flex-direction: column; justify-content: flex-start; gap: 8px;
  text-decoration: none; background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  transition: transform .2s ease, border-color .2s ease;
}
.gl-tile:hover { transform: translateY(-4px); border-color: rgba(255,255,255,0.18); }
.gl-tile-accent { width: 30px; height: 4px; border-radius: 2px; }
.gl-tile-name { font-family: 'Sora', sans-serif; font-weight: 700; font-size: 17px; color: #F4F4F8; }
.gl-tile-count { font-size: 12.5px; color: #8A8AA0; }
.gl-tile-gta .gl-tile-accent { background: linear-gradient(135deg, #FF2D78, #FF8A3D); }
.gl-tile-wukong .gl-tile-accent { background: linear-gradient(135deg, #FFC83D, #E0533B); }
.gl-tile-elden .gl-tile-accent { background: linear-gradient(135deg, #E8C24B, #3A6EA3); }
.gl-tile-cyber .gl-tile-accent { background: linear-gradient(135deg, #FCED09, #00F0FF); }
.gl-tile-zelda .gl-tile-accent { background: linear-gradient(135deg, #5BE37A, #2FA9E0); }

/* Latest guides */
.gl-latest { background: #0B0B12; }
.gl-guidegrid { display: flex; gap: 24px; flex-wrap: wrap; }
.gl-gcard {
  width: 410px; max-width: 100%; border-radius: 16px; overflow: hidden;
  text-decoration: none; background: #121212; border: 1px solid rgba(255,255,255,0.07);
  transition: transform .25s ease;
}
.gl-gcard:hover { transform: translateY(-6px); }
.gl-gthumb { position: relative; display: block; height: 178px; }
.gl-gthumb-gta { background: linear-gradient(135deg, #FF2D78, #FF8A3D); }
.gl-gthumb-wukong { background: linear-gradient(135deg, #FFC83D, #E0533B); }
.gl-gthumb-elden { background: linear-gradient(135deg, #E8C24B, #3A6EA3); }
.gl-chip {
  position: absolute; top: 16px; left: 16px;
  padding: 5px 12px; border-radius: 999px;
  background: rgba(0,0,0,0.4);
  font-family: 'Chakra Petch', sans-serif; font-weight: 600; font-size: 10.5px;
  letter-spacing: 1.5px; color: #fff;
}
.gl-gbody { padding: 18px 20px; display: flex; flex-direction: column; gap: 10px; }
.gl-gtitle { font-family: 'Sora', sans-serif; font-weight: 700; font-size: 18px; line-height: 24px; color: #F4F4F8; }
.gl-gmeta { font-size: 13px; color: #9A9AB0; }

/* Why */
.gl-why { background: #08080C; }
.gl-why-head { margin-bottom: 36px; }
.gl-why-sub { margin: 12px 0 0; max-width: 560px; font-size: 17px; line-height: 26px; color: #9A9AB0; }
.gl-featgrid { display: flex; gap: 24px; flex-wrap: wrap; }
.gl-feat {
  width: 410px; max-width: 100%; border-radius: 16px; padding: 26px;
  display: flex; flex-direction: column; gap: 14px;
  background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07);
}
.gl-feat-icon {
  width: 46px; height: 46px; border-radius: 13px;
  display: flex; align-items: center; justify-content: center;
  background: linear-gradient(135deg, #8B5CF6 0%, #22D3EE 100%);
}
.gl-feat-title { margin: 0; font-family: 'Sora', sans-serif; font-weight: 700; font-size: 19px; color: #F4F4F8; }
.gl-feat-desc { margin: 0; font-size: 14px; line-height: 22px; color: #9A9AB0; }

/* Newsletter */
.gl-news { background: #08080C; padding: 40px 0; }
.gl-news-panel {
  display: flex; align-items: center; justify-content: space-between; gap: 32px;
  padding: 46px 56px; border-radius: 26px;
  background: #101018; border: 1px solid rgba(255,255,255,0.08);
  box-shadow: 0 16px 48px rgba(139,92,246,0.28);
}
.gl-news-title { margin: 0 0 10px; font-family: 'Sora', sans-serif; font-weight: 800; font-size: 28px; color: #F4F4F8; }
.gl-news-desc { margin: 0; max-width: 440px; font-size: 15px; line-height: 23px; color: #9A9AB0; }
.gl-news-form { display: flex; align-items: center; gap: 12px; }
.gl-news-input {
  width: 300px; max-width: 100%; height: 52px; padding: 0 18px; border-radius: 14px;
  border: 1px solid rgba(255,255,255,0.10); background: rgba(255,255,255,0.06);
  color: #F4F4F8; font-size: 15px; font-family: 'Inter', sans-serif; outline: none;
}
.gl-news-input::placeholder { color: #7A7A92; }
.gl-news-btn {
  padding: 15px 28px; border-radius: 14px; text-decoration: none;
  background: linear-gradient(135deg, #8B5CF6 0%, #22D3EE 100%);
  color: #0A0A0F; font-weight: 700; font-size: 15px; white-space: nowrap;
}

/* Footer */
.gl-footer { background: #0B0B12; padding: 64px 0 36px; }
.gl-foot-top { display: flex; justify-content: space-between; gap: 40px; flex-wrap: wrap; }
.gl-foot-brand { max-width: 340px; }
.gl-foot-tag { margin: 16px 0 0; font-size: 14px; line-height: 22px; color: #8A8AA0; }
.gl-foot-col { display: flex; flex-direction: column; gap: 12px; }
.gl-foot-col h4 { margin: 0 0 4px; font-size: 14px; font-weight: 700; color: #F4F4F8; }
.gl-foot-col a { font-size: 14px; color: #8A8AA0; text-decoration: none; }
.gl-foot-col a:hover { color: #F4F4F8; }
.gl-foot-copy { margin: 44px 0 0; font-size: 13px; color: #6B6B82; }

/* ---------- RESPONSIVE ---------- */
@media (max-width: 960px) {
  .gl-nav { display: none; }
  .gl-wrap { padding: 0 24px; }
  .gl-hero { padding: 64px 24px 48px; }
  .gl-headline { font-size: 48px; line-height: 56px; }
  .gl-searchbar { width: 100%; }
  .gl-stats { gap: 32px; }
  .gl-featured, .gl-tilegrid, .gl-guidegrid, .gl-featgrid { justify-content: center; }
  .gl-news-panel { flex-direction: column; align-items: flex-start; padding: 32px; }
  .gl-news-form { width: 100%; }
  .gl-news-input { flex: 1; }
}
@media (max-width: 600px) {
  .gl-header-right .gl-lang { display: none; }
  .gl-headline { font-size: 36px; line-height: 44px; }
  .gl-subhead { font-size: 16px; }
  .gl-stats { gap: 20px; }
  .gl-stat-num { font-size: 24px; }
  .gl-tile { width: 100%; }
  .gl-fcard, .gl-gcard, .gl-feat { width: 100%; }
  .gl-sec-title { font-size: 26px; }
}
</style>
