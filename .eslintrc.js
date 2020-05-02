const neutrino = require('neutrino');

module.exports = {
  ...neutrino().eslintrc(),
  rules: {
    ...neutrino().eslintrc().rules,
    'react/jsx-props-no-spreading': 0
  }
};




