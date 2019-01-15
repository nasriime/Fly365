<template>
  <div>
    {{ hotel.name}}
  </div>
</template>

<script>
export default {
  name: 'singleHotel',
  props: {
    hotel: Object,
  },
  computed() {
    
  },
};
</script>

<style scoped lang="scss">

</style>
