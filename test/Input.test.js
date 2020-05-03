import React from 'react';
import { shallow } from 'enzyme';
import Input from '../src/Input';
import ErrorMessage from '../src/ErrorMessage';

describe('Input', () => {
  const onChange = jest.fn();

  it('should call onChange with name and value input is changed', () => {
    const wrapper = shallow(<Input onChange={onChange} name="test" label="Test Label" value="test1" />);
    const event = { target: { value: 'test2' } };
    wrapper.find('input').simulate('change', event);
    expect(onChange).toHaveBeenCalledWith('test', 'test2');
  });

  it('should display error when error exist and submitted is true ', () => {
    const error = 'error Msg';
    const wrapper = shallow(<Input onChange={onChange} name="test" label="Test Label" value="" error={error} submitted />);
    expect(wrapper.find(ErrorMessage).prop('error')).toBe(error);
  });

  it('should not display error when error exist and submitted is false ', () => {
    const error = 'error Msg';
    const wrapper = shallow(<Input onChange={onChange} name="test" label="Test Label" value="test1" error={error} />);
    expect(wrapper.contains(error)).toBe(false);
  });
});
