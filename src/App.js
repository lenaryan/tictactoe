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

    console.log(e.target.getAttribute('order'));
  }

  render() {
    return (
      <div className="game">
        <div className="row">
          <Cell order='1' onClick={this.handleClick} />
          <Cell order='2' onClick={this.handleClick} />
          <Cell order='3' onClick={this.handleClick} />
        </div>
        <div className="row">
          <Cell order='4' onClick={this.handleClick} />
          <Cell order='5' onClick={this.handleClick} />
          <Cell order='6' onClick={this.handleClick} />
        </div>
        <div className="row">
          <Cell order='7' onClick={this.handleClick} />
          <Cell order='8' onClick={this.handleClick} />
          <Cell order='9' onClick={this.handleClick} />
        </div>
      </div>
    )
  }
}

export default App;