<template>
  <div class="nte-gacha">
    <h3>NTE Gacha Simulator · 抽卡模拟器</h3>
    <p class="nte-hint">
      Simulate pulls for Neverness to Everness. Probabilities are
      <strong>illustrative</strong> (community-estimated) — use for fun and planning your pity.
    </p>
    <div class="nte-controls">
      <button class="nte-btn" @click="pull1">Single Pull</button>
      <button class="nte-btn nte-primary" @click="pull10">10-Pull</button>
      <button class="nte-btn nte-ghost" @click="reset">Reset</button>
    </div>
    <div class="nte-stats">
      <span class="nte-ssr">SSR: <b>{{ ssr }}</b></span>
      <span class="nte-sr">SR: <b>{{ sr }}</b></span>
      <span class="nte-r">R: <b>{{ r }}</b></span>
      <span>Total: <b>{{ total }}</b></span>
    </div>
    <ul class="nte-log">
      <li v-for="(res, i) in log" :key="i" :class="'nte-' + res.rarity.toLowerCase()">
        {{ res.rarity }} · {{ res.name }}
      </li>
    </ul>
  </div>
</template>

<script>
const POOL = {
  SSR: ['Aira', 'Miyabi', 'Ellen', 'Zhu Yuan', 'Aston'],
  SR: ['Nicole', 'Billy', 'Anby', 'Ben', 'Corin'],
  R: ['Soldier', 'Mechanic', 'Scout', 'Medic', 'Engineer']
}
export default {
  data () {
    return { ssr: 0, sr: 0, r: 0, log: [], pity: 0 }
  },
  computed: {
    total () { return this.ssr + this.sr + this.r }
  },
  methods: {
    pick (rar) {
      const arr = POOL[rar]
      return arr[Math.floor(Math.random() * arr.length)]
    },
    roll () {
      this.pity++
      // illustrative rates: 3% SSR, 15% SR, 82% R; soft pity bump at 70
      let x = Math.random()
      if (this.pity >= 70) x = x * 0.7 // bias toward higher rarity
      if (x < 0.03) { this.ssr++; this.pity = 0; return { rarity: 'SSR', name: this.pick('SSR') } }
      if (x < 0.18) { this.sr++; return { rarity: 'SR', name: this.pick('SR') } }
      this.r++; return { rarity: 'R', name: this.pick('R') }
    },
    pull1 () {
      this.log.unshift(this.roll())
      if (this.log.length > 15) this.log.pop()
    },
    pull10 () { for (let i = 0; i < 10; i++) this.pull1() },
    reset () { this.ssr = this.sr = this.r = this.pity = 0; this.log = [] }
  }
}
</script>

<style>
.nte-gacha { border: 1px solid #e0e0e0; border-radius: 8px; padding: 16px; margin: 20px 0; background: #fafafa; }
.nte-hint { font-size: 13px; color: #666; margin: 8px 0 14px; }
.nte-controls { display: flex; gap: 10px; margin-bottom: 12px; }
.nte-btn { padding: 8px 16px; border: 1px solid #ccc; background: #fff; border-radius: 6px; cursor: pointer; font-size: 14px; }
.nte-primary { background: #6c5ce7; color: #fff; border-color: #6c5ce7; }
.nte-ghost { background: transparent; }
.nte-stats { display: flex; gap: 18px; font-size: 14px; margin-bottom: 10px; }
.nte-ssr { color: #f39c12; } .nte-sr { color: #9b59b6; } .nte-r { color: #3498db; }
.nte-log { list-style: none; padding: 0; margin: 0; max-height: 240px; overflow-y: auto; font-size: 13px; }
.nte-log li { padding: 4px 8px; border-bottom: 1px solid #eee; }
.nte-log .nte-ssr { font-weight: bold; }
</style>
