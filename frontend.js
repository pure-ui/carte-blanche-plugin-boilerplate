var React = require('react');

module.exports = function sourceFrontend(frontendData, data) {
  return (React.createElement('pre', { data.someVariable }));
}
