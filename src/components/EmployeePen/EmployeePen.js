import React from 'react';
// import PropTypes from 'prop-types';

import employeesData from '../../helpers/data/employeesData';
// import dogShape from '../../helpers/propz/dogShape';

import Employee from '../Employee/Employee';

import './EmployeePen.scss';

class EmployeePen extends React.Component {
  state = {
    employees: [],
  }

  componentDidMount() {
    employeesData.getEmployees()
      .then(employees => this.setState({ employees }))
      .catch(err => console.error('could not get employees', err));
  }

  render() {
    const employeeComponents = this.state.employees.map(employee => (
      <Employee key={employee.id} employee={employee}/>
    ));
    return (
      <React.Fragment>
        <h2 className="section-header">Our Employees</h2>
        <div className="EmployeePen d-flex flex-wrap">
          { employeeComponents }
        </div>
      </React.Fragment>
    );
  }
}

export default EmployeePen;
