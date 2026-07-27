<template>
  <Layout>
    <template #page-bottom>
      <div class="giscus-wrapper">
        <GiscusComments />
      </div>
    </template>
  </Layout>
</template>

<script>
import Layout from '@theme/layouts/Layout.vue'

export default {
  components: { Layout }
}
</script>

<style>
.giscus-wrapper {
  max-width: 740px;
  margin: 0 auto;
  padding: 0 2rem 2rem;
}
</style>
