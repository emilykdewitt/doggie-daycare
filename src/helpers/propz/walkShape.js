import PropTypes from 'prop-types';

const walkShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  dogId: PropTypes.string.isRequired,
  employeeId: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
});

export default { walkShape };
