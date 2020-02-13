import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        currentUserId: 1,
        apiLinks: {
            users: 'http://188.225.47.187/api/jsonstorage/becdad4189eaa8404ae78ea212088da8'
        },
        currentUserInfo: {},
        usersInfo: []
    },
    getters: {
        currentUserId: (state) => state.currentUserId,
        currentUserInfo: (state) => state.currentUserInfo,
        usersInfo: (state) => state.usersInfo
    },
    mutations: {
        updateCurrentUser(state, newId) {
            state.currentUserId = newId
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
        }
    }
})