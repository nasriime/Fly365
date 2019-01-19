<template>
  <div class="hotelDetails-wrapper p-1 p-sm-5 mb-5">
    <div class="text-center" v-if="!hotelDetails">
      <!-- Loader -->
      <i class="fas fa-circle-notch fa-spin fa-2x"></i>
    </div>
    <div v-else>
      <h1 class="mb-3">{{hotelDetails.name}}</h1>
      <div>
        <!-- number of nights indicator -->
        <span>For</span>
        <div class="form-group mx-2">
          <input class="form-control" type="number" min="1" max="99"
          @input="changeNights()" v-model="nights">
        </div>
        <span>Nights</span>
      </div>
      <!-- Gallery component -->
      <Gallery :pictures="hotelDetails.pictures"/>
      <div class="row">
        <div class="col-md-8 offset-md-2">
          <!-- Reviews component -->
          <Reviews :reviews="hotelDetails.reviews"/>
        </div>
      </div>
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
      if (this.nights < 1 || this.nights > 99) {
        return;
      }
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
.hotelDetails-wrapper{
  border:1px solid #000;
  border-radius: 5px;
}
h1{
  text-transform: capitalize;
}
.form-group{
  display: inline-block;
  width: 65px;
  background-color: #f8f8f8;
}
</style>
