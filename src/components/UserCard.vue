<template>
  <v-card
    class="mx-auto"
    max-width="344"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <!-- <div class="overline mb-4">OVERLINE</div> -->
        <v-list-item-title class="headline mb-1">{{userInfo.name}}</v-list-item-title>
        <v-list-item-subtitle>{{userInfo.company}}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar>
        <img :src="userInfo.photo">
      </v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn text
             :to="link">Перейти</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
    name: 'UserCard',
    props: {
        userInfo: {},
    },
    computed: {
        link() {
          return '/profile/' + this.userInfo.id
        },
        imgSrc() {
          return `https://randomuser.me/api/portraits/men/${this.userInfo.id}.jpg`
        }
    }
}
</script>