<template>
  <ContentBase>
    首页
    <HomePosts />
  </ContentBase>
</template>

<script>
import ContentBase from '../components/ContentBase'
import HomePosts from '../components/HomePosts.vue'
export default {
  name: 'HomeView',
  components: {
    ContentBase,
    HomePosts,
  }
}
</script>

<style scoped></style>