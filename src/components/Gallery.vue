<template>
  <div>
    <img v-for="(item,index) in computedPictures" :key="index" :src="item.photo" alt="">
  </div>
</template>

<script>
export default {
  name: 'gallery',
  props: {
    pictures: Array,
  },
  computed: {
    computedPictures() {
      return this.pictures;
    },
  },
};
</script>

<style scoped lang="scss">

</style>
