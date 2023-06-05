<template>
  <ContentBase>
    <div class="row">
      <div class="col-3">
        <UserProfileInfo @follow="follow" @unfollow="unfollow" :user="user"/>
        <WritePosts @submit_post="submit_post"/>
      </div>
      <div class="col-9">
        <UserPosts :posts="posts"/>
      </div>
    </div>
  </ContentBase>
</template>

<script>
import ContentBase from '../components/ContentBase.vue';
import UserProfileInfo from '@/components/UserProfileInfo.vue';
import UserPosts from '@/components/UserPosts.vue';
import {reactive} from 'vue';
import WritePosts from '@/components/WritePosts.vue';
import {useRoute} from "vue-router";
import $ from 'jquery';

export default {
  name: 'UserProfileView',
  components: {
    ContentBase,
    UserProfileInfo,
    UserPosts,
    WritePosts,
  },
  setup() {
    const user = reactive({});
    const route = useRoute();
    const userId = route.params.userId;
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
      // ]
    });
    //const store = useStore();

    $.ajax({
      url: "http://172.26.96.139:8888/imformation",
      //url: "https://mock.apifox.cn/m2/2679388-0-default/84875617",
      type: "GET",
      data: {
        id: userId,
      },
      success(resp) {
        user.id = resp.id;
        user.token = resp.token;
        user.email = resp.email;
        user.username = resp.name;
        user.photo = resp.avatar_url;
        user.followerCount = resp.follower_count;
        user.starContent = resp.star_content;
        user.is_followed = resp.is_followed;
      }
    });

    $.ajax({
      url: "http://172.26.96.139:8888/userpost",
      type: "GET",
      data: {
        id: userId,
      },
      success(resp) {
        console.log(resp);
        posts.posts = resp.content;
      }
    })

    const follow = () => {
      if (user.is_followed) return;
      user.is_followed = true;
      user.followerCount++;
    };


    const unfollow = () => {
      if (!user.is_followed) return;
      user.is_followed = false;
      user.followerCount--;
    };

    const submit_post = (content) => {
      posts.count++;
      posts.posts.unshift({//在最前面加一个元素
        id: posts.count,
        userId: 1,
        content: content,
      })
    };

    return {
      user,
      follow,
      unfollow,
      posts,
      submit_post,
    }
  }
}
</script>

<style scoped></style>