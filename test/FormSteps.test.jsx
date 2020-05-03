import React from 'react';
import { shallow } from 'enzyme';
import { FormSteps } from '../src/FormSteps';

const configMock = [
  {
    name: 'name',
    label: 'Test Name',
    component: 'Input',
  },
  {
    name: 'email',
    label: 'Test Email',
    component: 'Input',
  },
];


const fieldsMock = {
  name: 'test',
  email: 'test@test.om',
};
const onChange = jest.fn();
const onSubmit = jest.fn();

describe('FormSteps', () => {
  let wrapper;

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<FormSteps config={configMock} fields={fieldsMock} onChange={onChange} onSubmit={onSubmit} />);
  });

  it('should render component', () => {
    expect(wrapper.children().length).toBeGreaterThan(0);
  });

  describe('previous', () => {
    it('should call changeStep with -1', () => {
      const spy = jest.spyOn(wrapper.instance(), 'changeStep');
      wrapper.instance().previous();
      expect(spy).toHaveBeenCalledWith(-1);
    });
  });

  describe('next', () => {
    it('should call changeStep with 1', () => {
      const spy = jest.spyOn(wrapper.instance(), 'changeStep');
      wrapper.instance().next();
      expect(spy).toHaveBeenCalledWith(1);
    });

    it('should call onSubmit when it is last step 1', () => {
      wrapper.instance().setState({ currentStep: 1 });
      const spy = jest.spyOn(wrapper.instance().props, 'onSubmit');
      wrapper.instance().next();
      expect(spy).toHaveBeenCalled();
    });

    it('should change submitted to true when step do not change', () => {
      wrapper.setProps({ fields: {} });
      wrapper.instance().next();
      expect(wrapper.instance().state.submitted).toBe(true);
    });
  });

  describe('getValue', () => {
    it('should return current step value', () => {
      expect(wrapper.instance().getValue()).toBe('test');
    });

    it('should return empty string when current step value do not exist', () => {
      wrapper.setProps({ fields: {} });
      expect(wrapper.instance().getValue()).toBe('');
    });
  });

  describe('getError', () => {
    it('should return empty string when value exists', () => {
      expect(wrapper.instance().getError()).toBe('');
    });

    it('should return error when current value do not exist', () => {
      wrapper.setProps({ fields: {} });
      expect(wrapper.instance().getError()).toBe('This field is required');
    });
  });

  describe('getProgress', () => {
    it('should return 0 for first step', () => {
      expect(wrapper.instance().getProgress(0, 10)).toBe(0);
    });

    it('should return 50 for middle step', () => {
      expect(wrapper.instance().getProgress(5, 10)).toBe(50);
    });

    it('should return 100 for last step', () => {
      expect(wrapper.instance().getProgress(10, 10)).toBe(100);
    });
  });

  describe('changeStep', () => {
    it('should add 1 into current step', () => {
      wrapper.instance().changeStep(1);
      expect(wrapper.instance().state.currentStep).toBe(1);
    });

    it('should not add 1 into current step when it is last step', () => {
      wrapper.instance().setState({ currentStep: 1 });
      wrapper.instance().changeStep(1);
      expect(wrapper.instance().state.currentStep).toBe(1);
    });

    it('should subtract 1 into current step', () => {
      wrapper.instance().setState({ currentStep: 1 });
      wrapper.instance().changeStep(-1);
      expect(wrapper.instance().state.currentStep).toBe(0);
    });

    it('should not subtract 1 into current step when it is first step', () => {
      wrapper.instance().changeStep(-1);
      expect(wrapper.instance().state.currentStep).toBe(0);
    });
  });
});
