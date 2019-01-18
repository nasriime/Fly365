<template>
  <div>
    {{ hotel.name }}
  </div>
</template>

<script>
export default {
  name: 'singleHotel',
  props: {
    hotel: Object,
  },
  created() {
    // console.log('Hotel', this.hotel);
  },
  // computed() {

  // },
};
</script>

<style scoped lang="scss">

</style>
