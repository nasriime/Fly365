import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Pagination from '@/components/Pagination.vue';

describe('Pagination.vue', () => {
  it('renders props.msg when passed', () => {
    const maxVisibleButtons = 3;
    const totalPages = 6;
    const total = 16;
    const perPage = 3;
    const currentPage = 1;
    const wrapper = shallowMount(Pagination, {
      propsData: {
        maxVisibleButtons, totalPages, total, perPage, currentPage,
      },
    });
    expect(wrapper.vm.startPage).toBe(1);
  });

  it('check onClickPage method', () => {
    const wrapper = shallowMount(Pagination);
    expect(wrapper.vm.startPage).toBe(1);
    expect(wrapper.vm.endPage).toBe(1);
    wrapper.vm.onClickPage(3);
    expect(wrapper.vm.startPage).toBe(1);
    expect(wrapper.vm.endPage).toBe(1);
  });
});
