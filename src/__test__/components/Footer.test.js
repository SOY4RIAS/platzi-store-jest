import React from 'react';
import { create } from 'react-test-renderer';
import { mount } from 'enzyme';

import Footer from '../../components/Footer';

describe('<Footer />', () => {
  const footer = mount(<Footer />);
  test('Render', () => {
    expect(footer.length).toEqual(1);
  });

  test('Render footer.title', () => {
    expect(footer.find('.Footer-title').text()).toEqual('Platzi Store');
  });
});

describe('Footer Snapshot', () => {
  test('Check ui on component', () => {
    const footer = create(<Footer />);
    expect(footer.toJSON()).toMatchSnapshot();
  });
});
