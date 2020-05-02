import React from 'react';

import { Container } from './style';
import Input from '../Input';
import Step from '../Step';

const config = [
  {
    name: 'name',
    label: 'Full Name',
    type: 'text',
  },
  {
    name: 'email',
    label: 'Email',
    type: 'email',
  },
  {
    name: 'phone',
    label: 'Phone number',
    type: 'text',
  },
  {
    name: 'salary',
    label: 'Salary indicatio',
    type: 'text',
  },
];

export class FormComponent extends React.Component {
  state = {
    currentStep: 0,
    submitted: false,
    fields: {
      name: '',
      email: '',
      phone: '',
      salary: '',
    },
    errors: {
      name: '',
      email: '',
      phone: '',
      salary: '',
    },
  };

  onChange = (name, value) => {
    this.setState((state) => ({ fields: { ...state.fields, [name]: value } }));
  };

  changeStep = (step) => {
    const { currentStep } = this.state;
    const newStep = Math.max(0, Math.min(config.length - 1, currentStep + step));
    this.setState({ currentStep: newStep || 0 });
  };

  next = () => this.changeStep(1);

  previous = () => this.changeStep(-1);

  render() {
    const {
      submitted, errors, fields, currentStep,
    } = this.state;

    const filed = config[currentStep];

    return (
      <Container>
        <Step next={this.next} previous={this.previous}>
          <Input
            onChange={this.onChange}
            name={filed.name}
            label={filed.label}
            submitted={submitted}
            value={fields[filed.name]}
            error={errors[filed.name]}
          />
        </Step>

      </Container>
    );
  }
}

export default FormComponent;
