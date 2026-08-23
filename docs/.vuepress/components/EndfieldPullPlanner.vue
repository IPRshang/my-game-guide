<template>
  <div class="pull-planner">
    <h3>🎯 Endfield 抽卡规划器</h3>
    <p class="hint">基于真实保底规则（软保底 65 / 硬保底 80 / 限定保底 120）。填入你手头的 Oroberyl 与当前限定卡池已抽次数，工具算出离保底还差多少、现在该不该抽。</p>
    <div class="row">
      <label>Oroberyl 数量</label>
      <input type="number" min="0" step="500" v-model.number="oroberyl" placeholder="例如 30000" />
    </div>
    <div class="row">
      <label>当前限定卡池已抽次数（0–119）</label>
      <input type="number" min="0" max="119" v-model.number="pulls" placeholder="例如 40" />
    </div>
    <div class="result" v-if="valid">
      <div class="stat"><span>可抽发数</span><b>{{ pullsAvail }} 发</b></div>
      <div class="stat"><span>距硬保底(80)还差</span><b :class="toHard<=0?'ok':'warn'">{{ toHard }} 发 / {{ oroHard }} Oro</b></div>
      <div class="stat"><span>距限定保底(120)还差</span><b :class="toFeatured<=0?'ok':'warn'">{{ toFeatured }} 发 / {{ oroFeat }} Oro</b></div>
      <div class="stat" v-if="pulls>=65 && pulls<80"><span>当前 6★ 概率</span><b class="mid">{{ rateNow }}%</b></div>
      <div class="advice" :class="advClass">{{ advice }}</div>
    </div>
    <p class="warn-note">⚠️ 限定保底(120)不跨卡池继承！切换卡池前务必抽满 120 或放弃该角色，否则进度清零。</p>
  </div>
</template>

<script>
export default {
  name: 'EndfieldPullPlanner',
  data() {
    return {
      oroberyl: 0,
      pulls: 0
    }
  },
  computed: {
    valid() {
      return this.oroberyl >= 0 && this.pulls >= 0 && this.pulls <= 119
    },
    pullsAvail() {
      return Math.floor(this.oroberyl / 500)
    },
    toHard() {
      return Math.max(0, 80 - this.pulls)
    },
    toFeatured() {
      return Math.max(0, 120 - this.pulls)
    },
    oroHard() {
      return this.toHard * 500
    },
    oroFeat() {
      return this.toFeatured * 500
    },
    rateNow() {
      if (this.pulls < 65) return 0.8
      if (this.pulls >= 80) return 100
      return (0.8 + (this.pulls - 64) * 5).toFixed(1)
    },
    advClass() {
      if (this.toFeatured === 0) return 'ok'
      if (this.pulls >= 65 && this.pulls < 80) return 'mid'
      return 'warn'
    },
    advice() {
      if (this.toFeatured === 0) return '✅ 已达限定保底，放心抽！本卡池必出限定角色。'
      if (this.pulls < 65) return '💡 软保底未激活（6★ 概率仅 0.8%）。除非快攒够 120，否则建议继续存 Oroberyl，别零散抽。'
      if (this.pulls >= 65 && this.pulls < 80) return '🔥 软保底已激活，6★ 概率递增中！距硬保底仅 ' + this.toHard + ' 发，可趁势冲；但限定保底还差 ' + this.toFeatured + ' 发。'
      return '⚠️ 硬保底已近，但限定保底(120)还差 ' + this.toFeatured + ' 发且不继承。若不想赌 50/50，请攒够再抽。'
    }
  }
}
</script>

<style scoped>
.pull-planner {
  border: 1px solid #2a3550;
  border-radius: 12px;
  padding: 18px;
  background: #0f1626;
  color: #e6ecf5;
  max-width: 580px;
  margin: 20px 0;
}
.pull-planner h3 { margin: 0 0 8px; color: #ffce6b; }
.hint { font-size: 13px; color: #9fb0cc; margin: 0 0 14px; line-height: 1.6; }
.row { display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px; gap: 12px; }
.row label { font-size: 13px; color: #cdd9ee; flex: 1; }
.row input {
  width: 160px; padding: 7px 10px; border-radius: 8px;
  border: 1px solid #34425f; background: #1a2235; color: #fff; font-size: 14px;
}
.result { margin-top: 6px; padding-top: 12px; border-top: 1px dashed #2a3550; }
.stat { display: flex; justify-content: space-between; padding: 6px 0; font-size: 14px; border-bottom: 1px solid #1a2235; }
.stat b { color: #fff; }
.stat b.ok { color: #4ade80; }
.stat b.warn { color: #fbbf24; }
.stat b.mid { color: #fb923c; }
.advice { margin-top: 12px; padding: 10px 12px; border-radius: 8px; font-size: 13px; line-height: 1.6; }
.advice.ok { background: #16331f; color: #86efac; }
.advice.warn { background: #3a2a12; color: #fcd34d; }
.advice.mid { background: #3a2412; color: #fdba74; }
.warn-note { margin: 14px 0 0; font-size: 12px; color: #f87171; line-height: 1.5; }
</style>
