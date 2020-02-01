<template>
    <div class="d-flex justify-center">
        <v-card width="600px" class="mt-12 pa-10">
            <v-card-title>
                Создайте аккаунт
            </v-card-title>

            <v-text-field
                label="Введите логин"
                v-model="login"
                outlined
            ></v-text-field>

            <v-text-field
                label="Введите пароль"
                v-model="password"
                outlined
            ></v-text-field>

            <v-btn @click="signUp">
                Зарегистрироваться
            </v-btn>
        </v-card>
    </div>
</template>

<script>
export default {
    name: 'NewUser',
    data() {
        return {
            login: '',
            password: '',
            usersApiLink: 'http://188.225.47.187/api/jsonstorage/becdad4189eaa8404ae78ea212088da8',
        }
    },
    methods: {
        signUp() {
            this.axios.get(this.usersApiLink)
            .then(
                (response) => {
                    let users = response.data;
                    let newUser = {
                        login: this.login,
                        password: this.password,
                        name: this.login,
                        website: '',
                        email: '',
                        city: '',
                        company: '',
                        photo: 'https://randomuser.me/api/portraits/men/4.jpg'
                    }
                    users.push(newUser)
                    this.axios.put(this.usersApiLink, users)
                }
            )
        }
    }
}
</script>