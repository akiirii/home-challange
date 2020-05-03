import React from 'react';
import { shallow } from 'enzyme';
import { FormComponent } from '../src/FormComponent';

describe('FormComponent', () => {
  const wrapper = shallow(<FormComponent />);

  it('should form component', () => {
    expect(wrapper.children().length).toBeGreaterThan(0);
  });

  it('should completed when completed is true', () => {
    wrapper.instance().setState({ completed: true });
    expect(wrapper.contains('Your Form is completed')).toBe(true);
  });


  describe('onChange', () => {
    it('should set name', () => {
      wrapper.instance().onChange('name', 'test');
      expect(wrapper.instance().state.fields.name).toBe('test');
    });

    it('should not set rest of fields', () => {
      wrapper.instance().setState({ fields: { name: '', email: 'test@test.com' } });
      wrapper.instance().onChange('name', 'test');
      expect(wrapper.instance().state.fields.email).toBe('test@test.com');
    });
  });

  describe('onSubmit', () => {
    it('should set completed to true', () => {
      wrapper.instance().onSubmit();
      expect(wrapper.instance().state.completed).toBe(true);
    });
  });
});
