<template>
  <div class="ananta-cd">
    <div class="ananta-cd-head">
      <span class="ananta-cd-badge">LIVE SOON</span>
      <span class="ananta-cd-title">Ananta @ Gamescom Opening Night Live</span>
    </div>
    <p class="ananta-cd-sub">2026 年 8 月 25 日 20:00 CEST（科隆）· 约一年来首次全球新画面「Fresh Look」</p>

    <div v-if="!isPast" class="ananta-cd-clock">
      <div class="ananta-cd-cell"><b>{{ d }}</b><span>天</span></div>
      <div class="ananta-cd-cell"><b>{{ h }}</b><span>时</span></div>
      <div class="ananta-cd-cell"><b>{{ m }}</b><span>分</span></div>
      <div class="ananta-cd-cell"><b>{{ s }}</b><span>秒</span></div>
    </div>
    <div v-else class="ananta-cd-live">展示已开启，去官方频道看 Fresh Look！</div>

    <table class="ananta-cd-tz">
      <thead><tr><th>地区</th><th>本地时间</th></tr></thead>
      <tbody>
        <tr><td>美国太平洋 (PT)</td><td>8/25 11:00</td></tr>
        <tr><td>美国东部 (ET)</td><td>8/25 14:00</td></tr>
        <tr><td>英国 (BST)</td><td>8/25 19:00</td></tr>
        <tr><td>中欧 (CEST)</td><td>8/25 20:00</td></tr>
        <tr><td>中国 / 新加坡</td><td>8/26 02:00</td></tr>
        <tr><td>日本 / 韩国</td><td>8/26 03:00</td></tr>
      </tbody>
    </table>

    <p class="ananta-cd-watch">
      📺 <b>怎么看</b>：Gamescom Opening Night Live 全球直播（Geoff Keighley 主持），Ananta 片段具体时刻未定，建议从头跟。<br>
      🔗 <b>官方站</b>：<a href="https://anantagame.com/" target="_blank" rel="noopener">anantagame.com</a> · 预注册 / 最新情报汇总
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      now: Date.now(),
      // 2026-08-25 20:00 CEST = 18:00 UTC
      target: Date.UTC(2026, 7, 25, 18, 0, 0),
      timer: null
    }
  },
  computed: {
    diff () { return Math.max(0, this.target - this.now) },
    d () { return Math.floor(this.diff / 86400000) },
    h () { return Math.floor((this.diff % 86400000) / 3600000) },
    m () { return Math.floor((this.diff % 3600000) / 60000) },
    s () { return Math.floor((this.diff % 60000) / 1000) },
    isPast () { return this.diff <= 0 }
  },
  mounted () {
    this.timer = setInterval(() => { this.now = Date.now() }, 1000)
  },
  beforeDestroy () {
    if (this.timer) clearInterval(this.timer)
  }
}
</script>

<style>
.ananta-cd { border:1px solid #ff4d6d33; border-radius:12px; padding:18px; margin:22px 0; background:linear-gradient(135deg,#fff5f7,#fef9ff); }
.ananta-cd-head { display:flex; align-items:center; gap:10px; }
.ananta-cd-badge { background:#ff4d6d; color:#fff; font-size:11px; font-weight:700; padding:2px 8px; border-radius:20px; letter-spacing:.5px; }
.ananta-cd-title { font-weight:700; font-size:16px; color:#c2185b; }
.ananta-cd-sub { font-size:13px; color:#666; margin:6px 0 14px; }
.ananta-cd-clock { display:flex; gap:10px; margin-bottom:16px; }
.ananta-cd-cell { flex:1; text-align:center; background:#fff; border:1px solid #ffd6e0; border-radius:10px; padding:10px 4px; }
.ananta-cd-cell b { display:block; font-size:26px; color:#e91e63; font-variant-numeric:tabular-nums; }
.ananta-cd-cell span { font-size:12px; color:#888; }
.ananta-cd-live { text-align:center; font-size:16px; color:#e91e63; font-weight:700; padding:18px; background:#fff; border-radius:10px; margin-bottom:16px; }
.ananta-cd-tz { width:100%; border-collapse:collapse; font-size:13px; margin-bottom:12px; }
.ananta-cd-tz th, .ananta-cd-tz td { border:1px solid #ffe0e8; padding:6px 10px; text-align:left; }
.ananta-cd-tz th { background:#fff0f4; color:#c2185b; }
.ananta-cd-watch { font-size:13px; color:#555; line-height:1.6; }
.ananta-cd-watch a { color:#e91e63; font-weight:600; }
</style>
