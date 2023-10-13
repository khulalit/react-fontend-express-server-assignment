// tests/Header.test.tsx

import { mount } from 'vite-test-utils';
import Header from '../src/components/Header.vue';

describe('Header component', () => {
  it('renders back button on /details page', async () => {
    const wrapper = mount(Header, { props: { currentRoute: '/details' } });
    await wrapper.setData({}); // This triggers a re-render

    expect(wrapper.find('[data-testid="back-button"]').exists()).toBe(true);
  });

  it('renders Users List text on home page', async () => {
    const wrapper = mount(Header, { props: { currentRoute: '/' } });
    await wrapper.setData({});

    expect(wrapper.text()).toContain('Users List');
  });

  it('renders User Details text on /details page', async () => {
    const wrapper = mount(Header, { props: { currentRoute: '/details' } });
    await wrapper.setData({});

    expect(wrapper.text()).toContain('User Details');
  });

  it('does not render back button on home page', async () => {
    const wrapper = mount(Header, { props: { currentRoute: '/' } });
    await wrapper.setData({});

    expect(wrapper.find('[data-testid="back-button"]').exists()).toBe(false);
  });
});
