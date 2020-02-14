<template>
    <DefaultProfile :userId="userId"></DefaultProfile>
</template>

<script>
import DefaultProfile from '../components/DefaultProfile'

export default {
    name: 'MyProfile',
    components: {
        DefaultProfile
    },
    computed: {
        userId() {
            return this.$route.params.id
        }
    }
}
</script>