// VuePress enhanceApp.js - Global component registration
import GiscusComments from './components/GiscusComments.vue'

export default ({
  Vue,
  options,
  router,
  siteData
}) => {
  // Register Giscus comments globally - use <GiscusComments/> in any markdown page
  Vue.component('GiscusComments', GiscusComments)

  // 方案 A：首访根域按系统语言自动分流到 /en/ 或 /es/
  // 仅在根首页、且尚未做过语言探测时触发；用 cookie 防反复跳；用 replace 避免历史栈循环。
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    const COOKIE_NAME = 'ggex_lang_redirect'
    const getCookie = (n) => {
      const m = document.cookie.match(new RegExp('(?:^|; )' + n + '=([^;]*)'))
      return m ? decodeURIComponent(m[1]) : ''
    }
    const setCookie = (n, v, days) => {
      const d = new Date()
      d.setTime(d.getTime() + (days || 365) * 24 * 60 * 60 * 1000)
      document.cookie = n + '=' + encodeURIComponent(v) + '; expires=' + d.toUTCString() + '; path=/'
    }
    if (window.location.pathname === '/' && !getCookie(COOKIE_NAME)) {
      setCookie(COOKIE_NAME, '1')
      const lang = (navigator.language || navigator.userLanguage || '').toLowerCase()
      if (lang.indexOf('es') === 0) {
        window.location.replace('/es/')
      } else if (lang.indexOf('en') === 0) {
        window.location.replace('/en/')
      }
      // 其他语言（含 zh-CN）停留中文，无需跳转
    }
  }

  // 方案 B：hreflang 多语言配对，帮助 Google 正确把同内容的 zh/en/es 页相互配对，避免权重分散
  // 仅客户端执行；用 siteData.pages 校验候选语言路径是否真实存在，避免指向 404 页产生错误配对。
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    const SITE_ROOT = 'https://ggexplore.com'
    const pagePaths = new Set((siteData.pages || []).map((p) => p.path))

    const toBase = (path) => {
      let base = path
      if (base.indexOf('/en/') === 0) base = base.slice(3)
      else if (base.indexOf('/es/') === 0) base = base.slice(3)
      if (base === '' || base === '/') base = '/'
      return base
    }

    const applyHreflang = (route) => {
      const base = toBase(route.path)
      const variants = {
        'x-default': '/',
        'zh-CN': base,
        en: '/en' + (base === '/' ? '/' : base),
        es: '/es' + (base === '/' ? '/' : base)
      }
      const valid = { 'x-default': SITE_ROOT + '/' }
      if (pagePaths.has(variants['zh-CN'])) valid['zh-CN'] = SITE_ROOT + variants['zh-CN']
      if (pagePaths.has(variants.en)) valid.en = SITE_ROOT + variants.en
      if (pagePaths.has(variants.es)) valid.es = SITE_ROOT + variants.es

      document.head.querySelectorAll('link[data-hreflang]').forEach((el) => el.remove())
      Object.keys(valid).forEach((lang) => {
        const link = document.createElement('link')
        link.rel = 'alternate'
        link.hreflang = lang
        link.href = valid[lang]
        link.setAttribute('data-hreflang', '')
        document.head.appendChild(link)
      })
    }

    router.afterEach((to) => applyHreflang(to))
    applyHreflang(router.currentRoute)
  }
}
