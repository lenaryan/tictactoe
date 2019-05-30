import React from 'react';
import Cell from './Cell';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      moveNum: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    let moveNumber = this.state.moveNum;
    
    if (e.target.innerText === '') {
      if (moveNumber % 2 === 0) {
        e.target.innerText = 'X';
      }
      else {
        e.target.innerText = 'O';
      }

      this.setState({
        moveNum: ++moveNumber
      });
    }
  }

  render() {
    return (
      <div className="game">
        <div className="row">
          <Cell onClick={this.handleClick} />
          <Cell onClick={this.handleClick} />
          <Cell onClick={this.handleClick} />
        </div>
        <div className="row">
          <Cell onClick={this.handleClick} />
          <Cell onClick={this.handleClick} />
          <Cell onClick={this.handleClick} />
        </div>
        <div className="row">
          <Cell onClick={this.handleClick} />
          <Cell onClick={this.handleClick} />
          <Cell onClick={this.handleClick} />
        </div>
      </div>
    )
  }
}

export default App;