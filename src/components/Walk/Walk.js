import React from 'react';

import './Walk.scss';

import walkShape from '../../helpers/propz/walkShape';

class Walk extends React.Component {
  static propTypes = {
    walk: walkShape.walkShape,
  }

  render() {
    const { walk } = this.props;
    return (
      <div className="Walk col-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{walk.id}</h5>
            <p className="card-text">Dog: {walk.dogId}</p>
            <p className="card-text">Employee: {walk.employeeId}</p>
            <p className="card-text">Date: {walk.date}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Walk;
