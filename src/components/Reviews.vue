<template>
  <div>
    <ul>
      <!-- <li v-for="(item, index) in filteredReviews" :key="index">
        {{ item.review }}
      </li> -->
    </ul>
    <Pagination />
  </div>
</template>

<script>
import Pagination from '@/components/Pagination.vue';
// import _ from 'lodash';

export default {
  name: 'Reviews',
  components: {
    Pagination,
  },
  computed: {
    // orderedReviews() {
    //   return _.orderBy(this.reviews, 'score');
    // },
    // filteredReviews() {
    //   return this.orderedReviews().slice(0, 3);
    // },
  },
};
</script>

<style scoped lang="scss">

</style>
