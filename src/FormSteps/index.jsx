/* TODO should be changed in eslint config */
/* eslint react/jsx-props-no-spreading: 0 */

import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';
import Radio from '../Radio';
import Done from '../Done';
import Step from '../Step';

const components = {
  Input,
  Radio,
  Done,
};

export class FormSteps extends React.Component {
  state = {
    submitted: false,
    currentStep: 0,
  };

  // TODO proper validation
  getError = () => (this.getValue() ? '' : 'This field is required');

  getValue = () => {
    const { fields, config } = this.props;
    const { currentStep } = this.state;
    const filed = config[currentStep];
    return fields[filed.name];
  };

  changeStep = (step) => {
    const { currentStep } = this.state;
    const { config } = this.props;
    const newStep = Math.max(0, Math.min(config.length - 1, currentStep + step));
    this.setState({ currentStep: newStep || 0, submitted: false });
  };

  next = () => {
    const { currentStep } = this.state;
    const { config, onSubmit } = this.props;
    this.setState({ submitted: true });

    if (currentStep === config.length - 1) {
      onSubmit();
      return;
    }

    if (this.getError()) return;
    this.changeStep(1);
  };

  render() {
    const { config, fields, onChange } = this.props;
    const { currentStep, submitted } = this.state;


    const filed = config[currentStep];
    const isFirst = !currentStep;
    const isLast = currentStep === config.length - 1;
    const error = submitted ? this.getError() : '';

    const Component = components[filed.component];

    return (
      <Step next={this.next} previous={this.previous} isFirst={isFirst} isLast={isLast}>
        <Component
          {...filed}
          onChange={onChange}
          submitted={submitted}
          value={fields[filed.name]}
          error={error}
          fields={fields}
        />
      </Step>
    );
  }
}

FormSteps.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  config: PropTypes.arrayOf(PropTypes.object).isRequired,
  fields: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    salary: PropTypes.string,
  }).isRequired,
};

export default FormSteps;
