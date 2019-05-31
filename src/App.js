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

  searchWinner() {
    let winCombos = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [3, 5, 7]
    ];

    let cells = document.querySelectorAll('.cell');

    let orderValue = [];

    cells.forEach(cell => {
      orderValue[Number.parseInt(cell.getAttribute('order'))] = cell.innerText;
    })

    /*
      Для каждой комбинации:
      если в ячейке с таким ордером
      значение равно всем значениям
      в других ячейках этой комбинации,
      то выиграл игрок, ставивший знак,
      указанный в значении
    */

    winCombos.forEach(combo => {
      if (orderValue[combo[0]] !== '' && orderValue[combo[0]] === orderValue[combo[1]] && orderValue[combo[0]] === orderValue[combo[2]]) {
        console.log(orderValue[combo[0]] + ' wins');
        cells.forEach(cell => cell.setAttribute('disabled', 'disabled'));
      }
    })

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

      if (moveNumber > 3 && moveNumber < 9) {
        this.searchWinner();
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