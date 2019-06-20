import React from 'react';
import PropTypes from 'prop-types';

import employeeShape from '../../helpers/propz/employeeShape';

import Employee from '../Employee/Employee';

import './EmployeePen.scss';

class EmployeePen extends React.Component {
  static propTypes = {
    employees: PropTypes.arrayOf(employeeShape.employeeShape),
  }

  render() {
    const { employees } = this.props;
    const makeEmployees = employees.map(employee => (
      <Employee key={employee.id} employee={employee} />
    ));
    return (
      <div className="EmployeePen d-flex flex-wrap">
        { makeEmployees }
      </div>
    );
  }
}

export default EmployeePen;
