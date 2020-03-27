import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import Container from '../../src/client/components/Container';

jest.mock('react-dom');
const mockStore = configureStore([]);

describe('Container component tests', () => {
  it('Create snapshot', () => {
    // expect(component.toJSON()).toMatchSnapshot();
    const wrapper = shallow(
      <Container
        store={mockStore({
          paths: ['xml1'],
        })}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
