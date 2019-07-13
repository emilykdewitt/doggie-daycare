import React from 'react';
import firebase from 'firebase/app';

import dogsData from '../../helpers/data/dogsData';
import DogPen from '../DogPen/DogPen';

import employeesData from '../../helpers/data/employeesData';
import EmployeePen from '../EmployeePen/EmployeePen';

import walksData from '../../helpers/data/walksData';
import WalkSchedule from '../WalkSchedule/WalkSchedule';

import WalkForm from '../WalkForm/WalkForm';

import '../../App/App.scss';

import 'bootstrap/dist/css/bootstrap.min.css';

class Home extends React.Component {
  state = {
    dogs: [],
    employees: [],
    walks: [],
    newWalk: {},
    editWalk: {},
  }

  getWalks = () => {
    walksData.getWalks(firebase.auth().currentUser.uid)
      .then(walks => this.setState({ walks }))
      .catch(err => console.error('could not get walks', err));
  }

  addNewWalk = (walkObject) => {
    walksData.addNewWalk(walkObject)
      .then(() => {
        this.setState({ newWalk: {} });
        this.getWalks();
      })
      .catch(err => console.error('no new walks', err));
  };

  getEmployees = () => {
    employeesData.getEmployees()
      .then(employees => this.setState({ employees }))
      .catch(err => console.error('could not get employees', err));
  }

  componentDidMount() {
    dogsData.getDogs()
      .then(dogs => this.setState({ dogs }))
      .catch(err => console.error('getDogs error', err));
    this.getWalks();
    this.getEmployees();
  }

  deleteWalk = (walkId) => {
    walksData.deleteWalk(walkId)
      .then(() => this.getWalks())
      .catch(err => console.error('could not delete order', err));
  }

  render() {
    const {
      dogs,
      employees,
      walks,
    } = this.state;
    return (
      <div className="Home">
        <h2 className="page-title">Doggie Daycare</h2>
        <div className="row">
          <div className="col">
            <WalkForm
            dogs={ dogs }
            employees={ employees }
            walks={ walks }
            addNewWalk={this.addNewWalk}
            />
            <WalkSchedule
            walks={ walks }
            dogs={ dogs }
            employees={ employees }
            deleteWalk={this.deleteWalk}
            // editWalks={this.editWalks}
            />
            <DogPen
            dogs={ dogs }
            />
            <EmployeePen
            employees={ employees }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
