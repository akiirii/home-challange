import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { InputContainer, ErrorContainer, Label } from './style';
import { COLORS } from '../constants';

function InputField({
  submitted, name, value, onChange, error, label,
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
      <input
        style={inputStyle}
        type="text"
        name={name}
        value={value}
        onChange={handleChange}
      />
      {showError && <ErrorContainer>{error}</ErrorContainer>}
    </InputContainer>
  );
}

InputField.defaultProps = {
  submitted: false,
  error: '',
  value: '',
  label: '',
};

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  submitted: PropTypes.bool,
  label: PropTypes.string,
};

export default InputField;
