<script>
  import { RouterView } from 'vue-router';
  import MainHeader from '@/components/MainHeader.vue'

  export default {
    components: {MainHeader}
  }
</script>

<template>
  <MainHeader />

  <RouterView />
</template>

<style>
</style>
