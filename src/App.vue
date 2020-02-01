<template>
  <v-app id="app">
    <NavigationDrawer :currentUserIndex="currentUserId"></NavigationDrawer>

    <v-content class="px-12 py-3">
      <v-container fluid>
        <!-- {{currentUserId}} -->
        <router-view v-on:login="updateCurrentUser"/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import NavigationDrawer from './components/NavigationDrawer'

export default {
  components: {
    NavigationDrawer
  },
  data() {
    return {
      currentUserId: 1,
      //users: [],
      apiLinks: {
        users: 'http://188.225.47.187/api/jsonstorage/becdad4189eaa8404ae78ea212088da8'
      }
    }
  },
  methods: {
    updateCurrentUser(index) {
      this.currentUserId = index
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
