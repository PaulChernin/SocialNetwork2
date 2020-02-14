import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from '../router/index.js'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        currentUserId: 1,
        apiLinks: {
            users: 'http://188.225.47.187/api/jsonstorage/becdad4189eaa8404ae78ea212088da8'
        },
        currentUserInfo: {},
        usersInfo: [],
        anonymous: true
    },
    getters: {
        currentUserId: (state) => state.currentUserId,
        currentUserInfo: (state) => state.currentUserInfo,
        usersInfo: (state) => state.usersInfo,
        anonymous: (state) => state.anonymous
    },
    mutations: {
        updateCurrentUser(state, newId) {
            state.currentUserId = newId,
            state.anonymous = false
        },
        updateCurrentUserInfo(state, newInfo) {
            state.currentUserInfo = newInfo
        },
        updateUsersInfo(state, newInfo) {
            state.usersInfo = newInfo
        }
    }, 
    actions: {
        updateCurrentUser(ctx, newId) {
            ctx.commit('updateCurrentUser', newId)
            Axios.get(this.state.apiLinks.users)
            .then(
                (response) => {
                    ctx.commit('updateCurrentUserInfo', response.data[ctx.state.currentUserId])
                    //this.currentUserInfo = response.data[this.currentUserIndex]
                } 
            )
        },
        updateUsersInfo(ctx) {
            Axios.get(this.state.apiLinks.users)
            .then(
                (response) => {
                    ctx.commit('updateUsersInfo', response.data)
                }
            )
        },
        updateCurrentUserInfo(ctx, newInfo) {
            Axios.get(this.state.apiLinks.users)
            .then(
                (response) => {
                    let users = response.data;
                    users[ctx.state.currentUserId] = newInfo
                    Axios.put(this.state.apiLinks.users, users)
                    ctx.commit('updateUsersInfo', users)
                }
            )
        },
        newUser(ctx, info) {
            Axios.get(this.state.apiLinks.users)
            .then(
                (response) => {
                    let users = response.data;
                    let newUser = {
                        login: info.login,
                        password: info.password,
                        name: info.login,
                        website: 'Не указано',
                        email: 'Не указано',
                        city: 'Не указано',
                        company: 'Не указано',
                        photo: 'https://randomuser.me/api/portraits/men/4.jpg',
                        id: users.length
                    }
                    users.push(newUser)
                    Axios.put(this.state.apiLinks.users, users)
                    .then(
                        () => {
                            ctx.commit('updateUsersInfo', users)
                            ctx.commit('updateCurrentUser', users.length - 1)
                            router.push('/profile/' + (users.length - 1))
                        }
                    )
                }
            )
            .catch(
                (response) => {
                    alert(response)
                }
            )
        },
        login(ctx, info) {
            Axios.get(this.state.apiLinks.users)
            .then(
                (response) => {
                    let users = response.data;
                    let found = false;
                    for (let index in users) {
                        if (info.login == users[index].login && info.password == users[index].password) {
                            //this.$emit('login', index)
                            //ctx.commit('updateCurrentUser', index)
                            this.dispatch('updateCurrentUser', index)
                            router.push('/profile/' + index)
                            found = true;
                            break;
                        }
                    }
                    if (!found) 
                        window.alert('wrong password or login')
                }
            )
        }
    }
})