import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from '../router/index.js'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        currentUserId: 1,
        apiLinks: {
            users: 'http://188.225.47.187/api/jsonstorage/becdad4189eaa8404ae78ea212088da8',
            posts: 'http://188.225.47.187/api/jsonstorage/8f3de21c99fab3a8c834b36e63d2d286'
        },
        currentUserInfo: {},
        usersInfo: [],
        anonymous: true,
        posts: []
    },
    getters: {
        currentUserId: (state) => state.currentUserId,
        currentUserInfo: (state) => state.currentUserInfo,
        usersInfo: (state) => state.usersInfo,
        anonymous: (state) => state.anonymous,
        posts: (state) => state.posts
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
        },
        makeAnonymous(state) {
            state.anonymous = true
        },
        updatePosts(state, newPosts) {
            state.posts = newPosts
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
                        photo: 'https://media.pn.am/media/issue/197/297/photo/197297.jpg',
                        id: users.length
                    }
                    users.push(newUser)
                    Axios.put(this.state.apiLinks.users, users)
                    .then(
                        () => {
                            ctx.commit('updateUsersInfo', users)
                            ctx.dispatch('updateCurrentUser', users.length - 1)
                            router.push('/myprofile/')
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
                            ctx.dispatch('updateCurrentUser', index)
                            router.push('/myprofile')
                            found = true;
                            break;
                        }
                    }
                    if (!found) 
                        window.alert('wrong password or login')
                }
            )
        },
        exit(ctx) {
            ctx.commit('makeAnonymous')
            router.push('/home')
        },
        updatePosts(ctx) {
            Axios.get(this.state.apiLinks.posts)
            .then(
                (response) => {
                    let posts = response.data
                    ctx.commit('updatePosts', posts)
                }
            )
        }
    }
})