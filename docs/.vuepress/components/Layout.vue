<template>
  <HomeLanding v-if="$frontmatter.landing" />
  <Layout v-else>
    <template #page-bottom>
      <RelatedArticles />
      <div class="giscus-wrapper">
        <GiscusComments />
      </div>
    </template>
  </Layout>
</template>

<script>
import Layout from '@theme/layouts/Layout.vue'
import HomeLanding from './HomeLanding.vue'
import RelatedArticles from './RelatedArticles.vue'
import GiscusComments from './GiscusComments.vue'

export default {
  components: { Layout, HomeLanding, RelatedArticles, GiscusComments }
}
</script>

<style>
.giscus-wrapper {
  max-width: 740px;
  margin: 0 auto;
  padding: 0 2rem 2rem;
}
</style>
