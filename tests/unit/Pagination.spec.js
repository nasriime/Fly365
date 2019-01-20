import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Pagination from '@/components/Pagination.vue';

describe('Pagination.vue', () => {
  let wrapper = null;
  beforeEach(() => {
    const maxVisibleButtons = 3;
    const totalPages = 6;
    const total = 16;
    const perPage = 3;
    const currentPage = 1;
    wrapper = shallowMount(Pagination, {
      propsData: {
        maxVisibleButtons, totalPages, total, perPage, currentPage,
      },
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });
  it('renders start page when passed', () => {
    expect(wrapper.vm.startPage).to.equal(1);
  });

  it('check onClickPage method', () => {
    wrapper = shallowMount(Pagination);
    expect(wrapper.vm.startPage).to.equal(1);
    expect(wrapper.vm.endPage).to.equal(1);
    wrapper.vm.onClickPage(3);
    expect(wrapper.vm.startPage).to.equal(1);
    expect(wrapper.vm.endPage).to.equal(1);
  });

  it('check onClickFirstPage method', () => {
    wrapper = shallowMount(Pagination);
    expect(wrapper.vm.startPage).to.equal(1);
    expect(wrapper.vm.currentPage).to.equal(1);
    wrapper.vm.onClickFirstPage();
    expect(wrapper.vm.startPage).to.equal(1);
    expect(wrapper.vm.currentPage).to.equal(1);
  });

  it('check onClickLastPage method', () => {
    wrapper = shallowMount(Pagination);
    expect(wrapper.vm.endPage).to.equal(wrapper.vm.totalPages);
    wrapper.vm.onClickLastPage();
    expect(wrapper.vm.onClickLastPage).to.equal(1);
  });

  it('check onClickNextPage method', () => {
    wrapper = shallowMount(Pagination);
    expect(wrapper.vm.currentPage).to.equal(1);
    wrapper.vm.onClickNextPage();
    expect(wrapper.vm.currentPage).to.equal(2);
  });

  it('check onClickPreviousPage method', () => {
    wrapper = shallowMount(Pagination);
    expect(wrapper.vm.currentPage).to.equal(2);
    wrapper.vm.onClickPreviousPage();
    expect(wrapper.vm.currentPage).to.equal(1);
  });
});
