<template>
  <div class="mt-5">
    <div v-if="!reviews">
      <!-- Loader -->
      <i class="fas fa-circle-notch fa-spin fa-2x"></i>
    </div>
    <div v-else>
      <h2 @click="toggleSort">Reviews <i class="fa fa-sort fa-xs"></i></h2>
      <div class="reviews-wrapper px-3 py-3">
        <ul class="reviews">
          <li class="review d-flex mb-4" v-for="(item, index) in orderedReviews" :key="index">
            <span class="review-score">{{ item.score }}</span>
            <p class="review-text">{{ item.review }}</p>
          </li>
        </ul>

        <Pagination
        :total-pages="totalPages"
        :total="totalReviews"
        :per-page="itemsPerPage"
        :current-page="currentPage"
        @pagechanged="onPageChange"/>
      </div>
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
      itemsPerPage: 3,
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
      this.currentPage = page;
      this.limit = page * 3;
      this.skip = this.limit - 3;
    },
  },
  watch: {
    reviews() {
      this.limit = 3;
      this.skip = 0;
      this.currentPage = 1;
    },
  },
};
</script>

<style scoped lang="scss">
.reviews-wrapper{
  list-style-type: none;
  border:1px solid #000;
  border-radius: 3px;
  background-color: #f8f8f8;
  .reviews{
    min-height: 423px;
    @media(max-width: 576px){
      padding-left: 0;
    }
  }
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
  color:#fff;
}
.review-text{
  padding-top: 13px;
}
h2{
  cursor: pointer;
}
</style>
