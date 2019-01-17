import Api from '@/services/Api';

export default {
  getHotels() {
    return Api().get('/hotels');
  },
  getHotel(id) {
    return Api().get(`/hotelDetails/${id}`);
  },
};
