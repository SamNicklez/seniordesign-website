import './assets/main.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import "vuetify/dist/vuetify.min.css";
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createApp } from 'vue'
import "@mdi/font/css/materialdesignicons.css";
import "@fortawesome/fontawesome-free/css/all.css";
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import firebaseConfig from './firebaseConfig';
import Home from '/src/views/Home.vue'
import Cole from '/src/views/Colea.vue'
import SamL from '/src/views/Saml.vue'
import SamN from '/src/views/Samn.vue'
import LukeF from '/src/views/Lukef.vue'
import Login from '/src/views/Login.vue'
import { globalCookiesConfig } from "vue3-cookies";
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();
globalCookiesConfig({
  expireTimes: "30d",
  path: "/",
  domain: "",
  secure: true,
  sameSite: "None",
});

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


const router = createRouter({
  history: createWebHashHistory(),
  routes: [{ path: '/', component: Home }, {
    path: '/colea', component: Cole, beforeEnter: (to, from, next) => {
      if (cookies.get('isAdmin') == 't') {
        next(); // Allow navigation
      } else {
        cookies.set("fail", 't')
        next('/'); // Prevent navigation
      }
    }
  }, {
    path: '/saml', component: SamL, beforeEnter: (to, from, next) => {
      if (cookies.get('isAdmin') == 't') {
        next(); // Allow navigation
      } else {
        cookies.set("fail", 't')
        next('/'); // Prevent navigation
      }
    }
  }, {
    path: '/samn', component: SamN, beforeEnter: (to, from, next) => {
      if (cookies.get('isAdmin') == 't') {
        next(); // Allow navigation
      } else {
        cookies.set("fail", 't')
        next('/'); // Prevent navigation
      }
    }
  }, {
    path: '/lukef', component: LukeF, beforeEnter: (to, from, next) => {
      if (cookies.get('isAdmin') == 't') {
        next(); // Allow navigation
      } else {
        cookies.set("fail", 't')
        next('/'); // Prevent navigation
      }
    }
  }, { path: '/login', component: Login }]
})

const vuetify = createVuetify({
  components,
  directives,
})

export { db };
createApp(App).use(vuetify).use(router).mount('#app')