<template>
  <div>
    {{ hotel.name }}
    {{ priceOfAllNights }} nights
  </div>
</template>

<script>
export default {
  name: 'singleHotel',
  props: {
    hotel: Object,
  },
  computed: {
    priceOfAllNights() {
      return this.$store.state.nights * this.hotel.pricePerNight;
    },
  },
};
</script>

<style scoped lang="scss">

</style>
