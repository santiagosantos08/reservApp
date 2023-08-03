<script lang="ts" setup>
  import BottomNavBarVue from '@/components/BottomNavBar.vue';
  import router from '@/router';

 /*
  router.beforeEach((to, from, next) => {
    const publicPages = ['/login', '/signup'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('user');

    if (authRequired && !loggedIn) {
      return next('/login');
    }

    next();
  });
 /*/
  //anda, descomentar despues pero iria en app

  import { getAuth } from "firebase/auth";

  const auth = getAuth();
  const user = auth

</script>

<template>
  <RouterView/>
  <BottomNavBarVue class="navBar" />
</template>

<style scoped>
  .navBar {
    position: fixed;
    bottom: 0;
    width: 100%;
  }
</style>
