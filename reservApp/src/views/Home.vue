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

</script>

<template>
  <BottomNavBarVue/>
</template>
