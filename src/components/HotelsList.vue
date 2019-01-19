<template>
  <div class="hotelsList-wrapper">
    <div class="text-center" v-if="!hotels">
      <!-- Loader -->
      <i class="fas fa-circle-notch fa-spin fa-2x"></i>
    </div>
    <div v-else class="row py-5 my-5 px-3">
      <div v-for="(hotel, index) in hotels" :key="index" class="col-sm-4">
        <SingleHotel :hotel="hotel"/>
      </div>
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
  mounted() {
    this.fetchHotels();
  },
  methods: {
    async fetchHotels() {
      const response = await HotelService.getHotels();
      this.hotels = response.data;
      const selectedID = this.hotels[0].id;
      this.$store.commit('changeHotelID', selectedID);
    },
  },
};
</script>

<style scoped lang="scss">
.hotelsList-wrapper {
    background-color: #fff;
    border-radius: 5px;
}
</style>
