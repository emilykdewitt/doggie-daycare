import React from 'react';

import './Dog.scss';

import dogShape from '../../helpers/propz/dogShape';

class Dog extends React.Component {
  static propTypes = {
    dog: dogShape.dogShape,
  }

  render() {
    const { dog } = this.props;
    return (
      <div className="Dog col-3">
        <div className="card">
        <img src={dog.imageUrl} className="card-img-top" alt="Dog" />
          <div className="card-body">
            <h5 className="card-title">{dog.name}</h5>
            <p className="card-text">Disposition: {dog.disposition}</p>
            <p className="card-text">Favorite Treat: {dog.faveTreat}</p>
            <p className="card-text">Fur type: {dog.furType}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Dog;
