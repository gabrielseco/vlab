import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App suite', () => {
  it('renders App without any state injected', () => {
    const component = shallow(<App />);
    expect(component).toBeDefined();
  });
});
