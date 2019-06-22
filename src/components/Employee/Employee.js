import React from 'react';

import './Employee.scss';

import employeeShape from '../../helpers/propz/employeeShape';

class Employee extends React.Component {
  static propTypes = {
    employee: employeeShape.employeeShape,
  }

  render() {
    const { employee } = this.props;
    return (
      <div className="Employee col-3">
        <div className="card">
        <img src={employee.imageUrl} className="card-img-top" alt="Employee" />
          <div className="card-body">
            <h5 className="card-title">{employee.name}</h5>
            <p className="card-text">Job: {employee.job}</p>
            <p className="card-text">Favorite Breed: {employee.faveDogBreed}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Employee;
