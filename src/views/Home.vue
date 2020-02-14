<template>
  <div class="home">
    <v-toolbar-title>VueNet</v-toolbar-title>
    <img alt="Vue logo" src="../assets/logo.png">
    <div>
      <v-btn color="green" link to="/login">
        Войти
      </v-btn>
      <v-btn link to="/newuser">
        Зарегистрироваться
      </v-btn>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    //HelloWorld
  }
}
</script>
