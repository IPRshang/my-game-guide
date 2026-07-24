# 🗺️ GTA6 — 互动地图 · 刷钱点位 & 隐藏要素

> 基于 Vice City（迈阿密）地理坐标标注。拖动缩放地图，点击标记查看详情。

<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>

<style>
#gta6-map { height: 620px; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.2); margin: 1rem 0; z-index: 1; }
.leaflet-popup-content { font-size: 0.9rem; line-height: 1.5; }
.leaflet-popup-content strong { color: #e74c3c; }
.map-legend {
  display: flex; flex-wrap: wrap; gap: 0.8rem; padding: 1rem;
  background: var(--bg-card); border: 1px solid var(--border-color);
  border-radius: 8px; margin-bottom: 1rem;
}
.map-legend span { display: flex; align-items: center; gap: 4px; font-size: 0.85rem; }
.map-legend-dot { width: 14px; height: 14px; border-radius: 50%; border: 2px solid #fff; box-shadow: 0 1px 3px rgba(0,0,0,0.3); }
</style>

<div class="map-legend">
  <span><span class="map-legend-dot" style="background:#ffd700;"></span> 💰 刷钱点</span>
  <span><span class="map-legend-dot" style="background:#e74c3c;"></span> 🚗 隐藏载具</span>
  <span><span class="map-legend-dot" style="background:#3498db;"></span> 🏠 安全屋</span>
  <span><span class="map-legend-dot" style="background:#9b59b6;"></span> 🎭 彩蛋</span>
  <span><span class="map-legend-dot" style="background:#27ae60;"></span> 🔫 武器点</span>
</div>

<div id="gta6-map"></div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  // ===== 初始化地图（迈阿密中心） =====
  var map = L.map('gta6-map', {
    center: [25.7617, -80.1918],
    zoom: 12,
    zoomControl: true
  });

  // ===== 自定义主题瓦片 =====
  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 19
  }).addTo(map);

  // ===== 图标工厂 =====
  function createIcon(color) {
    return L.divIcon({
      className: 'custom-marker',
      html: '<div style="background:' + color + ';width:24px;height:24px;border-radius:50%;border:3px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,0.4);"></div>',
      iconSize: [24, 24],
      iconAnchor: [12, 12],
      popupAnchor: [0, -14]
    });
  }

  var iconMoney   = createIcon('#ffd700');
  var iconVehicle = createIcon('#e74c3c');
  var iconSafe    = createIcon('#3498db');
  var iconEaster  = createIcon('#9b59b6');
  var iconWeapon  = createIcon('#27ae60');

  // ===== 刷钱点位 =====
  var moneySpots = [
    { name: '🏦 Vice City 国家银行', desc: '主线抢劫任务目标之一，成功后分成$1.2M+。可重复模式刷。', latlng: [25.774, -80.193] },
    { name: '💎 海滨珠宝店', desc: '快速小抢劫，全程<5分钟，收益$80K-$150K。适合前期。', latlng: [25.791, -80.134] },
    { name: '🚁 港口集装箱走私', desc: '夜晚22:00-04:00刷新。含电子产品/武器/现金。$200K+每周。', latlng: [25.776, -80.170] },
    { name: '🏎️ 地下改装车行', desc: '偷指定车型交车，每辆$25K-$80K。每周刷新列表。', latlng: [25.790, -80.220] },
    { name: '🎰 金沙赌场', desc: '老虎机/轮盘/扑克，RNG可操作。建议本金$50K起步。', latlng: [25.770, -80.135] },
    { name: '🏢 金融区劫案', desc: '夜间突袭写字楼安保系统，-硬盘数据倒卖黑市，$100K+。', latlng: [25.772, -80.190] },
    { name: '🍃 大沼泽走私航线', desc: '气垫船 + 直升机配合。走私品包括毒品/稀有动物。', latlng: [25.855, -80.895] },
  ];

  // ===== 隐藏载具 =====
  var vehicleSpots = [
    { name: '🏎️ Grotti Cheetah Classic', desc: 'S级超跑。藏在北滩废弃仓库地下车库。', latlng: [25.805, -80.125] },
    { name: '🚁 Buzzard 武装直升机', desc: '军事基地东北角停机坪。需3星通缉潜入。', latlng: [25.738, -80.155] },
    { name: '🏍️ 邪教营地的定制摩托', desc: '沼泽区邪教营地，完成支线后可免费获取。', latlng: [25.920, -80.860] },
    { name: '🚤 Speeder 快艇（特殊涂装）', desc: '比斯坎湾西北角码头，凌晨 3-5 点刷新。', latlng: [25.730, -80.160] },
  ];

  // ===== 安全屋 =====
  var safehouses = [
    { name: '🏠 市中心顶层公寓', desc: '价格：$1.8M。360度城景，自带直升机坪和8车位。', latlng: [25.773, -80.191] },
    { name: '🏖️ 南海滩别墅', desc: '价格：$950K。海滨泳池，附近刷钱点密集。', latlng: [25.780, -80.128] },
    { name: '🏡 大沼泽安全屋', desc: '价格：$120K。低成本起步房，靠近走私路线。', latlng: [25.840, -80.650] },
  ];

  // ===== 彩蛋/隐藏要素 =====
  var easterEggs = [
    { name: '👽 沼泽 UFO 残骸', desc: '致敬 GTA5。大沼泽深处发现坠毁飞碟，拾取外星科技武器。', latlng: [25.890, -80.720] },
    { name: '👻 废弃游乐园幽灵', desc: '凌晨12点出现。调查游乐场摩天轮，触发特殊过场动画。', latlng: [25.755, -80.125] },
    { name: '🐬 海底沉船宝藏', desc: '潜水探索，含金条、钻石首饰。刷新周期 48h（游戏内）。', latlng: [25.720, -80.110] },
  ];

  // ===== 武器点 =====
  var weaponSpots = [
    { name: '🔫 军事基地军械库', desc: '步枪、狙击、火箭筒。高风险高回报。', latlng: [25.736, -80.158] },
    { name: '🗡️ 地下格斗场', desc: '特殊近战武器（电锯、武士刀）可在格斗场获胜后购买。', latlng: [25.785, -80.210] },
  ];

  // ===== 图层组 =====
  var moneyLayer   = L.layerGroup();
  var vehicleLayer = L.layerGroup();
  var safeLayer    = L.layerGroup();
  var easterLayer  = L.layerGroup();
  var weaponLayer  = L.layerGroup();

  moneySpots.forEach(function(s) {
    L.marker(s.latlng, {icon: iconMoney}).bindPopup('<strong>' + s.name + '</strong><br>' + s.desc).addTo(moneyLayer);
  });
  vehicleSpots.forEach(function(s) {
    L.marker(s.latlng, {icon: iconVehicle}).bindPopup('<strong>' + s.name + '</strong><br>' + s.desc).addTo(vehicleLayer);
  });
  safehouses.forEach(function(s) {
    L.marker(s.latlng, {icon: iconSafe}).bindPopup('<strong>' + s.name + '</strong><br>' + s.desc).addTo(safeLayer);
  });
  easterEggs.forEach(function(s) {
    L.marker(s.latlng, {icon: iconEaster}).bindPopup('<strong>' + s.name + '</strong><br>' + s.desc).addTo(easterLayer);
  });
  weaponSpots.forEach(function(s) {
    L.marker(s.latlng, {icon: iconWeapon}).bindPopup('<strong>' + s.name + '</strong><br>' + s.desc).addTo(weaponLayer);
  });

  // 全部添加到地图
  moneyLayer.addTo(map);
  vehicleLayer.addTo(map);
  safeLayer.addTo(map);
  easterLayer.addTo(map);
  weaponLayer.addTo(map);

  // ===== 图层控制器 =====
  var overlayMaps = {
    '💰 刷钱点': moneyLayer,
    '🚗 隐藏载具': vehicleLayer,
    '🏠 安全屋': safeLayer,
    '🎭 彩蛋': easterLayer,
    '🔫 武器点': weaponLayer
  };

  // 如果 leaflet 版本支持 layer control
  if (typeof L.control.layers === 'function') {
    L.control.layers(null, overlayMaps, {position: 'topright', collapsed: false}).addTo(map);
  }

  // ===== 比例尺 =====
  L.control.scale({imperial: false, position: 'bottomright'}).addTo(map);
});
</script>

---

## 📍 标记说明

| 颜色 | 类型 | 数量 | 说明 |
|------|------|:----:|------|
| 🟡 金色 | 刷钱点 | 7 | 合法/灰色收入，按收益排序 |
| 🔴 红色 | 隐藏载具 | 4 | 特殊涂装/武装载具 |
| 🔵 蓝色 | 安全屋 | 3 | 不同价位房产 |
| 🟣 紫色 | 彩蛋 | 3 | UFO、幽灵、沉船宝藏 |
| 🟢 绿色 | 武器点 | 2 | 特殊武器获取 |

::: tip 💡 使用提示
- **滚轮**缩放地图 · **拖动**移动视角 · **点击标记**查看详情
- 右上角图层控制器可**单独筛选**每类标记
- 地图基于真实迈阿密坐标，GTA6 Vice City 实际点位以游戏发售后为准
:::
