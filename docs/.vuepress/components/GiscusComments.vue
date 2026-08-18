<template>
  <div class="giscus-comments">
    <div ref="giscusContainer"></div>
  </div>
</template>

<script>
export default {
  name: 'GiscusComments',
  props: {
    repo: {
      type: String,
      default: 'IPRshang/my-game-guide'
    },
    repoId: {
      type: String,
      default: ''
    },
    category: {
      type: String,
      default: 'General'
    },
    categoryId: {
      type: String,
      default: ''
    },
    mapping: {
      type: String,
      default: 'pathname'
    },
    reactionsEnabled: {
      type: String,
      default: '1'
    },
    emitMetadata: {
      type: String,
      default: '0'
    },
    inputPosition: {
      type: String,
      default: 'bottom'
    },
    theme: {
      type: String,
      default: 'preferred_color_scheme'
    },
    lang: {
      type: String,
      default: 'zh-CN'
    }
  },
  mounted() {
    this.loadGiscus()
  },
  watch: {
    lang() {
      const container = this.$refs.giscusContainer
      if (container) {
        container.innerHTML = ''
        this.loadGiscus()
      }
    },
    theme() {
      const container = this.$refs.giscusContainer
      if (container) {
        container.innerHTML = ''
        this.loadGiscus()
      }
    }
  },
  methods: {
    loadGiscus() {
      if (typeof window === 'undefined') return

      const script = document.createElement('script')
      script.src = 'https://giscus.app/client.js'
      script.setAttribute('data-repo', this.repo)
      script.setAttribute('data-repo-id', this.repoId)
      script.setAttribute('data-category', this.category)
      script.setAttribute('data-category-id', this.categoryId)
      script.setAttribute('data-mapping', this.mapping)
      script.setAttribute('data-reactions-enabled', this.reactionsEnabled)
      script.setAttribute('data-emit-metadata', this.emitMetadata)
      script.setAttribute('data-input-position', this.inputPosition)
      script.setAttribute('data-theme', this.theme)
      script.setAttribute('data-lang', this.lang)
      script.setAttribute('crossorigin', 'anonymous')
      script.async = true

      const container = this.$refs.giscusContainer
      if (container) {
        container.appendChild(script)
      }
    }
  }
}
</script>

<style scoped>
.giscus-comments {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 2px solid var(--c-border, #eaecef);
}
</style>
