import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Gallery from '@/components/Gallery.vue';

describe('Gallery.vue', () => {
  it('renders props.pictures when passed', () => {
    const pictures = {
      thumbnail: 'http://picsum.photos/100/100/?image=28',
      photo: 'http://picsum.photos/1015/1015/?image=28',
    };
    const wrapper = shallowMount(Gallery, {
      propsData: { pictures },
    });
    expect(wrapper.vm.currentPhoto).to.equal(0);
    expect(wrapper.hotelPictures).to.equal.an('array');
  });

  it('check changeCurrentPhoto method', () => {
    const wrapper = shallowMount(Gallery);
    expect(wrapper.vm.currentPhoto).to.equal(0);
    wrapper.vm.changeCurrentPhoto(1);
    expect(wrapper.vm.currentPhoto).to.equal(1);
  });
});
