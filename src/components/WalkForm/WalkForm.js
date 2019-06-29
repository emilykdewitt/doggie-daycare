import React from 'react';

import NewWalkData from '../../helpers/data/newWalkData';

class Form extends React.Component {
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
      <form>
        <input
        name='dogId'
        placeholder='Dog Id'
        value={this.state.dogId}
        onChange={e => this.change(e)}
        />
        <br />
        <input
        name='employeeId'
        placeholder='Employee Id'
        value={this.state.employeeId}
        onChange={e => this.change(e)}
        />
        <br />
        <input
        name='date'
        placeholder='Date'
        value={this.state.date}
        onChange={e => this.change(e)}
        />
        <br />
        <button onClick={e => this.addWalk(e)}>Submit</button>
      </form>
    );
  }
}

export default Form;
