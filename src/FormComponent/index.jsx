/* TODO should be changed in eslint config */
/* eslint react/jsx-props-no-spreading: 0 */

import React from 'react';
import { Container, SuccessContainer } from './style';
import { FormSteps } from '../FormSteps';
import { DONE_CONFIG, FORM_CONFIG } from './config';


const config = [...FORM_CONFIG, ...DONE_CONFIG];

export class FormComponent extends React.Component {
  state = {
    completed: false,
    fields: {
      name: '',
      email: '',
      phone: '',
      salary: '',
    },
  };

  onChange = (name, value) => {
    this.setState((state) => ({ fields: { ...state.fields, [name]: value } }));
  };

  onSubmit = () => this.setState({ completed: true });

  render() {
    const { fields, completed } = this.state;

    if (completed) {
      return (
        <SuccessContainer>
          Your Form is completed
        </SuccessContainer>
      );
    }

    return (
      <Container>
        <FormSteps
          config={config}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          fields={fields}
        />
      </Container>
    );
  }
}

export default FormComponent;
