/* eslint-disable comma-dangle */
import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/ProviderMock';
import ProductMock from '../../__mocks__/ProductMock';
import Product from '../../components/Product';

describe('<Product />', () => {
  test('Render Product', () => {
    const product = shallow(
      <ProviderMock>
        <Product product={ProductMock} />
      </ProviderMock>
    );
    expect(product.length).toEqual(1);
  });

  test('Product add cart', () => {
    const handleAddToCart = jest.fn();

    const wrapper = mount(
      <ProviderMock>
        <Product product={ProductMock} handleAddToCart={handleAddToCart} />
      </ProviderMock>
    );

    wrapper.find('button').simulate('click');
    expect(handleAddToCart).toHaveBeenCalledTimes(1);
  });
});
