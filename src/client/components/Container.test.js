import React from 'react';
import { shallow } from 'enzyme';

import Container from './Container';

describe('Container component tests', () => {
  it('Create snapshot', () => {
    // expect(component.toJSON()).toMatchSnapshot();
    const wrapper = shallow(<Container userId="100" />);
    expect(wrapper).toMatchSnapshot();
  });
});
