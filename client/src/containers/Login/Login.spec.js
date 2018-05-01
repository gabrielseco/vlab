import React from 'react';
import { shallow } from 'enzyme';
import { Login } from './Login';

describe('Login suite', () => {
  it('renders Login without any state injected', () => {
    const component = shallow(<Login />);
    expect(component).toBeDefined();
  });
});
