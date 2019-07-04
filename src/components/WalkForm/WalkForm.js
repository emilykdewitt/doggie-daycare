import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import NewWalkData from '../../helpers/data/newWalkData';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
    };
  }

  state = {
    dogId: '',
    employeeId: '',
    date: '',
  };

  change = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
  }

  addWalk = (e) => {
    e.preventDefault();
    // this.props.onSubmit(this.state);
    const newWalk = {
      dogId: this.state.dogId,
      employeeId: this.state.employeeId,
      date: this.state.date,
    };
    NewWalkData.addNewWalk(newWalk)
      .then(() => {
        this.setState({
          dogId: '',
          employeeId: '',
          date: '',
        });
      })
      .catch(err => console.error('no new movie for you', err));
  };

  render() {
    return (
      <React.Fragment>
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          Dogs
        </DropdownToggle>
        <DropdownMenu name='dogName' placeholder='Dog Name' value={this.state.dogName} onChange={e => this.change(e)}>
          <DropdownItem>Ralphie</DropdownItem>
          <DropdownItem>Snowball</DropdownItem>
          <DropdownItem>Lucky</DropdownItem>
          <DropdownItem>Bullseye</DropdownItem>
          <DropdownItem>Beethoven</DropdownItem>
          <DropdownItem>Willy</DropdownItem>
          <DropdownItem>Margaret</DropdownItem>
          <DropdownItem>George</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <br />
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          Employees
        </DropdownToggle>
        <DropdownMenu name='employeeName' placeholder='Employee Name' value={this.state.employeeName} onChange={e => this.change(e)}>
          <DropdownItem>Margie</DropdownItem>
          <DropdownItem>Homer</DropdownItem>
          <DropdownItem>Bart</DropdownItem>
          <DropdownItem>Lisa</DropdownItem>
          <DropdownItem>Maggie</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <br />
      <input
        name='date'
        placeholder='Date'
        value={this.state.date}
        onChange={e => this.change(e)}
      />
      <br />
      <button onClick={e => this.addWalk(e)}>Submit</button>

    </React.Fragment>
    );
  }
}

export default Form;
