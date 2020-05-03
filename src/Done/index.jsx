import React from 'react';
import PropTypes from 'prop-types';

function Done({ fields, options }) {
  console.log(fields, options);
  return (
    <div>
      {options.map((option) => (
        <div key={option.name}>
          {option.label}
          :
          {fields[option.name]}
        </div>
      ))}
    </div>
  );
}

Done.defaultProps = {
  options: [],
};

Done.propTypes = {
  fields: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    salary: PropTypes.string,
  }).isRequired,
  options: PropTypes.arrayOf(PropTypes.object),
};

export default Done;
