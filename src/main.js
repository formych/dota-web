import App from './App'
import Vue from 'vue'
import Vuex from 'vuex'
import VueTap from 'v-tap'
import VueRouter from 'vue-router'
import signin from 'components/signin/signin'
import signup from 'components/signup/signup'
import recent from 'components/recent/recent'
import guess from 'components/guess/guess'
import guessnew from 'components/guess/new'
import mine from 'components/mine/mine'
import find from 'components/find/find'
// import Vconsole from 'vconsole';
Vue.use(VueTap)
Vue.use(VueRouter)
Vue.use(Vuex)

var loggedIn = localStorage.getItem('logged_in')
// const vConsole = new Vconsole();
const store = new Vuex.Store({
  state: {
    logged_in: loggedIn,
    apiURLPrefix: '1'
  }
})
const router = new VueRouter({
  mode: 'history',
  routes: [{
    name: 'signin',
    path: '/signin',
    component: signin
  }, {
    name: 'signup',
    path: '/signup',
    component: signup
  }, {
    name: 'recent',
    path: '/recent',
    component: recent
  }, {
    name: 'guess',
    path: '/guess',
    component: guess
  },
  {
    name: 'new',
    path: '/guess/new',
    component: guessnew
  },
  {
    name: 'mine',
    path: '/mine',
    component: mine
  }, {
    name: 'find',
    path: '/find',
    component: find
  }],
  linkActiveClass: 'active'
})
new Vue({
  router,
  store,
  template: '<App/>',
  components: {
    App
  },
  data: {
    eventHub: new Vue()
  }
}).$mount('#app')

// router.push('/signin')
