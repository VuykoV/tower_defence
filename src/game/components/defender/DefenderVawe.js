import React, { Component } from 'react';

export default class DefenderStar extends Component {
  constructor(props) {
    super(props);
    this.state={
      class1: "vawe",
      class2: "vawe",
    };
    this.defenderClick = this.defenderClick.bind(this);
  }

  defenderClick() {
    this.setState ({class1: 'vaweAnimation vawe', class2: 'vaweAnimation2 vawe'});
    setTimeout(
        ()=>this.setState ({class1: 'vawe', class2: 'vawe'}), 3000
    );
  }

  render() {
    const left = this.props.left;
    const top = this.props.top;

    return (
        <div>
          <div
              onClick={this.defenderClick}
              className="defenderVawe defender"
              style={{top, left}}
          >
            <div className={this.state.class1+" vaweBig vaweIn"}/>
            <div className={this.state.class1+" vaweBig vaweOut"}/>
            <div className={this.state.class2+" vaweSmall vaweIn"}/>
            <div className={this.state.class2+" vaweSmall vaweOut"}/>
          </div>

        </div>
    );
  }
}