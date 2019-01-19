<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from '@/components/Home.vue';

export default {
  components: {
    Home,
  },
};
</script>


<style lang="scss">
body{
  background-color: #e3e7eb !important
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
