<template>
    <div>
        <UserInfo :userId="userId"></UserInfo>

        <Post v-for="post in posts"
              :key="post"
              :userName="userInfo.name"
              :text="post.body"
              :imgSrc="imgSrc"></Post>
    </div>
</template>

<script>
import UserInfo from '../components/UserInfo'
import Post from '../components/Post'

export default {
    name: 'Profile',
    components: {
        UserInfo,
        Post
    },
    // data() {
    //     return {
    //         posts: null,
    //     }
    // },
    methods: {
        getPosts() {
            //alert(`https://jsonplaceholder.typicode.com/user/${this.$route.params.id}/posts`)
            this.axios.get(`https://jsonplaceholder.typicode.com/user/${this.$route.params.id}/posts`)
            .then(response => {
                //alert(response)
                this.posts = response.data
            })
            .catch(() => {
                alert('не получилось загрузить данные')
            })
        }
    },
    computed: {
        imgSrc() {
            return `https://randomuser.me/api/portraits/men/${this.$route.params.id}.jpg`
        },
        userId() {
            return this.$store.getters.currentUserId
        },
        
    }
}
</script>