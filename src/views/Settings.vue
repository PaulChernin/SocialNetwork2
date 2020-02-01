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
                usersApiLink: 'http://188.225.47.187/api/jsonstorage/becdad4189eaa8404ae78ea212088da8'
            }
        },
        methods: {
            save() {
                this.axios.get(this.usersApiLink)
                .then(
                    (response) => {
                        let users = response.data;
                        users[this.$route.params.id] = this.currentUserInfo
                        this.axios.put(this.usersApiLink, users)
                    }
                )
            },
            getCurrentUserInfo() {
                this.axios.get(this.usersApiLink)
                .then(
                    (response) => {
                        this.currentUserInfo = response.data[parseInt(this.$route.params.id)]
                    } 
                )
                .catch(
                    () => {
                        alert('fuck')
                    }
                )
            },
            setToDefault() {
              let template = [{"login":"admin","password":"1234","name":"Админ","website":"admin.pro","email":"admin@mail.com","city":"Москва","company":"Social Link","photo":"https://mskvienna.ru/files/news_imgs/1567890413.jpg","id":0},{"login":"kjh","password":".u","name":"Jack","company":"Sailor","id":1},{"login":"paul","password":"222","name":"Paul","company":"programmer","id":2},{"login":"acc3","password":"pass3","name":"acc3","website":"acc3.ru","email":"","city":"","company":"","photo":"https://randomuser.me/api/portraits/men/4.jpg","id":3},{"login":"acc4","password":"pass4","name":"acc4","website":"","email":"","city":"","company":"","photo":"https://randomuser.me/api/portraits/men/4.jpg","id":4}]
              //let template = {"a":"b"}
              this.axios.put(this.usersApiLink, template)
            }
        },
        mounted() {
            this.getCurrentUserInfo()
        },
    }
</script>