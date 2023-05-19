<template>
  <ContentBase>
    <JobPosts />
  </ContentBase>
</template>
  
<script>
import ContentBase from '../components/ContentBase.vue';
import JobPosts from '@/components/JobPosts.vue';

export default {
  name: 'JobView',
  components: {
    ContentBase,
    JobPosts
  }
}
</script>

<style scoped></style>