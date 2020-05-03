import React from 'react';
import PropTypes from 'prop-types';
import {
  ButtonContainer, ButtonPrimary, ButtonSecondary,
} from './style';

function Step({
  children, next, previous, isLast, isFirst,
}) {
  const primaryMessage = isLast ? 'Done' : 'Next';
  return (
    <div>
      {children}
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
};
Step.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]).isRequired,
  previous: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
  isLast: PropTypes.bool,
  isFirst: PropTypes.bool,
};

export default Step;
