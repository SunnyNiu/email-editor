import React from 'react';
import { shallow } from 'enzyme';

import Container from './Container';

describe('Container component tests', () => {
  it('Create snapshot', () => {
    const wrapper = shallow(<Container />);
    expect(wrapper).toMatchSnapshot();
  });
});
