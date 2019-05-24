import React from 'react';
import { shallow } from 'enzyme';
import { DefaultPage } from '../../../src/features/try-api/DefaultPage';

describe('try-api/DefaultPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      tryApi: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <DefaultPage {...props} />
    );

    expect(
      renderedComponent.find('.try-api-default-page').length
    ).toBe(1);
  });
});
