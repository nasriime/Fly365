<template>
  <div>
    <span v-if="!hotelID">Hotels Details loading..... </span>
    <div v-else>
      <h1 class="mb-3">{{hotelDetails.name}}</h1>
      <div>
        <span>For</span>
        <div class="form-group mx-2">
          <input class="form-control" type="number" min="1" max="99"
          @input="changeNights()" v-model="nights">
        </div>
        <span>Nights</span>
      </div>
      <Gallery :pictures="hotelDetails.pictures"/>
      <div class="row">
        <div class="col-md-8 offset-md-2">
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
h1{
  text-transform: capitalize;
}
.form-group{
  display: inline-block;
  width: 65px;
}
</style>
