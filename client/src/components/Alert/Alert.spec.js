import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Alert from './Alert';

describe('Alert suite', () => {
  const component = shallow(<Alert danger>Mensaje de alerta</Alert>);

  it('should render the Alert component', () => {
    expect(component).toBeDefined();
  });

  it('should create the snapshot with props children and danger', () => {
    const tree = renderer.create(component).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
