<template>
    <div>
        <v-row class="text-left">
            <v-col cols="10">
                <h1 class="green--text text--darken-2">
                    <v-icon large color="green darken-2">mdi-account-outline</v-icon>
                    {{userInfo.name}}
                </h1>
            </v-col>
        </v-row>
        <v-row class="text-left">
            <v-col cols="2">
                <img :src="userInfo.photo" style="max-width: 100%">
            </v-col>
            <v-col cols="10" class="text-left">
                <p>
                    Веб-сайт: <a :href="'https://' + userInfo.website" target="_blank">{{userInfo.website}}</a>
                </p>
                <p>
                    E-mail: <a :href="'mailto:' + userInfo.email">{{userInfo.email}}</a>
                </p>
                <p>
                    Город: {{userInfo.city}}
                </p>
                <p>
                    Место работы: {{userInfo.company}}
                </p>
            </v-col>
        </v-row>
        
    </div>
</template>

<script>
export default {
    name: 'UserInfo',
    props: {
        userId: String
    },
    computed: {
        userInfo() {
            return this.$store.getters.usersInfo[parseInt(this.userId)]
        }
    }
}
</script>