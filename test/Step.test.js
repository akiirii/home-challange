import React from 'react';
import { shallow } from 'enzyme';
import Step from '../src/Step';
import { ButtonSecondary, ButtonPrimary } from '../src/Step/style';

describe('Step', () => {
  const previous = jest.fn();
  const next = jest.fn();

  it('should render children', () => {
    const wrapper = shallow(
      <Step previous={previous} next={next}>
        <div className="children">mock children</div>
      </Step>,
    );
    expect(wrapper.contains(<div className="children">mock children</div>)).toBe(true);
  });

  it('should render both button', () => {
    const wrapper = shallow(<Step previous={previous} next={next} />);
    expect(wrapper.find(ButtonSecondary).exists()).toBe(true);
    expect(wrapper.find(ButtonPrimary).exists()).toBe(true);
  });

  it('should render only Next button when isFirst is true', () => {
    const wrapper = shallow(<Step previous={previous} next={next} isFirst />);
    expect(wrapper.find(ButtonSecondary).exists()).toBe(false);
  });

  it('should display "Done" button when isLast is true', () => {
    const wrapper = shallow(<Step previous={previous} next={next} isLast />);
    expect(wrapper.contains('Done')).toBe(true);
  });

  it('should call previous function when  ButtonSecondary is clicked', () => {
    const wrapper = shallow(<Step previous={previous} next={next} />);
    wrapper.find(ButtonSecondary).simulate('click');
    expect(previous).toHaveBeenCalled();
  });

  it('should call next function when  ButtonPrimary is clicked', () => {
    const wrapper = shallow(<Step previous={previous} next={next} />);
    wrapper.find(ButtonPrimary).simulate('click');
    expect(next).toHaveBeenCalled();
  });
});
