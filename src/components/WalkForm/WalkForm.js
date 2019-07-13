import React from 'react';
import 'firebase/auth';

import './WalkForm.scss';

class WalkForm extends React.Component {
  state = {
    dogId: '',
    employeeId: '',
    date: '',
    time: '',
  };

  dogChange = (e) => {
    e.preventDefault();
    this.setState({ dogId: e.target.value });
  }

  employeeChange = (e) => {
    e.preventDefault();
    this.setState({ employeeId: e.target.value });
  }

  dateChange = (e) => {
    e.preventDefault();
    this.setState({ date: e.target.value });
  }

  timeChange = (e) => {
    e.preventDefault();
    this.setState({ time: e.target.value });
  }

  handleSubmit = (e) => {
    // if not defined as a function, create the function ex: const { makeWalks } = this.props;
    // newWalk  is the object I'm passing back into the page
    e.preventDefault();
    const { addNewWalk } = this.props;
    const newWalk = {
      dogId: this.state.dogId,
      employeeId: this.state.employeeId,
      date: this.state.date,
      time: this.state.time,
    };
    addNewWalk(newWalk);
  }

  render() {
    const dogs = this.props.dogs.map(dog => (
      <option key={dog.name} value={dog.name}>{dog.name}</option>
    ));
    const employees = this.props.employees.map(employee => (
      <option key={employee.id} value={employee.name}>{employee.name}</option>
    ));
    return (
      <React.Fragment>
        <h2 className="section-header">Walk Schedule</h2>
        <div>
          <form className="walkForm" onSubmit={this.handleSubmit}>
            <label className="dogInputLabel">Select a dog:</label>
              <select className="dogInput"value={this.state.dogId} onChange={this.dogChange}>
                {dogs}
              </select>
              <label className="employeeInputLabel">Select an employee:</label>
              <select className="employeeInput" value={this.state.employeeId} onChange={this.employeeChange}>
                {employees}
              </select>
              <input
                className="dateInput"
                name="newWalk"
                type="text"
                placeholder="11/15/2019"
                value={this.state.date}
                onChange={this.dateChange} />
              <input
                className="timeInput"
                name="newWalk"
                type="text"
                placeholder="5:15pm"
                value={this.state.time}
                onChange={this.timeChange} />
            <input className="btn btn-info" type="submit" value="Add New Walk" onClick={this.handleSubmit} />
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default WalkForm;
