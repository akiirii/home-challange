import React from 'react';
import { shallow } from 'enzyme';
import Radio from '../src/Radio';

describe('Radio', () => {
  const onChange = jest.fn();
  const options = ['option1', 'option2'];

  it('should call onChange with name and value Radio is changed', () => {
    const wrapper = shallow(<Radio onChange={onChange} name="test" label="Test Label" value="test1" options={options} />);
    const event = { target: { value: options[0] } };
    wrapper.find('input').first().simulate('change', event);
    expect(onChange).toHaveBeenCalledWith('test', options[0]);
  });

  it('should display error when error exist and submitted is true ', () => {
    const error = 'error Msg';
    const wrapper = shallow(<Radio onChange={onChange} name="test" label="Test Label" value="test1" options={options} error={error} submitted />);
    expect(wrapper.contains(error)).toBe(true);
  });

  it('should not display error when error exist and submitted is false ', () => {
    const error = 'error Msg';
    const wrapper = shallow(<Radio onChange={onChange} name="test" label="Test Label" value="test1" options={options} error={error} />);
    expect(wrapper.contains(error)).toBe(false);
  });
});
