import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  InputContainer, ErrorContainer, Label,
} from './style';
import { COLORS } from '../constants';


function RadioGroup({
  submitted, name, value, onChange, error, label, options,
}) {
  const [isDirty, setDirty] = useState(false);
  const showError = error && (isDirty || submitted);
  const inputStyle = showError ? { borderColor: COLORS.red } : {};

  const handleChange = ({ target }) => {
    setDirty(true);
    onChange(name, target.value);
  };

  return (
    <InputContainer>
      <Label>{label}</Label>
      {options.map((option) => (
        <div key={option}>
          <input
            style={inputStyle}
            type="radio"
            checked={value === option}
            name={name}
            value={option}
            onChange={handleChange}
          />
          <Label htmlFor={name}>{option}</Label>
        </div>
      ))}
      {showError && <ErrorContainer>{error}</ErrorContainer>}
    </InputContainer>
  );
}

RadioGroup.defaultProps = {
  submitted: false,
  error: '',
  value: '',
  label: '',
};

RadioGroup.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  submitted: PropTypes.bool,
  label: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default RadioGroup;
