<template>
  <div class="single-hotel mb-5" @click="emitHoteID($event, hotel.id)"
    :class="{ active : currentID == hotel.id }">
    <a class="hotel-name" href="#" :class="{ active : currentID == hotel.id }">{{ hotel.name }}</a>
    <div class="hotel-data d-flex">
       <img :src="hotel.photo" alt="">
        <div>
          <p>{{ priceOfAllNights }} per {{ nights }} night</p>
          <p>{{ hotel.totalScore }} {{ calculatedGrade }}</p>
          <p>{{ hotel.totalReviews }} reviews</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SingleHotel',
  props: {
    hotel: Object,
  },
  computed: {
    currentID() {
      return this.$store.state.hotelID;
    },
    nights() {
      return this.$store.state.nights;
    },
    // Recalculate price of nights based on number of nights
    priceOfAllNights() {
      const nightsPrice = this.$store.state.nights * this.hotel.pricePerNight;
      return `$${nightsPrice}`;
    },
    // Abend grade based on hotel's score
    calculatedGrade() {
      const flooredScores = Math.floor(this.hotel.totalScore);
      return this.calculateGrades(flooredScores);
    },
  },
  methods: {
    // Commit clicked hotel's ID to store
    emitHoteID(e, id) {
      e.preventDefault();
      this.$store.commit('changeHotelID', id);
    },
    // Assign scores to range of grades
    calculateGrades(score) {
      let grade;
      const grades = ['Very bad', 'bad', 'good', 'Very good', 'Excellent', 'N/A'];
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
          grade = grades[5];
      }
      return grade;
    },
  },
};
</script>

<style scoped lang="scss">
.single-hotel{
  min-height: 225px;
  border-radius: 5px;
  padding: 20px;
  background-color: #f8f8f8;
  box-shadow: 0px 10px 1px #ddd, 0 10px 20px #ccc;
  cursor: pointer;
  &.active{
    transform: translateZ(50px);
  }
}
.hotel-name{
  display: inline-block;
  margin-bottom: 18px;
  text-decoration: none;
  &.active{
    font-size: 20px;
    font-weight: bold;
  }
}
.hotel-data{
  & > div{
    margin-top: 12px;
  }
  img{
  margin-right: 15px;
  height: 81px;
  margin-top: 20px;
  }
}
</style>
