<template>
    <div>
        <UserInfo :userInfo="userInfo"
                  ></UserInfo>

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
    data() {
        return {
            userInfo: null,
            posts: null,
            usersApiLink: 'http://188.225.47.187/api/jsonstorage/becdad4189eaa8404ae78ea212088da8'
        }
    },
    mounted() {
        this.getUserInfo()
        this.getPosts()
    },
    methods: {
        getFUserInfo() {
            //alert('пытаюсь')
            this.axios.get('https://jsonplaceholder.typicode.com/users/' + this.$route.params.id)
            .then(response => {
                //alert(response)
                this.userInfo = response.data
            })
            .catch(() => {
                alert('не получилось загрузить данные')
            })
            //alert('я пытался')
        },
        getUserInfo() {
            this.axios.get(this.usersApiLink)
            .then(
                (response) => {
                    this.userInfo = response.data[this.$route.params.id]
                } 
            )
        },
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
            //alert('я пытался')
        }
    },
    computed: {
        imgSrc() {
            return `https://randomuser.me/api/portraits/men/${this.$route.params.id}.jpg`
        }
    },
    watch: {
        route() {
            this.getUserInfo()
            this.getPosts()
        }
    }
}
</script>