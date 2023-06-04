<template>
  <ContentBase>
    <HomePosts :posts="posts" />
  </ContentBase>
</template>

<script>
import ContentBase from '../components/ContentBase'
import HomePosts from '../components/HomePosts.vue'
import $ from 'jquery'
import {reactive} from "vue";
export default {
  name: 'HomeView',
  components: {
    ContentBase,
    HomePosts,
  },
  setup(){
    const posts = reactive({});
    $.ajax({
      url:"http://172.26.96.139:8888/",
      type: "GET",
      success(resp){
        console.log(resp);
        posts.posts = resp;
      }
    })
  }
}
</script>

<style scoped></style>