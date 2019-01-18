<template>
  <div class="row pt-5">
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

</style>
