<template>
  <div>
    <img v-for="(image,index) in images" :key="index" :src="image.photo" alt="">
  </div>
</template>

<script>
export default {
  name: 'gallery',
  props: {
    images: Array,
  },
};
</script>

<style scoped lang="scss">

</style>
