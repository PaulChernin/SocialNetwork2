<template>
    <div>
        <UserCard v-for="(user, i) in usersInfo"
                  :key="i"
                  :userInfo="user"></UserCard>
    </div>
</template>

<script>
import UserCard from '../components/UserCard'

export default {
    name: 'Search',
    components: {
        UserCard
    },
    computed: {
        usersInfo() {
            return this.$store.getters.usersInfo
        }
    }
    // data() {
    //     return {
    //         usersInfo: null,
    //         usersApiLink: 'http://188.225.47.187/api/jsonstorage/becdad4189eaa8404ae78ea212088da8',
    //     }
    // },
    // mounted() {
    //     this.getUsersInfo()
    // },
    // methods: {
    //     // getFakeUsersInfo() {
    //     //     //alert('пытаюсь')
    //     //     this.axios.get('https://jsonplaceholder.typicode.com/users')
    //     //     .then(response => {
    //     //         //alert(response)
    //     //         this.usersInfo = response.data
    //     //     })
    //     //     .catch(() => {
    //     //         alert('не получилось загрузить данные')
    //     //     })
    //     //     //alert('я пытался')
    //     // },
    //     getUsersInfo() {
    //         this.axios.get(this.usersApiLink)
    //         .then(
    //             (response) => {
    //                 this.usersInfo = response.data
    //             }
    //         )
    //     }
        
    // },
    // watch: {
    //     route() {
    //         this.getUsersInfo()
    //     }
    // }
}
</script>