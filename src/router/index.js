import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'
import Search from '../views/Search.vue'
import Login from '../views/Login.vue'
import NewUser from '../views/NewUser.vue'
import Settings from '../views/Settings.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/profile/:id',
    component: Profile
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/newuser',
    component: NewUser
  },
  {
    path: '/settings/:id',
    component: Settings,
  }
]

const router = new VueRouter({
  props: {
    currentUserIndex: Number
  },
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
