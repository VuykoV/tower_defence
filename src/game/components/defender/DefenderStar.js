import React, { Component } from 'react';

class DefenderStar extends Component {
  constructor(props) {
    super(props);
    this.state={
      display: 'none'
    }
    this.defenderClick = this.defenderClick.bind(this);
  }

  defenderClick() {
    this.setState ({display: 'block'});
    setTimeout(
        ()=>this.setState ({display: 'none'}), 500
    )
  }

  render() {
    const left = this.props.left;
    const top = this.props.top;

    return (
      <div>
        <div
            onClick={this.defenderClick}
            className="DefenderStar"
            style={{top, left}}
        />
        <svg width='1000' height='1000' style={{display: this.state.display}}>
          <line x1='0' y1='0' x2={left+30} y2={top+25} stroke="violet"strokeWidth="2" />
        </svg>
      </div>
    );
  }
}

export default DefenderStar;
