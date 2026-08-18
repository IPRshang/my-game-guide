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
}
