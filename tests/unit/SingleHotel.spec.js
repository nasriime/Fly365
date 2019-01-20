import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import SingleHotel from '@/components/SingleHotel.vue';

describe('SingleHotel.vue', () => {
  it('renders props.hotel when passed', () => {
    const hotel = {
      id: 37681,
      name: 'Hilton Sharm',
      totalReviews: 1678,
      totalScore: 8.5,
      pricePerNight: 180,
      photo: 'http://picsum.photos/100/100/?image=109',
    };
    const wrapper = shallowMount(SingleHotel, {
      propsData: { hotel },
    });
    expect(wrapper.text()).to.include(hotel);
  });
});
