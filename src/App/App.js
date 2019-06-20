import React from 'react';

import myDogs from './dogs';
import DogPen from '../components/DogPen/DogPen';

import myEmployees from './employees';
import EmployeePen from '../components/EmployeePen/EmployeePen';

import './App.scss';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
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
        <div>Doggie Day Care</div>
        <DogPen dogs={dogs}/>
        <div>Staff Room</div>
        <EmployeePen employees={employees}/>
      </div>
    );
  }
}

export default App;
