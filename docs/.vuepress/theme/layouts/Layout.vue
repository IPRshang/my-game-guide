<template>
  <HomeLanding v-if="isLanding && isEn" />
  <HomeLandingZh v-else-if="isLanding" />
  <ParentLayout v-else />
</template>

<script>
import ParentLayout from '@parent-theme/layouts/Layout.vue'
import HomeLanding from '../../components/HomeLanding.vue'
import HomeLandingZh from '../../components/HomeLandingZh.vue'

export default {
  name: 'CustomLayout',
  components: { ParentLayout, HomeLanding, HomeLandingZh },
  computed: {
    isLanding () {
      const fm = this.$page && this.$page.frontmatter
      return !!(fm && fm.landing)
    },
    isEn () {
      const p = this.$localePath || '/'
      return p === '/en/'
    }
  }
}
</script>
