import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Separator from './Separator';

describe('Separator suite', () => {
  const component = shallow(<Separator />);

  it('should render the Separator component', () => {
    expect(component).toBeDefined();
  });

  it('should create the snapshot', () => {
    const tree = renderer.create(component).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
