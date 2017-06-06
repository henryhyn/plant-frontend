import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/pages/Hello'
import About from '@/pages/About'
import Contact from '@/pages/Contact'
import Help from '@/pages/Help'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Hello',
    component: Hello
  }, {
    path: '/about',
    name: 'About',
    component: About
  }, {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }, {
    path: '/help',
    name: 'Help',
    component: Help
  }]
})
