import React from 'react';
// import PropTypes from 'prop-types';

import walksData from '../../helpers/data/walksData';
// import dogShape from '../../helpers/propz/dogShape';

import Walk from '../Walk/Walk';

import './WalkSchedule.scss';

class WalkSchedule extends React.Component {
  state = {
    walks: [],
  }

  componentDidMount() {
    walksData.getWalks()
      .then(walks => this.setState({ walks }))
      .catch(err => console.error('could not get walks', err));
  }

  render() {
    const walkComponents = this.state.walks.map(walk => (
      <Walk key={walk.id} walk={walk}/>
    ));
    return (
      <div className="WalkSchedule d-flex flex-wrap">
        { walkComponents }
      </div>
    );
  }
}

export default WalkSchedule;
