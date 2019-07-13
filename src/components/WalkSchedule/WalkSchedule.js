import React from 'react';

import Walk from '../Walk/Walk';

import './WalkSchedule.scss';

class WalkSchedule extends React.Component {
  render() {
    const walkComponents = this.props.walks.map(walk => (
      <Walk key={walk.id} walk={walk} deleteWalk={this.props.deleteWalk} />
    ));
    return (
      <div className="walkScheduleFull">
        <div className="WalkSchedule d-flex flex-wrap">
          { walkComponents }
        </div>
      </div>
    );
  }
}

export default WalkSchedule;
