<template>
    <v-navigation-drawer color="green"
                         dark
                         expand-on-hover
                         hide-overlay
                         permanent
                         right
                         app>
      <v-list nav
              shaped
              dense>

        <v-list-item two-line>
          <v-list-item-avatar>
            <img :src="currentUserInfo.photo">
          </v-list-item-avatar>
          <v-list-item-content class="text-left">
            <v-list-item-title class="font-weight-black">SocialLink</v-list-item-title>
            <v-list-item-subtitle>{{currentUserInfo.name}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider class="my-3"></v-divider>

        <v-list-item link
                     :to="link.path"
                     :key="link.path"
                     v-for="link in links">
          <v-list-item-icon>
            <v-icon>{{link.icon}}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="text-left">{{link.label}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link
                     :to="settingsPath">
          <v-list-item-icon>
            <v-icon>mdi-settings-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="text-left">Настройки</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    name: 'NavigationDrawer',
    data() {
        return {
            usersApiLink: 'http://188.225.47.187/api/jsonstorage/becdad4189eaa8404ae78ea212088da8',
            //currentUserInfo: {},
            links: [
                {
                    label: 'Главная',
                    path: '/home',
                    icon: 'mdi-home-outline'
                },
                {
                    label: 'Профиль',
                    path: '/profile/1',
                    icon: 'mdi-account-outline'
                },
                {
                    label: 'Найти',
                    path: '/search',
                    icon: 'mdi-account-search-outline'
                },
                {
                    label: 'Войти',
                    path: '/login',
                    icon: 'mdi-account-key-outline'
                },
                {
                    label: 'Регистрация',
                    path: '/newuser',
                    icon: 'mdi-account-plus-outline'
                }
            ]
        }
    },
    computed: {
      settingsPath() {
        return '/settings/' + this.currentUserIndex
      },
      // currentUserIndex() {
      //   return this.$store.getters.currentUserId
      // }
      currentUserInfo() {
        return this.$store.getters.currentUserInfo
      }
    },
    // props: {
    //   currentUserIndex: Number
    // },
    methods: {
      // getCurrentUserInfo() {
      //   this.axios.get(this.usersApiLink)
      //   .then(
      //     (response) => {
      //       this.currentUserInfo = response.data[this.currentUserIndex]
      //     } 
      //   )
      // }
    },
    // mounted() {
    //   //alert('created!')
    //   this.getCurrentUserInfo()
    // },
    // watch: {
    //   currentUserIndex() {
    //     //alert('changed!')
    //     this.getCurrentUserInfo()
    //   }
    // }
}
</script>