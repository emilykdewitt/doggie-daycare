import PropTypes from 'prop-types';

const dogShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  disposition: PropTypes.string.isRequired,
  faveTreat: PropTypes.string.isRequired,
  isPettable: PropTypes.bool.isRequired,
  furType: PropTypes.string.isRequired,
});

export default { dogShape };
