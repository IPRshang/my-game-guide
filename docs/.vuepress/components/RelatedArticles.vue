<template>
  <div v-if="items.length" class="related-articles">
    <h2 class="related-articles__title">{{ heading }}</h2>
    <ul class="related-articles__list">
      <li v-for="item in items" :key="item.path">
        <RouterLink :to="item.path">{{ item.title }}</RouterLink>
      </li>
    </ul>
  </div>
</template>

<script>
// Auto "Related Guides" module — rendered on every content page via Layout.vue
// (page-bottom slot, above Giscus). Replaces the old hand-written
// `## Related Reading / ## 相关阅读 / ## Lecturas relacionadas` markdown blocks.
//
// Relation strategy: same language + same top-level section (e.g. /en/gta6/*),
// excluding the current page and section hubs (paths ending in "/").
// Optional curation: add `related: [/en/gta6/foo, /en/gta6/bar]` to a page's
// frontmatter to pin an exact list (titles resolved from $site.pages).

function cleanPath(p) {
  if (!p) return p
  return String(p).replace(/\.html$/, '')
}

// Normalize for override matching: strip both .html and any trailing slash so a
// curated path like `/en/gta6/foo` resolves regardless of whether the live
// page.path is `/en/gta6/foo.html`, `/en/gta6/foo/`, or `/en/gta6/foo`.
function normKey(p) {
  return String(p || '').replace(/\.html$/, '').replace(/\/+$/, '')
}

function sectionKey(p) {
  const c = cleanPath(p || '')
  const parts = c.split('/').filter(Boolean)
  if (parts.length >= 2) return '/' + parts[0] + '/' + parts[1]
  if (parts.length === 1) return '/' + parts[0]
  return '/'
}

function langOf(p) {
  const parts = (p || '').split('/').filter(Boolean)
  if (parts[0] === 'en') return 'en'
  if (parts[0] === 'es') return 'es'
  return 'zh'
}

const HEADINGS = {
  zh: '相关阅读',
  en: 'Related Guides',
  es: 'Lecturas relacionadas'
}

export default {
  name: 'RelatedArticles',
  computed: {
    heading() {
      return HEADINGS[langOf(this.$page && this.$page.path)] || HEADINGS.zh
    },
    items() {
      const pages = (this.$site && this.$site.pages) || []
      const cur = this.$page
      if (!cur) return []
      const curClean = cleanPath(cur.path)

      // --- optional frontmatter curation ---
      const override = cur.frontmatter && cur.frontmatter.related
      if (Array.isArray(override) && override.length) {
        const byNorm = {}
        pages.forEach((pg) => { byNorm[normKey(pg.path)] = pg })
        const out = []
        override.forEach((rp) => {
          const target = byNorm[normKey(rp)]
          if (target && target.title && normKey(target.path) !== normKey(cur.path)) {
            out.push({ path: target.path, title: target.title })
          }
        })
        return out.slice(0, 6)
      }

      // --- automatic: same section siblings ---
      const key = sectionKey(cur.path)
      return pages
        .filter((pg) => {
          const cp = cleanPath(pg.path)
          if (!pg.title) return false
          if (cp === curClean) return false
          if (cp.endsWith('/')) return false // skip section hubs
          if (sectionKey(pg.path) !== key) return false
          return true
        })
        .slice(0, 6)
        .map((pg) => ({ path: pg.path, title: pg.title }))
    }
  }
}
</script>

<style>
.related-articles {
  max-width: 740px;
  margin: 2.5rem auto 0;
  padding: 1.25rem 1.5rem;
  border: 1px solid var(--c-border, #eaecef);
  border-radius: 8px;
  background: var(--c-bg, #fff);
}
.related-articles__title {
  margin: 0 0 0.75rem;
  font-size: 1.1rem;
  font-weight: 600;
}
.related-articles__list {
  margin: 0;
  padding-left: 1.25rem;
}
.related-articles__list li {
  margin: 0.4rem 0;
  line-height: 1.5;
}
</style>
