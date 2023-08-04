<script setup lang="ts">
import router from './router';
import { getAuth, onAuthStateChanged } from "firebase/auth";

router.beforeEach((to, from, next) => {
    const publicPages = ['/login', '/signup'];
    const authRequired = !publicPages.includes(to.path);
    //const loggedIn = localStorage.getItem('user');
    const loggedIn = getAuth().currentUser;
    if (authRequired && !loggedIn) {
      return next('/login');
    }
    next();
});


</script>

<template>
  <v-app>
    <v-main>
      <RouterView/>
    </v-main>
  </v-app>
</template>
