/**
 * VuePress 客户端增强
 * - 深色模式切换
 * - 搜索快捷键提示
 */
export default ({
  Vue,
  options,
  router,
  siteData
}) => {
  // ===== 深色模式 =====
  const STORAGE_KEY = 'game-guide-theme';

  // 初始化主题
  function initTheme() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else if (saved === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      // 跟随系统偏好
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
    }
  }

  // 切换主题
  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem(STORAGE_KEY, next);
    updateThemeButton();
  }

  // 更新按钮图标
  function updateThemeButton() {
    const btn = document.querySelector('.theme-toggle-btn');
    if (!btn) return;
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    btn.innerHTML = isDark ? '☀️' : '🌙';
    btn.title = isDark ? '切换亮色模式' : '切换深色模式';
  }

  // 注入主题切换按钮到导航栏
  function injectThemeButton() {
    const nav = document.querySelector('.navbar .links');
    if (!nav || document.querySelector('.theme-toggle-btn')) return;

    const btn = document.createElement('button');
    btn.className = 'theme-toggle-btn';
    btn.title = '切换深色模式';
    btn.onclick = toggleTheme;
    nav.appendChild(btn);
    updateThemeButton();
  }

  // 路由切换后重新注入按钮
  router.afterEach(() => {
    setTimeout(injectThemeButton, 300);
  });

  // 初始执行
  if (typeof window !== 'undefined') {
    initTheme();
    setTimeout(injectThemeButton, 500);

    // 监听系统主题变化
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem(STORAGE_KEY)) {
        document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
        updateThemeButton();
      }
    });

    // 键盘快捷键: Ctrl+D 切换暗色模式
    document.addEventListener('keydown', (e) => {
      if (e.ctrlKey && e.key === 'd') {
        // 不在输入框中才触发
        if (!['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName)) {
          e.preventDefault();
          toggleTheme();
        }
      }
    });
  }
};
