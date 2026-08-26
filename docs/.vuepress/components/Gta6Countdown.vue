<template>
  <div class="gta6-cd">
    <div class="gta6-cd-head">
      <span class="gta6-cd-badge">LIVE SOON</span>
      <span class="gta6-cd-title">GTA 6: An Extended Look — Netflix 全球首映</span>
    </div>
    <p class="gta6-cd-sub">2026 年 8 月 27 日 15:00 ET（Netflix 独家先行）· 约三年来首个重大新画面，或首秀真实玩法</p>

    <div v-if="!isPast" class="gta6-cd-clock">
      <div class="gta6-cd-cell"><b>{{ d }}</b><span>天</span></div>
      <div class="gta6-cd-cell"><b>{{ h }}</b><span>时</span></div>
      <div class="gta6-cd-cell"><b>{{ m }}</b><span>分</span></div>
      <div class="gta6-cd-cell"><b>{{ s }}</b><span>秒</span></div>
    </div>
    <div v-else class="gta6-cd-live">首映已开启！去 Netflix / Rockstar 官方 YouTube 看 An Extended Look！</div>

    <table class="gta6-cd-tz">
      <thead><tr><th>地区</th><th>Netflix 首映（8/27）</th><th>YouTube 公开（晚 6 小时）</th></tr></thead>
      <tbody>
        <tr><td>美国太平洋 (PT)</td><td>8/27 12:00</td><td>8/27 18:00</td></tr>
        <tr><td>美国东部 (ET)</td><td>8/27 15:00</td><td>8/27 21:00</td></tr>
        <tr><td>英国 (BST)</td><td>8/27 20:00</td><td>8/28 02:00</td></tr>
        <tr><td>中欧 (CEST)</td><td>8/27 21:00</td><td>8/28 03:00</td></tr>
        <tr><td>中国 / 新加坡</td><td>8/28 03:00</td><td>8/28 09:00</td></tr>
        <tr><td>日本 / 韩国</td><td>8/28 04:00</td><td>8/28 10:00</td></tr>
      </tbody>
    </table>

    <p class="gta6-cd-watch">
      📺 <b>怎么看</b>：Netflix 订阅用户 8/27 15:00 ET 抢先；无 Netflix 可在 8/27 21:00 ET 于 Rockstar 官方 YouTube / rockstargames.com 免费看。<br>
      🔗 <b>官方</b>：<a href="https://www.rockstargames.com/VI" target="_blank" rel="noopener">rockstargames.com/VI</a> · 预告 / 资讯总站
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      now: Date.now(),
      // 2026-08-27 15:00 ET = 19:00 UTC (EDT = UTC-4)
      target: Date.UTC(2026, 7, 27, 19, 0, 0),
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
.gta6-cd { border:1px solid #ffb30033; border-radius:12px; padding:18px; margin:22px 0; background:linear-gradient(135deg,#fffdf5,#fff7ef); }
.gta6-cd-head { display:flex; align-items:center; gap:10px; }
.gta6-cd-badge { background:#ff9800; color:#fff; font-size:11px; font-weight:700; padding:2px 8px; border-radius:20px; letter-spacing:.5px; }
.gta6-cd-title { font-weight:700; font-size:16px; color:#e65100; }
.gta6-cd-sub { font-size:13px; color:#666; margin:6px 0 14px; }
.gta6-cd-clock { display:flex; gap:10px; margin-bottom:16px; }
.gta6-cd-cell { flex:1; text-align:center; background:#fff; border:1px solid #ffe0b2; border-radius:10px; padding:10px 4px; }
.gta6-cd-cell b { display:block; font-size:26px; color:#f57c00; font-variant-numeric:tabular-nums; }
.gta6-cd-cell span { font-size:12px; color:#888; }
.gta6-cd-live { text-align:center; font-size:16px; color:#e65100; font-weight:700; padding:18px; background:#fff; border-radius:10px; margin-bottom:16px; }
.gta6-cd-tz { width:100%; border-collapse:collapse; font-size:13px; margin-bottom:12px; }
.gta6-cd-tz th, .gta6-cd-tz td { border:1px solid #ffe0b2; padding:6px 10px; text-align:left; }
.gta6-cd-tz th { background:#fff3e0; color:#e65100; }
.gta6-cd-watch { font-size:13px; color:#555; line-height:1.6; }
.gta6-cd-watch a { color:#e65100; font-weight:600; }
</style>
