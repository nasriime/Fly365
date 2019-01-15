<template>
  <div>
    <ul>
      <li v-for="(item, index) in filteredReviews" :key="index">
        {{ item.review }}
      </li>
    </ul>
  </div>
</template>

<script>
import _ from 'lodash';

export default {
  name: 'Reviews',
  computed: {
    orderedReviews() {
      return _.orderBy(this.reviews, 'score');
    },
    filteredReviews() {
      return this.orderedReviews().slice(0, 3);
    },
  },
};
</script>

<style scoped lang="scss">

</style>
