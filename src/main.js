import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
import keycloak from '@dsb-norge/vue-keycloak-js'

Vue.use(keycloak, {
  init: {
    onLoad: 'login-required'
  },
  config: {
    url: 'http://localhost:8080/auth',
    realm: 'myrealm',
    clientId: 'service-nodejs'
  },
  onReady: (keycloak) => {
    keycloak.loadUserProfile().success((data) => {
      // requestAuth;
      console.log(data);
    });
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
