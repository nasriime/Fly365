<template>
  <div class="container">
    <HotelsList />
    <hotelsDetails />
  </div>
</template>

<script>
import HotelsList from '@/components/HotelsList.vue';
import HotelsDetails from '@/components/HotelDetails.vue';

export default {
  name: 'Home',
  components: {
    HotelsList,
    HotelsDetails,
  },
};
</script>

<style scoped lang="scss">

</style>
