<template>
  <HomeLanding v-if="isLanding" />
  <ParentLayout v-else />
</template>

<script>
import ParentLayout from '@parent-theme/layouts/Layout.vue'
import HomeLanding from '../../components/HomeLanding.vue'

export default {
  name: 'CustomLayout',
  components: { ParentLayout, HomeLanding },
  computed: {
    isLanding () {
      const fm = this.$page && this.$page.frontmatter
      return !!(fm && fm.landing)
    }
  }
}
</script>
