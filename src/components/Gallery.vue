<template>
  <div class="text-center">
    <div v-if="!pictures">Gallery is loading ........</div>
    <div v-else>
      <img class="mainPhoto" :src="this.hotelPictures[currentPhoto].photo" alt="">
      <div  class="images-wrapper mt-5">
        <img  v-for="(item,index) in hotelPictures" :key="index" :src="item.thumbnail"
        :class="{ active : currentPhoto == index }"
        @click="changeCurrentPhoto(index)" alt="">
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
};
</script>

<style scoped lang="scss">
.mainPhoto{
  height:300px;
  border: 5px solid #d1d4d6;
  border-radius: 3px;

}
.images-wrapper{
  display:flex;
  width:539px;
  margin:0 auto;
  overflow-y: auto;
}
.images-wrapper {
  & > img{
    cursor: pointer;

    &.active{
      border: 2px solid #5cb3fd;
    }
    & + img{
    margin-left: 10px;
    }
  }
}
</style>
