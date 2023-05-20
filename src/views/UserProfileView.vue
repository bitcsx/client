<template>
    <ContentBase>
        <div class="row">
            <div class="col-3">
                <UserProfileInfo @follow="follow" @unfollow="unfollow" :user="user" />
                <WritePosts @submit_post="submit_post" />
            </div>
            <div class="col-9">
                <UserPosts :posts="posts" />
            </div>
        </div>
    </ContentBase>
</template>

<script>
import ContentBase from '../components/ContentBase.vue';
import UserProfileInfo from '@/components/UserProfileInfo.vue';
import UserPosts from '@/components/UserPosts.vue';
import { reactive } from 'vue';
import WritePosts from '@/components/WritePosts.vue';

export default {
    name: 'UserProfileView',
    components: {
        ContentBase,
        UserProfileInfo,
        UserPosts,
        WritePosts,
    },
    setup() {
        const user = reactive({
            id: 1,
            username: "xlx",
            lastname: "xu",
            firstname: "lingxiang",
            followerCount: 123456,
            is_followed: false,
        });

        const posts = reactive({
            count: 3,
            posts: [
                {
                    id: 1,
                    userId: 1,
                    content: "第一条帖子"
                },
                {
                    id: 2,
                    userId: 1,
                    content: "第二条帖子"
                },
                {
                    id: 3,
                    userId: 1,
                    content: "第三条帖子"
                },
            ]
        });

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