<template>
  <div class="row">
    <div v-for="(hotel, index) in hotels" :key="index" class="col-sm-4">
      <SingleHotel :hotel="hotel"/>
    </div>

  </div>
</template>

<script>
import SingleHotel from '@/components/SingleHotel.vue';
import HotelService from '@/services/HotelService';

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
  created() {
    this.fetchHotels();
  },
  methods: {
    fetchHotels() {
      return HotelService.getHotels()
        .then((hotels) => {
          console.log(hotels);
          this.hotels = hotels;
        });
    },
  },
};
</script>

<style scoped lang="scss">

</style>
