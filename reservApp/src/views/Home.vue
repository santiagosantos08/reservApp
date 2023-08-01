<script lang="ts" setup>
  import BottomNavBarVue from '@/components/BottomNavBar.vue';

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
  */
  //veriricar esto (? medio raro)

  import { getAuth } from "firebase/auth";

  const auth = getAuth();
  const user = auth

</script>

<template>
  <RouterView/>
  <BottomNavBarVue/>
</template>
