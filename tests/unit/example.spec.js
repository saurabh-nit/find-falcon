import { shallowMount } from '@vue/test-utils';
import Header from '@/components/Header.vue';

describe('Header.vue', () => {
  it('Header', () => {
    const wrapper = shallowMount(Header);
    expect(wrapper.exists()).toBe(true);
  });
});
