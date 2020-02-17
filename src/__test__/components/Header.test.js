/* eslint-disable comma-dangle */
import React from 'react';
import { mount, shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import ProviderMock from '../../__mocks__/ProviderMock';
import Header from '../../components/Header';

describe('<Header />', () => {
  test('Render Header', () => {
    const header = shallow(
      <ProviderMock>
        <Header />
      </ProviderMock>
    );
    expect(header.length).toEqual(1);
  });

  test('Render Header.Title', () => {
    const header = mount(
      <ProviderMock>
        <Header />
      </ProviderMock>
    );
    expect(header.find('.Header-title').text()).toEqual('Platzi Store');
  });
});

describe('Header Snapshot', () => {
  test('Check ui on component', () => {
    const footer = create(
      <ProviderMock>
        <Header />
      </ProviderMock>
    );
    expect(footer.toJSON()).toMatchSnapshot();
  });
});
