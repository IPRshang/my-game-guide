<template>
  <div class="ef-planner">
    <h3>Endfield Base Planner · 基地规划器</h3>
    <p class="ef-hint">
      Adjust the quantity of each building and watch total power / population / output update live.
      Values are <strong>illustrative</strong> — replace with in-game numbers as you learn them.
    </p>
    <table class="ef-table">
      <thead>
        <tr>
          <th>Building</th>
          <th>Qty</th>
          <th>Power</th>
          <th>Pop</th>
          <th>Output</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="b in buildings" :key="b.name">
          <td>{{ b.name }}</td>
          <td class="ef-qty">
            <button class="ef-btn" @click="dec(b)">−</button>
            <span class="ef-num">{{ counts[b.name] || 0 }}</span>
            <button class="ef-btn" @click="inc(b)">+</button>
          </td>
          <td :class="{ 'ef-neg': b.power < 0 }">{{ b.power * (counts[b.name] || 0) }}</td>
          <td>{{ b.pop * (counts[b.name] || 0) }}</td>
          <td>{{ b.output }}</td>
        </tr>
      </tbody>
    </table>
    <div class="ef-totals">
      <span>Total Power: <b :class="{ 'ef-over': totalPower < 0 }">{{ totalPower }}</b></span>
      <span>Total Pop: <b>{{ totalPop }}</b></span>
    </div>
    <p v-if="totalPower < 0" class="ef-warn">
      ⚠ Power deficit! Add Reactors or cut power-hungry buildings.
    </p>
    <p v-else class="ef-ok">✓ Power balanced.</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      buildings: [
        { name: 'Reactor', power: -25, pop: 0, output: 'Generates power' },
        { name: 'Workshop', power: 12, pop: 4, output: 'Crafts parts' },
        { name: 'Farm', power: 6, pop: 2, output: 'Produces food' },
        { name: 'Lab', power: 18, pop: 1, output: 'Research speed' },
        { name: 'Storage', power: 4, pop: 0, output: 'Holds materials' }
      ],
      counts: {}
    }
  },
  computed: {
    totalPower () {
      return this.buildings.reduce((s, b) => s + b.power * (this.counts[b.name] || 0), 0)
    },
    totalPop () {
      return this.buildings.reduce((s, b) => s + b.pop * (this.counts[b.name] || 0), 0)
    }
  },
  methods: {
    inc (b) {
      this.$set(this.counts, b.name, (this.counts[b.name] || 0) + 1)
    },
    dec (b) {
      if ((this.counts[b.name] || 0) > 0) {
        this.$set(this.counts, b.name, this.counts[b.name] - 1)
      }
    }
  }
}
</script>

<style>
.ef-planner { border: 1px solid #e0e0e0; border-radius: 8px; padding: 16px; margin: 20px 0; background: #fafafa; }
.ef-hint { font-size: 13px; color: #666; margin: 8px 0 14px; }
.ef-table { width: 100%; border-collapse: collapse; font-size: 14px; }
.ef-table th, .ef-table td { padding: 8px 10px; border-bottom: 1px solid #eee; text-align: left; }
.ef-qty { white-space: nowrap; }
.ef-btn { width: 26px; height: 26px; border: 1px solid #ccc; background: #fff; border-radius: 4px; cursor: pointer; font-size: 15px; line-height: 1; }
.ef-num { display: inline-block; min-width: 24px; text-align: center; font-weight: bold; }
.ef-neg { color: #2e7d32; font-weight: bold; }
.ef-totals { display: flex; gap: 24px; margin-top: 14px; font-size: 15px; }
.ef-over { color: #c62828; }
.ef-warn { color: #c62828; font-weight: bold; margin-top: 8px; }
.ef-ok { color: #2e7d32; font-weight: bold; margin-top: 8px; }
</style>
