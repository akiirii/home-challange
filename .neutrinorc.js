const airbnb = require('@neutrinojs/airbnb');
const react = require('@neutrinojs/react');
const jest = require('@neutrinojs/jest');

module.exports = {
  options: {
    root: __dirname,
  },
  use: [
    airbnb(),
    react({
      html: {
        title: 'home'
      }
    }),
    jest({
      setupFiles: ['raf/polyfill', '<rootDir>/test/enzyme-setup.js'],
    }),,
  ],
};
