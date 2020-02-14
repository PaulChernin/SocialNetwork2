<template>
  <v-app id="app">
    <NavigationDrawer></NavigationDrawer>

    <v-content class="px-12 py-3">
      <v-container fluid>
        <!-- <input type="text" v-model="newId">
        <button @click="updateCurrentUser">update</button>
        {{currentUserId}}
        {{currentUserInfo}}
        <span v-if="anonymous">anonymous</span> -->

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
      newId: 0,
    }
  },
  computed: {
    currentUserId() {
      return this.$store.getters.currentUserId
    },
    currentUserInfo() {
      return this.$store.getters.currentUserInfo
    },
    anonymous() {
      return this.$store.getters.anonymous
    }
  },
  methods: {
    updateCurrentUser() {
      this.$store.dispatch('updateCurrentUser', this.newId)
    },
    updateUsersInfo() {
      this.$store.dispatch('updateUsersInfo')
    },
    updatePosts() {
      this.$store.dispatch('updatePosts')
    }
  },
  mounted() {
    this.updateUsersInfo()
    this.updatePosts()
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
