import React from 'react';
import PropTypes from 'prop-types';
import { Row, Title } from './style';

function Done({ fields, options }) {
  return (
    <div>
      {options.map((option) => (
        <Row key={option.name}>
          <Title>
            {option.label}
          </Title>
          <div>
            {fields[option.name]}
          </div>
        </Row>
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
