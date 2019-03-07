import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import Page1 from './components/Page1.vue'

Vue.config.productionTip = false

Vue.use(VueRouter);

function RouteEjector(to) {
  window.location = `http://localhost:8082/#!/${to.params.path}`;
}

const routes = [
  { path: '/', component: Home },
  { path: '/page1', component: Page1 },
  {
    path: '/old-app/:path',
    beforeEnter: RouteEjector,
  },
]

const router = new VueRouter({ routes })

const app = new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
});
