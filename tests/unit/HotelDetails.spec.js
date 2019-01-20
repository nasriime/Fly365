import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import HotelDetails from '@/components/HotelDetails.vue';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(HotelDetails, {
      propsData: { msg },
    });
    expect(wrapper.text()).to.include(msg);
  });

  it('check changeCurrentPhoto method', () => {
    const wrapper = shallowMount(HotelDetails);
    wrapper.vm.find('.form-control').trigger('input');
    expect(wrapper.vm.nights).toBe(2);
  });
});
