<template>
  <div class="mb-5">
    <!-- loader -->
    <div class="text-center" v-if="!pictures">
      <!-- Loader -->
      <i class="fas fa-circle-notch fa-spin fa-2x"></i>
    </div>
    <div class="text-center" v-else>
      <!-- Main Picture-->
      <img class="mainPhoto" :src="this.hotelPictures[currentPhoto].photo" alt="">
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <div  class="images-wrapper d-flex mt-5">
            <!-- looping over hotel's pictures -->
            <img  v-for="(item,index) in hotelPictures" :key="index" :src="item.thumbnail"
              :class="{ active : currentPhoto == index }"
              @click="changeCurrentPhoto(index)" alt="">
          </div>
        </div>
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
  data() {
    return {
      currentPhoto: 0,
    };
  },
  computed: {
    hotelPictures() {
      return this.pictures;
    },
  },
  methods: {
    changeCurrentPhoto(idx) {
      this.currentPhoto = idx;
    },
  },
  watch: {
    pictures() {
      this.currentPhoto = 0;
    },
  },
};
</script>

<style scoped lang="scss">
.mainPhoto{
  height:300px;
  border: 5px solid #d1d4d6;
  border-radius: 3px;
  @media(max-width:480px){
    width:100%;
  }
}
.images-wrapper{
  overflow-y: auto;
}
.images-wrapper {
  & > img{
    cursor: pointer;

    &.active{
      border: 3px solid #5cb3fd;
    }
    & + img{
    margin-left: 10px;
    }
  }
}
</style>
