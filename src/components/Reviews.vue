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

       <Pagination
      :total-pages="totalPages"
      :total="reviews.length"
      :per-page="3"
      :current-page="currentPage"
      @pagechanged="onPageChange"/>
    </div>


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
      currentPage: 1,
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
    totalPages() {
      return Math.ceil(this.reviews.length / 3);
    },
    // filteredReviews() {
    //   return this.orderedReviews().slice(0, 3);
    // },
  },
  methods: {
    toggleSort() {
      this.asc = !this.asc;
    },
    onPageChange(page) {
      console.log(page);
      this.currentPage = page;
    },
  },
};
</script>

<style scoped lang="scss">
.pagination {
  list-style-type: none;
}

.pagination-item {
  display: inline-block;
}

.active {
  background-color: #4AAE9B;
  color: #ffffff;
}
</style>
