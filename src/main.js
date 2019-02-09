// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import VueLocalStorage from 'vue-localstorage'
import VueDraggableResizable from 'vue-draggable-resizable'
import VueMoment from 'vue-moment'
import VueTouch from 'vue-touch';

import './reset.css'
import './general.css'
import './images.css'

import App from './App.vue'
import Test from './components/test.vue'

Vue.component('vue-draggable-resizable', VueDraggableResizable);

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(VueLocalStorage);
Vue.use(VueMoment);
Vue.use(VueTouch, {name: 'v-touch'});

// global variables
Vue.prototype.$url1 = 'http://localhost:3000';
//Vue.prototype.$url1 = 'https://rit.scapp.io';
if (process.env.NODE_ENV === 'production')
  Vue.prototype.$url1 = 'https://vue-template-backend.scapp.io';

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/', component: App},
    {path: '/test', component: Test}
  ]
});

new Vue({
  router,
  components: {},
  template: `
    <div id="app">
      <router-view></router-view>
    </div> 
  `
}).$mount('#app');

/*
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
});
*/
