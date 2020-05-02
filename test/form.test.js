import React from 'react';
import { shallow } from 'enzyme';
import { FormComponent } from '../src/FormComponent';

describe('FormComponent', () => {
  let wrapper;
  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<FormComponent />);
  });

  it('should render component', () => {
    expect(wrapper.children().length).toBeGreaterThan(0);
  });


  describe('onChange', () => {
    it('should set field state', () => {
      wrapper.instance().onChange('name', 'test');
      expect(wrapper.instance().state.fields.name).toBe('test');
    });
  });
});
