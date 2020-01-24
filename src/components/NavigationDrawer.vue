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
            <img src="https://randomuser.me/api/portraits/men/1.jpg">
          </v-list-item-avatar>
          <v-list-item-content class="text-left">
            <v-list-item-title class="font-weight-black">SocialLink</v-list-item-title>
            <v-list-item-subtitle>Leanne Graham</v-list-item-subtitle>
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

      </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    name: 'NavigationDrawer',
    data() {
        return {
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
                    icon: 'mdi-account-search'
                }
            ]
        }
    }
}
</script>