import React, { Component } from 'react';

export default class DefenderVawe extends Component {
  constructor(props) {
    super(props);
    this.state={
      display: 'none',
      class: "energy"
    };
    this.defenderClick = this.defenderClick.bind(this);
  }

  defenderClick() {
    this.setState ({class: 'energyAnimation energy'});
    setTimeout(
        ()=>this.setState ({display: 'block'}), 1700
    );
    setTimeout(
        ()=>this.setState ({display: 'none'}), 1800
    );
    setTimeout(
        ()=>this.setState ({class: 'energy'}), 2000
    );
  }

  render() {
    const left = this.props.left;
    const top = this.props.top;

    return (
        <div>
          <div
              onClick={this.defenderClick}
              className="defenderStar defender"
              style={{top, left}}
          >
            <div className={this.state.class}/>
          </div>
          <svg width='1000' height='700' style={{display: this.state.display}}>
            <line x1='0' y1='0' x2={left+31} y2={top} stroke="cyan" strokeWidth="1" />
          </svg>

        </div>
    );
  }
}