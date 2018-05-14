import Vue from 'vue'
import Vuetify from 'vuetify'

import 'vuetify/dist/vuetify.min.css'
import App from './App.vue'
import router from './router'
import store from './store'
import client from './graph/client'

import _verify from './graph/verify.mutation.graphql'

Vue.config.productionTip = false

Vue.use(Vuetify)

new Vue({
  router,
  store,
  render: h => h(App),
  /* created () {
    client.mutate({
      mutation: _verify,
      variables: {
        token: localStorage.getItem('authToken')
      }
    }).then(res => {
      console.log('res: ', res)
    }).catch(err => {
      this.$store.commit('setUser', null)
      localStorage.removeItem('authToken')
      console.log('error: ', err)
    })
  } */
}).$mount('#app')
