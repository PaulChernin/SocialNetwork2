<template>
    <DefaultProfile :userId="currentUserId"></DefaultProfile>
</template>

<script>
import DefaultProfile from '../components/DefaultProfile'

export default {
    name: 'MyProfile',
    components: {
        DefaultProfile
    },
    computed: {
        currentUserId() {
            return this.$store.getters.currentUserId
        }
    }
}
</script>