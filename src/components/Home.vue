<template>
  <div class="hello">
    <HotelsList />
  </div>
</template>

<script>
import HotelsList from '@/components/HotelsList.vue';

export default {
  name: 'Home',
  components: {
    HotelsList,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
