import React, { Component } from 'react';
import DefenderStar from "./game/components/defender/DefenderStar";
import './App.css';


class App extends Component {
  render() {
    return (
      <div
          className="App"
      >
        <DefenderStar
          top={100}
          left={900}
        />
        <DefenderStar
          top={300}
          left={700}
        />
      </div>
    );
  }
}

export default App;
