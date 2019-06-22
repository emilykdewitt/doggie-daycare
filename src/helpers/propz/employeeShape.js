import PropTypes from 'prop-types';

const employeeShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
  faveDogBreed: PropTypes.string.isRequired,
});

export default { employeeShape };
