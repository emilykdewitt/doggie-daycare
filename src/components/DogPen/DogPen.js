import React from 'react';
// import PropTypes from 'prop-types';

import dogsData from '../../helpers/data/dogsData';
// import dogShape from '../../helpers/propz/dogShape';

import Dog from '../Dog/Dog';

import './DogPen.scss';

class DogPen extends React.Component {
  state = {
    dogs: [],
  }

  componentDidMount() {
    dogsData.getDogs()
      .then(dogs => this.setState({ dogs }))
      .catch(err => console.error('could not get dogs', err));
  }

  render() {
    const dogComponents = this.state.dogs.map(dog => (
      <Dog key={dog.id} dog={dog}/>
    ));
    return (
      <div className="DogPen d-flex flex-wrap">
        { dogComponents }
      </div>
    );
  }
}

export default DogPen;
