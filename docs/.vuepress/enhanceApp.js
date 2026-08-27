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
}
