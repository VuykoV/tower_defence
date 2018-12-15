import React, { Component } from 'react';
import './App.css';

class App extends Component {
  defenderClick() {
    console.log(1);
  }
  render() {
    return (
      <div
          className="App"
          onClick={this.defenderClick}
      >
        <defender className="Defender" />
      </div>
    );
  }
}

export default App;
