<template>
  <ContentBase>
    <JobPosts :posts="posts" />
  </ContentBase>
</template>

<script>
import ContentBase from '../components/ContentBase'
import JobPosts from '../components/HomePosts.vue'
//import $ from 'jquery'
import {reactive} from "vue";
export default {
  name: 'JobView',
  components: {
    ContentBase,
    JobPosts,
  },
  setup(){
    const posts = reactive({
      count: 3,
      posts: [
        {
          id: 1,
          userId: 1,
          description: "第一条招聘信息"
        },
        {
          id: 2,
          userId: 1,
          description: "第二条招聘信息"
        },
        {
          id: 3,
          userId: 1,
          description: "第三条招聘信息"
        },
        {
          id: 4,
          userId: 1,
          description: "第四条招聘信息"
        },
        {
          id: 3,
          userId: 1,
          description: "第五条招聘信息"
        },
        {
          id: 3,
          userId: 1,
          description: "第六条招聘信息"
        },
        {
          id: 3,
          userId: 1,
          description: "第七条招聘信息"
        },
        {
          id: 3,
          userId: 1,
          description: "第八条招聘信息"
        },
      ]
    });
    // $.ajax({
    //   url:"http://172.26.96.139:8888/",
    //   type: "GET",
    //   success(resp){
    //     console.log(resp);
    //     posts.posts = resp;
    //   }
    // })
    return{
      posts,
    }
  }
}
</script>

<style scoped></style>