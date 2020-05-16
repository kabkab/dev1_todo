import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VModal from 'vue-js-modal'
import Vuetify from 'vuetify'
// index.js or main.js
import "vuetify/dist/vuetify.min.css"; // Ensure you are using css-loader
Vue.use(Vuetify, {
  iconfont: "mdi" // 'md' || 'mdi' || 'fa' || 'fa4'
});

Vue.config.productionTip = false

Vue.use(Vuetify)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
Vue.use(VModal)
