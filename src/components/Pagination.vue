<template>
 <ul class="pagination d-flex justify-content-center">
    <li class="pagination-item">
      <!-- First button -->
      <button
        type="button"
        class="btn btn-primary custom-btn"
        @click="onClickFirstPage"
        :disabled="isInFirstPage"
        aria-label="Go to first page"
      ><i class='fas fa-angle-double-left'></i></button>
    </li>

    <li class="pagination-item">
      <!-- Previous button -->
      <button
        type="button"
        class="btn btn-primary custom-btn"
        @click="onClickPreviousPage"
        :disabled="isInFirstPage"
        aria-label="Go to previous page"
      ><i class='fas fa-angle-left'></i></button>
    </li>

    <li v-for="(page, index) in pages" :key="index" class="pagination-item">
      <!-- Looping over pages buttons -->
      <button
        type="button"
        class="btn btn-primary custom-btn"
        @click="onClickPage(page.name)"
        :disabled="page.isDisabled"
        :class="{ active: isPageActive(page.name) }"
        :aria-label="`Go to page number ${page.name}`">{{ page.name }}</button>
    </li>

    <li class="pagination-item">
      <!-- Next button -->
      <button
        type="button"
        class="btn btn-primary custom-btn"
        @click="onClickNextPage"
        :disabled="isInLastPage"
        aria-label="Go to next page"
      ><i class='fas fa-angle-right'></i></button>
    </li>

    <li class="pagination-item">
      <!-- Last button -->
      <button
        type="button"
        class="btn btn-primary custom-btn"
        @click="onClickLastPage"
        :disabled="isInLastPage"
        aria-label="Go to last page"><i class='fas fa-angle-double-right'></i></button>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    maxVisibleButtons: {
      type: Number,
      required: false,
      default: 3,
    },
    totalPages: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    perPage: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
  },
  computed: {
    startPage() {
      if (this.currentPage === 1) {
        return 1;
      }

      if (this.currentPage === this.totalPages) {
        return this.totalPages - this.maxVisibleButtons + 1;
      }

      return this.currentPage - 1;
    },
    endPage() {
      return Math.min(this.startPage + this.maxVisibleButtons - 1, this.totalPages);
    },
    pages() {
      // Generate visible buttons of pages
      const range = [];

      for (let i = this.startPage; i <= this.endPage; i += 1) {
        range.push({
          name: i,
          isDisabled: i === this.currentPage,
        });
      }

      return range;
    },
    isInFirstPage() {
      // Check if first page
      return this.currentPage === 1;
    },
    isInLastPage() {
      // Check if last page
      return this.currentPage === this.totalPages;
    },
  },
  methods: {
    onClickFirstPage() {
      this.$emit('pagechanged', 1);
    },
    onClickPreviousPage() {
      this.$emit('pagechanged', this.currentPage - 1);
    },
    onClickPage(page) {
      this.$emit('pagechanged', page);
    },
    onClickNextPage() {
      this.$emit('pagechanged', this.currentPage + 1);
    },
    onClickLastPage() {
      this.$emit('pagechanged', this.totalPages);
    },
    isPageActive(page) {
      return this.currentPage === page;
    },
  },
};
</script>

<style scoped lang="scss">
.pagination {
  // margin-bottom: 80px;
}
.active {
  background-color: #4AAE9B;
  color: #ffffff;
}
  .custom-btn{
    border-radius: unset;
  }
  li +li {
    border-left: 1px solid #fff;
  }
</style>
