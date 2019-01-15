<template>
  <div>

  </div>
</template>

<script>
import HotelService from '@/services/HotelService';

export default {
  name: 'HotelDetails',
  data() {
    return {
      hotelsDetails: {},
    };
  },
  props: {
    hotelId: String,
  },
  created() {
    this.fetchHotelDetails(this.hotelId);
  },
  methods: {
    fetchHotelDetails(id) {
      return HotelService.getHotel(id)
        .then((details) => {
          this.hotelsDetails = details;
        });
    },
  },

};
</script>

<style scoped lang="scss">

</style>
