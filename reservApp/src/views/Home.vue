<script lang="ts" setup>
  import BottomNavBarVue from '@/components/BottomNavBar.vue';
  //import router from '@/router';

</script>

<template>
  <RouterView/>
  <BottomNavBarVue class="navBar" />
</template>

<style scoped>
  .navBar {
    position: fixed;
    bottom: 0;
    max-width: 4000px;
  }
</style>
