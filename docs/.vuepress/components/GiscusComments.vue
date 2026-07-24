<template>
  <div class="giscus-container">
    <div class="giscus-placeholder">
      <p v-if="!enabled">
        💬 <strong>评论区</strong><br/>
        <small>需要在 GitHub 仓库 <a :href="repoUrl" target="_blank">{{ repo }}</a> 开启 Discussions 功能，并安装 <a href="https://github.com/apps/giscus" target="_blank">Giscus App</a>。</small>
      </p>
    </div>
    <component :is="'script'" v-if="enabled"
      :src="giscusScript"
      :repo="repo"
      :repo-id="repoId"
      :category="category"
      :category-id="categoryId"
      :mapping="mapping"
      :reactions-enabled="'1'"
      :emit-metadata="'0'"
      :input-position="'bottom'"
      :theme="theme"
      :lang="lang"
      :loading="'lazy'"
      crossorigin="anonymous"
      async
    />
    <div ref="giscus" class="giscus"></div>
  </div>
</template>

<script>
export default {
  name: 'GiscusComments',
  props: {
    repo: { type: String, default: 'IPRshang/my-game-guide' },
    repoId: { type: String, default: '' },
    category: { type: String, default: 'General' },
    categoryId: { type: String, default: '' },
    mapping: { type: String, default: 'pathname' },
    enabled: { type: Boolean, default: false },
    lang: { type: String, default: 'zh-CN' }
  },
  computed: {
    repoUrl() {
      return `https://github.com/${this.repo}`;
    },
    theme() {
      if (typeof window !== 'undefined') {
        return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      }
      return 'light';
    },
    giscusScript() {
      return 'https://giscus.app/client.js';
    }
  },
  mounted() {
    if (this.enabled && this.repoId && this.categoryId) {
      this.loadGiscus();
    }
  },
  methods: {
    loadGiscus() {
      const script = document.createElement('script');
      script.src = 'https://giscus.app/client.js';
      script.setAttribute('data-repo', this.repo);
      script.setAttribute('data-repo-id', this.repoId);
      script.setAttribute('data-category', this.category);
      script.setAttribute('data-category-id', this.categoryId);
      script.setAttribute('data-mapping', this.mapping);
      script.setAttribute('data-reactions-enabled', '1');
      script.setAttribute('data-emit-metadata', '0');
      script.setAttribute('data-input-position', 'bottom');
      script.setAttribute('data-theme', this.theme);
      script.setAttribute('data-lang', this.lang);
      script.setAttribute('data-loading', 'lazy');
      script.crossOrigin = 'anonymous';
      script.async = true;
      this.$refs.giscus.appendChild(script);
    }
  }
};
</script>

<style scoped>
.giscus-container {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 2px solid var(--border-color);
}

.giscus-placeholder {
  text-align: center;
  padding: 2rem;
  background: var(--bg-secondary);
  border-radius: 8px;
  color: var(--text-secondary);
}

.giscus-placeholder a {
  color: #e74c3c;
}
</style>
