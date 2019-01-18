<template>
  <div @click="emitHoteID(hotel.id)">
    <div>{{ hotel.name }}</div>
    <div>{{ hotel.totalScore }} {{ calculatedGrade }}</div>
    <div>{{ priceOfAllNights }} nights</div>
  </div>
</template>

<script>
export default {
  name: 'singleHotel',
  props: {
    hotel: Object,
  },
  computed: {
    priceOfAllNights() {
      return this.$store.state.nights * this.hotel.pricePerNight;
    },
    calculatedGrade() {
      const flooredScores = Math.floor(this.hotel.totalScore);
      return this.calculateGrades(flooredScores);
    },
  },
  methods: {
    emitHoteID(id) {
      this.$store.commit('changeHotelID', id);
    },
    calculateGrades(score) {
      let grade;
      const grades = ['Very bad', 'bad', 'good', 'Very good', 'Excellent'];
      switch (true) {
        case score > 0 && score <= 3:
          grade = grades[0];
          break;
        case score > 3 && score <= 5:
          grade = grades[1];
          break;
        case score > 5 && score <= 7:
          grade = grades[2];
          break;
        case score > 7 && score <= 8:
          grade = grades[3];
          break;
        case score > 8 && score <= 10:
          grade = grades[4];
          break;
        default:
          grade = grades[4];
      }
      return grade;
    },
  },
};
</script>

<style scoped lang="scss">

</style>
