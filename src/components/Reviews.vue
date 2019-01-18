<template>
  <div>
    <div>
      <span>Reviews</span>
      <button @click="toggleSort">Toggle sort</button>
    </div>
    <div v-if="!reviews">reviews loading ......</div>
    <div v-else>
      <ul>
        <li v-for="(item, index) in orderedReviews" :key="index">
          <!-- {{ item.review }} -->
          {{ item.score }}
        </li>
      </ul>
    </div>

    <Pagination />
  </div>
</template>

<script>
import Pagination from '@/components/Pagination.vue';
import _ from 'lodash';

export default {
  name: 'Reviews',
  data() {
    return {
      asc: false,
    };
  },
  components: {
    Pagination,
  },
  props: {
    reviews: Array,
  },
  computed: {
    orderedReviews() {
      return _.orderBy(this.reviews, 'score', this.asc ? 'asc' : 'desc');
    },
    // filteredReviews() {
    //   return this.orderedReviews().slice(0, 3);
    // },
  },
  methods: {
    toggleSort() {
      this.asc = !this.asc;
    },
  },
};
</script>

<style scoped lang="scss">

</style>
