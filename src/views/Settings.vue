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
            }
        },
        mounted() {
            this.getCurrentUserInfo()
        }
    }
</script>