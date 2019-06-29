import React from 'react';

import myDogs from '../../App/dogs';
import DogPen from '../DogPen/DogPen';

import myEmployees from '../../App/employees';
import EmployeePen from '../EmployeePen/EmployeePen';

import myWalks from '../../App/walks';
import WalkSchedule from '../WalkSchedule/WalkSchedule';

import WalkForm from '../WalkForm/WalkForm';

import '../../App/App.scss';

import 'bootstrap/dist/css/bootstrap.min.css';

class Home extends React.Component {
  state = {
    dogs: [],
    employees: [],
    walks: [],
  }

  componentDidMount() {
    this.setState({ dogs: myDogs, employees: myEmployees, walks: myWalks });
  }

  onSubmit = (fields) => {
    console.error('App component got: ', fields);
  }

  render() {
    const { dogs, employees, walks } = this.state;
    return (
      <div className="App">
        <div className="page-title">Doggie Day Care</div>
        <div className="our-dogs-title">Meet Our Clients!</div>
        <DogPen dogs={dogs}/>
        <div className="our-staff-title">Meet Our Staff!</div>
        <EmployeePen employees={employees}/>
        <div className="walk-form">New Walk Form</div>
        <WalkForm onSubmit={fields => this.onSubmit(fields)}/>
        <div className="our-walks">Walk Schedule</div>
        <WalkSchedule walks={walks}/>
      </div>
    );
  }
}

export default Home;
