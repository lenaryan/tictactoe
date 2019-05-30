import React from 'react';

const Cell = (props) => {
    return (
        <button type="button" className="cell" onClick={props.onClick}></button>
    )
}

export default Cell;