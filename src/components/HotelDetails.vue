<template>
  <div>
    <span>Hotels Details </span>
    <Gallery />
    <Reviews />
  </div>
</template>

<script>
import HotelService from '@/services/HotelService';
import Gallery from '@/components/Gallery.vue';
import Reviews from '@/components/Reviews.vue';

export default {
  name: 'HotelDetails',
  components: {
    Gallery,
    Reviews,
  },
  data() {
    return {
      hotelDetails: {},
    };
  },
  props: {
    hotelId: String,
  },
  mounted() {
    this.fetchHotelDetails(this.hotelId);
  },
  methods: {
    async fetchHotelDetails(id) {
      const response = await HotelService.getHotel(id);
      console.log(response);
      this.hotelDetails = response.data;
    },
  },
  watch: {
    hotelId: {
      immediate: true,
      handler(newId, oldId) {
        console.log(oldId);
        this.fetchHotelDetails(newId);
      },
    },
  },

};
</script>

<style scoped lang="scss">

</style>
