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
}
</script>