import React from 'react';
import { shallow } from 'enzyme';

import Home from './Home';

describe('Home suite', () => {
  it('should render the Home component', () => {
    const component = shallow(<Home />);
    expect(component).toBeDefined();
  });
});
