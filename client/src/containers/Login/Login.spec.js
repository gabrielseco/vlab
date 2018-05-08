import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { Login } from './Login';

describe('Login suite', () => {
  const component = shallow(<Login />);
  it('renders Login without any state injected', () => {
    expect(component).toBeDefined();
  });

  it('should call the onChange event', () => {
    const value = 'gabriel';
    const usernameField = component.find('.input__username_js');
    usernameField.simulate('change', {
      target: {
        name: 'username',
        value: value
      }
    });

    expect(component.state().username).toBe(value);
  });

  it('should create the snapshot of the login', () => {
    const tree = renderer.create(component).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
