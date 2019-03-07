import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import Page1 from './components/Page1.vue'

Vue.use(VueRouter)

function RouteEjector(transition) {
  window.location = `http://localhost:8081/#/${transition.to.params.path}`
}

const routes = [
  { path: '/', component: Home },
  { path: '/page1', component: Page1 },
  {
    path: '/new-app',
    canActivate: RouteEjector,
  }
]

const router = new VueRouter()

router.map({
  '/': {
    component: Home,
  },
  '/page1': {
    component: Page1,
  },
  '/new-app/:path': {
    component: Vue.extend({
      template: '',
      route: {
        canActivate: RouteEjector,
      },
    }),
  },
})

router.start(App, '#app')
