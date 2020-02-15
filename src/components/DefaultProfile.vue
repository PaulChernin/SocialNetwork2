<template>
    <div>
        <UserInfo :userId="userId"></UserInfo>
        <slot></slot>
        <Post v-for="(post, index) in posts"
              :key="index"
              :userName="userInfo.name"
              :text="post.text"
              :imgSrc="userInfo.photo"></Post>
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
        // imgSrc() {
        //     return this.userInfo.photo
        // },
        // userId() {
        //     return this.$store.getters.currentUserId
        // },
        posts() {
            let allPosts = this.$store.getters.posts
            let usersPosts = []
            for (let post of allPosts) {
                //alert(post + ' ' + this.userId)
                if (post.userId == this.userId) {
                    usersPosts.push(post)
                }
            }
            return usersPosts.slice().reverse()
        },
        userInfo() {
            return this.$store.getters.usersInfo[parseInt(this.userId)]
        }
    }
}
</script>