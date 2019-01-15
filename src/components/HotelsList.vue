<template>
  <div class="row">
    <div v-for="(hotel, index) in hotels" :key="index" class="col-sm-4">
      <SingleHotel :hotel="hotel"/>
    </div>

  </div>
</template>

<script>
import SingleHotel from '@/components/SingleHotel';

export default {
  name: 'HotelsList',
  components: {
    SingleHotel,
  },
  data() {
    return {
      hotels: [],
    };
  },
};
</script>

<style scoped lang="scss">

</style>
