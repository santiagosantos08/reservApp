/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

import router from './router'

//---firebase---
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyANiN8PTkZb7RRUqYYWLoncFO-8ZC0rdwk",
  authDomain: "cecreservas-1237e.firebaseapp.com",
  projectId: "cecreservas-1237e",
  storageBucket: "cecreservas-1237e.appspot.com",
  messagingSenderId: "852907542670",
  appId: "1:852907542670:web:3c4112a1038c4025c7a1df",
  measurementId: "G-PKFHWZKG09"
};
initializeApp(firebaseConfig);
//---firebase---


const app = createApp(App)

registerPlugins(app)

app.use(router)

app.mount('#app')
