import React from 'react';
import Cell from './Cell';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      checked: false,
      moveNum: 0
    }
  }
  render() {
    return (
      <div className="game">
        <div className="row">
          <Cell />
          <Cell />
          <Cell />
        </div>
        <div className="row">
          <Cell />
          <Cell />
          <Cell />
        </div>
        <div className="row">
          <Cell />
          <Cell />
          <Cell />
        </div>
      </div>
    )
  }
}

export default App;