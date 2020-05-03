import React from 'react';
import PropTypes from 'prop-types';
import {
  ButtonContainer, ButtonPrimary, ButtonSecondary, StepContainer,
} from './style';

function Step({
  children, next, previous, isLast, isFirst,
}) {
  const primaryMessage = isLast ? 'Done' : 'Next';
  return (
    <div>
      <StepContainer>{children}</StepContainer>
      <ButtonContainer style={{ justifyContent: isFirst && 'flex-end' }}>
        {!isFirst && (
        <ButtonSecondary type="secondary" onClick={previous}>
          Previous
        </ButtonSecondary>
        )}
        <ButtonPrimary type="primary" onClick={next}>
          {primaryMessage}
        </ButtonPrimary>
      </ButtonContainer>
    </div>
  );
}

Step.defaultProps = {
  isLast: false,
  isFirst: false,
  children: null,
};
Step.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  previous: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
  isLast: PropTypes.bool,
  isFirst: PropTypes.bool,
};

export default Step;
