import React from 'react';

class Cell extends React.Component {
    handleClick(e) {
        e.target.innerText = 'X';
    }

    render() {
        return (
            <button type="button" className="cell" onClick={this.handleClick.bind(this)}></button>
        )
    }
}

export default Cell;