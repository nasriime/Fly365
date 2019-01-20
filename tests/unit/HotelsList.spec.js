import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import HotelsList from '@/components/HotelsList.vue';

describe('HotelsList.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(HotelsList, {
      propsData: { msg },
    });
    expect(wrapper.text()).to.include(msg);
  });
});
