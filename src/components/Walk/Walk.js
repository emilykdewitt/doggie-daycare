import React from 'react';
import PropTypes from 'prop-types';

import walkShape from '../../helpers/propz/walkShape';
import dogShape from '../../helpers/propz/dogShape';
import employeeShape from '../../helpers/propz/employeeShape';

import './Walk.scss';

class Walk extends React.Component {
  static propTypes = {
    walk: walkShape.walkShape,
    dog: dogShape.dogShape,
    employee: employeeShape.employeeShape,
    deleteWalk: PropTypes.func.isRequired,
  }

  deleteWalkEvent = (e) => {
    const { walk, deleteWalk } = this.props;
    e.preventDefault();
    deleteWalk(walk.id);
  };

  render() {
    const { walk } = this.props;
    return (
      <div className="Walk col-3">
        <div className="card">
            <div className="card-body">
              <h3 className="card-title"><strong>Dog: </strong>{walk.dogId}</h3>
              <h5 className="card-text"><strong>Employee: </strong>{walk.employeeId}</h5>
              <h5 className="card-text"><strong>Date: </strong>{walk.date}</h5>
              <h5 className="card-time"><strong>Time: </strong>{walk.time}</h5>
              <button className="btn btn-danger" onClick={this.deleteWalkEvent}>Delete</button>
            </div>
        </div>
    </div>
    );
  }
}

export default Walk;
