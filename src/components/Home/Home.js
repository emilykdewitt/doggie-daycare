import React from 'react';

import myDogs from '../../App/dogs';
import DogPen from '../DogPen/DogPen';

import myEmployees from '../../App/employees';
import EmployeePen from '../EmployeePen/EmployeePen';

import '../../App/App.scss';

import 'bootstrap/dist/css/bootstrap.min.css';

class Home extends React.Component {
  state = {
    dogs: [],
    employees: [],
  }

  componentDidMount() {
    this.setState({ dogs: myDogs, employees: myEmployees });
  }

  render() {
    const { dogs, employees } = this.state;
    return (
      <div className="App">
        <div className="page-title">Doggie Day Care</div>
        <div className="our-dogs-title">Meet Our Clients!</div>
        <DogPen dogs={dogs}/>
        <div className="our-staff-title">Meet Our Staff!</div>
        <EmployeePen employees={employees}/>
      </div>
    );
  }
}

export default Home;
