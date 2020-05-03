import React from 'react';
import PropTypes from 'prop-types';
import ErrorContainer from './style';

function ErrorMessage({ error }) {
  return (
    <ErrorContainer style={{ height: error ? '30px' : 0 }}>{error}</ErrorContainer>
  );
}

ErrorMessage.defaultProps = {
  error: '',
};

ErrorMessage.propTypes = {
  error: PropTypes.string,
};

export default ErrorMessage;
