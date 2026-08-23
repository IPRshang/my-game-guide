<template>
  <div class="crash-helper">
    <h3>🛠️ NTE 崩溃 / 卡顿自检工具</h3>
    <p class="hint">选一个你遇到的症状，工具给出针对性的修复步骤（基于 Hotta Studio 官方配置与社区实测）。</p>
    <div class="btns">
      <button v-for="s in symptoms" :key="s.key" :class="{ active: sel === s.key }" @click="sel = s.key">{{ s.label }}</button>
    </div>
    <div class="out" v-if="current">
      <h4>{{ current.title }}</h4>
      <ol>
        <li v-for="(step, i) in current.steps" :key="i" v-html="step"></li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NteCrashHelper',
  data() {
    return {
      sel: 'launch',
      symptoms: [
        {
          key: 'launch',
          label: '启动即崩溃 / 闪退',
          title: '启动崩溃 / 闪退',
          steps: [
            '确认硬件达标：最低 i7-10700 / GTX 1660 / 16GB；低于 GTX 1660 会极不稳定。',
            '更新 GPU 驱动（N 卡 / A 卡），UE5 首发版本驱动优化至关重要。',
            '务必装在 <b>SSD</b> 上，HDD 流送跟不上会直接崩。',
            '关闭后台 Chrome / Discord / 录屏等吃内存程序（16GB 接近极限）。',
            '用启动器「修复游戏文件」校验完整性，再重开。'
          ]
        },
        {
          key: 'ingame',
          label: '游戏中反复崩溃',
          title: '游戏中反复崩溃',
          steps: [
            '若是「服务器同步错误」类崩溃：换设备登录你的 NTE 账号强制 resync，再回原设备。',
            '反复崩溃时：把画质预设调低一档，并检查 GPU 温度是否撞墙（过热会崩）。',
            '长时间游玩后性能下降多为<b>内存泄漏</b>（官方已知），整局重启即可缓解。',
            '关掉 MSI Afterburner / RTSS / 各类叠加层与 Engine.ini 修改，回到干净基线再测。'
          ]
        },
        {
          key: 'stutter',
          label: '开放世界卡顿 / 掉帧',
          title: '开放世界卡顿 / 掉帧',
          steps: [
            '第一步：把 <b>View Distance（视距）</b> 降到 Very Low——它对帧率影响最大。',
            '仍有卡顿：设置 → Others（第五个标签，三个圆圈）→ 降低 <b>Traffic（车流）</b> 密度，CPU 负担骤减。',
            '战斗掉帧：降低 Post-Processing 与 Global Illumination Mode。',
            '开启 DLSS（RTX）或 FSR（AMD）Quality 档；低/中端机开 Frame Generation。'
          ]
        },
        {
          key: 'load',
          label: '贴图慢 / 加载慢',
          title: '贴图延迟 / 加载慢',
          steps: [
            '几乎都是存储瓶颈：确认 NTE 装在 SSD，且硬盘剩余空间 > 10%（满盘写入速度暴跌）。',
            '<b>纹理</b>设为 Low/Medium，减少实时流送压力。',
            '关闭后台下载 / 云同步，给游戏留足磁盘带宽。'
          ]
        },
        {
          key: 'lag',
          label: '高延迟 / 网络卡',
          title: '高延迟 / 连接问题',
          steps: [
            'NTE 有 4 个服务器：Asia / America / Europe / SEA，选离你物理位置最近的。',
            '⚠️ 服务器间数据不互通，换服等于开新号，慎重。',
            '关掉 VPN / 代理再登；用有线网络替代 WiFi。'
          ]
        }
      ]
    }
  },
  computed: {
    current() {
      return this.symptoms.find(s => s.key === this.sel)
    }
  }
}
</script>

<style scoped>
.crash-helper { border: 1px solid #2a3550; border-radius: 12px; padding: 18px; background: #0f1626; color: #e6ecf5; max-width: 620px; margin: 20px 0; }
.crash-helper h3 { margin: 0 0 8px; color: #7dd3fc; }
.hint { font-size: 13px; color: #9fb0cc; margin: 0 0 14px; line-height: 1.6; }
.btns { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 14px; }
.btns button {
  padding: 7px 12px; border-radius: 20px; border: 1px solid #34425f;
  background: #1a2235; color: #cdd9ee; font-size: 13px; cursor: pointer; transition: .15s;
}
.btns button:hover { border-color: #7dd3fc; }
.btns button.active { background: #0e3a52; color: #7dd3fc; border-color: #7dd3fc; }
.out { padding-top: 12px; border-top: 1px dashed #2a3550; }
.out h4 { margin: 0 0 10px; color: #fff; }
.out ol { margin: 0; padding-left: 20px; }
.out li { font-size: 14px; line-height: 1.7; margin-bottom: 8px; color: #dbe5f5; }
.out li :deep(b) { color: #fbbf24; }
</style>
