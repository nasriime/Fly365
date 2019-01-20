import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Reviews from '@/components/Reviews.vue';

describe('Reviews.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(Reviews, {
      propsData: { msg },
    });
    expect(wrapper.text()).to.include(msg);
  });

  it('check toggleSort method', () => {
    const wrapper = shallowMount(Reviews);
    expect(wrapper.vm.asc).toBe(0);
    wrapper.vm.changeCurrentPhoto(false);
    expect(wrapper.vm.asc).toBe(true);
  });
});
