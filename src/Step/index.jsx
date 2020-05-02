import React from 'react';
import PropTypes from 'prop-types';
import {
  ButtonContainer, ButtonPrimary, ButtonSecondary,
} from './style';

function Step({ children, next, previous }) {
  return (
    <div>
      {children}
      <ButtonContainer>
        <ButtonSecondary type="secondary" onClick={previous}>
          Previous
        </ButtonSecondary>
        <ButtonPrimary type="primary" onClick={next}>
          Next
        </ButtonPrimary>
      </ButtonContainer>
    </div>
  );
}


Step.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]).isRequired,
  previous: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
};

export default Step;
