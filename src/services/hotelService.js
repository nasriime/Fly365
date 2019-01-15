import Api from '@/services/Api';

export default {
  getHotels() {
    return Api.gett('/hotels');
  },
  getHotel(id) {
    return Api.get(`/hotel/${id}`);
  },
};
