import React from 'react';
import { shallow } from 'enzyme';
import App from '../../src/client/components/App';

describe('<App /> component tests', () => {
  it('<App /> should contains <Container />', () => {
    const expected = '<Container />';
    const wrapper = shallow(<App />);
    const actual = wrapper.text();

    // Assert
    expect(actual).toMatch(expected);
  });

  it('<App /> should contains <Container />', () => {
    const expected = '<Nav />';
    const wrapper = shallow(<App />);
    const actual = wrapper.text();

    // Assert
    expect(actual).toMatch(expected);
  });
});
