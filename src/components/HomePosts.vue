<template>
  <div class="card">
    <div class="card-body">
      <div v-for="post in posts.posts" :key="post.id">
        <div class="card single-post">
          <div class="card-body">
            {{ post.description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePosts',
  props: {
    posts: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>
.single-post {
  margin-bottom: 10px;
}
</style>