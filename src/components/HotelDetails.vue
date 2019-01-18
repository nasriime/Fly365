<template>
  <div>
    <span v-if="!hotelID">Hotels Details loading..... </span>
    <div v-else>
      <div>
        <span>for</span>
        <input type="number" @input="changeNights()" v-model="nights">
        <span>Nights</span>
      </div>
      <div> Hotel Details loaded id {{ hotelID }} </div>
      <Gallery :pictures="hotelDetails.pictures"/>
      <Reviews :reviews="hotelDetails.reviews"/>
    </div>
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
      nights: this.$store.state.nights,
      hotelDetails: {},
    };
  },
  methods: {
    async fetchHotelDetails(id) {
      const response = await HotelService.getHotel(id);
      this.hotelDetails = response.data;
    },
    changeNights() {
      this.$store.commit('changeNightsNumber', this.nights);
    },
  },
  computed: {
    hotelID() {
      return this.$store.state.hotelID;
    },
  },
  watch: {
    hotelID(id) {
      this.fetchHotelDetails(id);
    },
  },

};
</script>

<style scoped lang="scss">

</style>
