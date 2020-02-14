<template>
    <div>
        <UserInfo :userId="userId"></UserInfo>

        <Post v-for="(post, index) in posts"
              :key="index"
              :userName="userInfo.name"
              :text="post.text"
              :imgSrc="imgSrc"></Post>
    </div>
</template>

<script>
import UserInfo from '../components/UserInfo'
import Post from '../components/Post'

export default {
    name: 'Profile',
    props: {
        userId: String
    },
    components: {
        UserInfo,
        Post
    },
    computed: {
        imgSrc() {
            return 'https://media.pn.am/media/issue/197/297/photo/197297.jpg'
        },
        // userId() {
        //     return this.$store.getters.currentUserId
        // },
        posts() {
            return this.$store.getters.posts
        },
        userInfo() {
            return this.$store.getters.usersInfo[parseInt(this.userId)]
        }
    }
}
</script>