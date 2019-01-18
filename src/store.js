import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    nights: 1,
    hotelID: null,
  },
  mutations: {
    changeNightsNumber(state, number) {
      state.nights = number;
    },
    changeHotelID(state, id) {
      state.hotelID = id;
    },
  },
  actions: {

  },
});
