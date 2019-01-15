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
      hotelDetails: {},
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
          this.hotelDetails = details;
        });
    },
  },
  watch: {
    hotelId: {
      immediate: true, 
      handler (newId, oldId) {
        // do your stuff
        this.fetchHotelDetails();
      }
    }
}

};
</script>

<style scoped lang="scss">

</style>
