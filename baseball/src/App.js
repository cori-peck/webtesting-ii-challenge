import React, { Component } from 'react';

import Dashboard from './dashboard/Dashboard';
import Display from './display/Display';
import './App.css';

class App extends Component {
  state = {
    balls: 0,
    strikes: 0,
  }

  strike = () => {
    if(this.state.strikes === 2) {
      this.setState({ balls: 0, strikes: 0 })
    } else {
      this.setState({ strikes: this.state.strikes + 1 })
    }
  }

  render() {
    return (
      <div className="App">
          <Display strikes={this.state.strikes} balls={this.state.balls} />
          <Dashboard strike={this.strike} ball={this.ball} foul={this.foul} hit={this.hit} />
      </div>
    );
  }
}

export default App;
