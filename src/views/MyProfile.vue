<template>
    <DefaultProfile :userId="currentUserId">
        <v-btn
            v-if="!posting"
            @click="postingOn"
            color="green"
            dark>
            Новый пост
        </v-btn>
        <v-btn
            v-if="posting"
            @click="post"
            color="green"
            dark>
            Отправить
        </v-btn>
        <v-btn
            v-if="posting"
            @click="postingOff">
            Отмена
        </v-btn>
        <v-textarea
            v-if="posting"
            filled
            v-model="newPost"></v-textarea>
    </DefaultProfile>
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
    },
    data() {
        return {
            newPost: '',
            posting: false
        }
    },
    methods: {
        postingOn() {
            this.posting = true
        },
        postingOff() {
            this.posting = false
        },
        post() {
            this.$store.dispatch('newPost', this.newPost)
            this.postingOff()
        }
    }
}
</script>