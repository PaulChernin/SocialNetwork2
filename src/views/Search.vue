<template>
    <div>
        <UserCard v-for="user in usersInfo"
                  :key="user"
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
    data() {
        return {
            usersInfo: null
        }
    },
    mounted() {
        this.getUsersInfo()
    },
    methods: {
        getUsersInfo() {
            //alert('пытаюсь')
            this.axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                //alert(response)
                this.usersInfo = response.data
            })
            .catch(() => {
                alert('не получилось загрузить данные')
            })
            //alert('я пытался')
        }
    },
    watch: {
        route() {
            this.getUsersInfo()
        }
    }
}
</script>