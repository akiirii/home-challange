import React from 'react';
import PropTypes from 'prop-types';
import { ProgressContainer, Progress } from './style';

function ProgressBar({ progress }) {
  return (
    <ProgressContainer>
      <Progress style={{ width: `${progress}%` }} />
    </ProgressContainer>
  );
}

ProgressBar.defaultProps = {
  progress: 0,
};

ProgressBar.propTypes = {
  progress: PropTypes.number,
};

export default ProgressBar;
