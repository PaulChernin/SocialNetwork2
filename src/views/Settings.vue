<template>
<div>
  <v-form>
    <v-text-field
      v-model="currentUserInfo.name"
      label="Name"
    ></v-text-field>

    <v-text-field
      v-model="currentUserInfo.photo"
      label="Photo"
    ></v-text-field>

    <v-text-field
      v-model="currentUserInfo.website"
      label="Website"
    ></v-text-field>

    <v-text-field
      v-model="currentUserInfo.email"
      label="Email"
    ></v-text-field>

    <v-text-field
      v-model="currentUserInfo.city"
      label="City"
    ></v-text-field>

    <v-text-field
      v-model="currentUserInfo.company"
      label="Company"
    ></v-text-field>

    <v-btn
      color="success"
      class="mr-4"
      @click="save"
    >
      Сохранить
    </v-btn>

    <v-btn
      class="mr-4"
      @click="exit"
    >
      Выйти
    </v-btn>

    <v-btn v-if="currentUserId == 0"
      color="error"
      class="mr-4"
      @click="setToDefault"
    >
      RESET
    </v-btn>
  </v-form>
</div>
</template>

<script>
    export default {
        name: 'Settings',
        data() {
            return {
                currentUserInfo: {},
            }
        },
        computed: {
            currentUserId() {
              return this.$store.getters.currentUserId
            }
        },
        methods: {
            getCurrentUserInfo() {
              this.currentUserInfo = this.$store.getters.currentUserInfo
            },
            save() {
                this.$store.dispatch('updateCurrentUserInfo', this.currentUserInfo)
            },
            setToDefault() {
              let template = [{"login":"admin","password":"1234","name":"Админ","website":"admin.pro","email":"admin@mail.com","city":"Москва","company":"Social Link","photo":"https://mskvienna.ru/files/news_imgs/1567890413.jpg","id":0},{"login":"kjh","password":".u","name":"Jack","company":"Sailor","id":1},{"login":"paul","password":"222","name":"Paul","company":"programmer","id":2},{"login":"acc3","password":"pass3","name":"acc3","website":"acc3.ru","email":"","city":"","company":"","photo":"https://randomuser.me/api/portraits/men/4.jpg","id":3},{"login":"acc4","password":"pass4","name":"acc4","website":"","email":"","city":"","company":"","photo":"https://randomuser.me/api/portraits/men/4.jpg","id":4}]

              this.axios.put(this.usersApiLink, template)
            },
            exit() {
              this.$store.dispatch('exit')
            }
        },
        mounted() {
            this.getCurrentUserInfo()
        },
        watch: {
            currentUserId() {
              this.getCurrentUserInfo()
            }
        }
    }
</script>