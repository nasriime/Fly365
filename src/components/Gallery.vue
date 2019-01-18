<template>
  <div>
    <div v-if="!pictures">Gallery is loading ........</div>
    <div v-else>
      <img ref="thumbnail" :src="this.computedPictures[0].thumbnail" alt="">
          <div  class="images-wrapper">
      <img  v-for="(item,index) in computedPictures" :key="index" :src="item.photo"
      @click="makeItThumbnail(index)" alt="">
    </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'gallery',
  props: {
    pictures: Array,
  },
  computed: {
    computedPictures() {
      return this.pictures;
    },
  },
  methods: {
    makeItThumbnail(idx) {
      this.$refs.thumbnail.src = this.computedPictures[idx].thumbnail;
    },
  },
};
</script>

<style scoped lang="scss">
.images-wrapper{
  display:flex;
  width:600px;
  margin:0 auto;
  overflow-y: auto;
}

.images-wrapper img{
  height:200px
}
</style>
