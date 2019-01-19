<template>
  <div class="mt-5">
    <div v-if="!reviews">reviews loading ......</div>
    <div v-else>
      <h2>Reviews <i class="fa fa-sort" @click="toggleSort"></i></h2>
      <ul class="reviews-wrapper p-3">
        <li class="review d-flex mb-4" v-for="(item, index) in orderedReviews" :key="index">
          <span class="review-score">{{ item.score }}</span>
          <p class="review-text">{{ item.review }}</p>
        </li>
      </ul>

       <Pagination
      :total-pages="totalPages"
      :total="totalReviews"
      :per-page="limit"
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
      skip: 0,
      limit: 3,
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
      const reviews = this.reviews.slice(this.skip, this.limit);
      return _.orderBy(reviews, 'score', this.asc ? 'asc' : 'desc');
    },
    totalPages() {
      return Math.ceil(this.reviews.length / 3);
    },
    totalReviews() {
      return this.reviews.length;
    },
  },
  methods: {
    toggleSort() {
      this.asc = !this.asc;
    },
    onPageChange(page) {
      console.log(page);
      this.currentPage = page;
      this.limit = page * 3;
      this.skip = this.limit - 3;
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
.reviews-wrapper{
  list-style-type: none;
  border:1px solid #000;
  border-radius: 3px;
}
.fa-sort{
  cursor: pointer;
}
.review-score{
  min-width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  background-color:#9a9aad;
  margin: 0 20px 0 10px;
  border-radius: 50%;
}
.review-text{
  padding-top: 14px;
}
</style>
