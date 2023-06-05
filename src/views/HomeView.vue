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
    const posts = reactive({
      // count: 3,
      // posts: [
      //   {
      //     id: 1,
      //     userId: 1,
      //     content: "第一条帖子"
      //   },
      //   {
      //     id: 2,
      //     userId: 1,
      //     content: "第二条帖子"
      //   },
      //   {
      //     id: 3,
      //     userId: 1,
      //     content: "第三条帖子"
      //   },
      //   {
      //     id: 4,
      //     userId: 1,
      //     content: "第四条帖子"
      //   },
      //   {
      //     id: 3,
      //     userId: 1,
      //     content: "第五条帖子"
      //   },
      //   {
      //     id: 3,
      //     userId: 1,
      //     content: "第六条帖子"
      //   },
      //   {
      //     id: 3,
      //     userId: 1,
      //     content: "第七条帖子"
      //   },
      //   {
      //     id: 3,
      //     userId: 1,
      //     content: "第八条帖子"
      //   },
      // ]
    });
    $.ajax({
      url:"http://172.26.96.139:8888/",
      type: "GET",
      success(resp){
        console.log(resp);
        posts.posts = resp.content;
      }
    })
    return{
      posts,
    }
  }
}
</script>

<style scoped></style>