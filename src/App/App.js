import React from 'react';

import myDogs from './dogs';
import DogPen from '../components/DogPen/DogPen';

import './App.scss';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  state = {
    dogs: [],
  }

  componentDidMount() {
    this.setState({ dogs: myDogs });
  }

  render() {
    const { dogs } = this.state;
    return (
      <div className="App">
        <div>Doggie Day Care</div>
        <DogPen dogs={dogs}/>
      </div>
    );
  }
}

export default App;
