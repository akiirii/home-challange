import React from 'react';
import { shallow } from 'enzyme';
import Done from '../src/Done';

const fields = { name: 'test' };
const options = [{ name: 'name', label: 'Name' }, { name: 'email', label: 'E-mail' }];

describe('Done', () => {
  const wrapper = shallow(<Done fields={fields} options={options} />);

  it('should render all options', () => {
    expect(wrapper.children().length).toBe(2);
  });
});
