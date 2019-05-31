import React from 'react';

const Cell = (props) => {
    return (
        <button order={props.order} type="button" className="cell" onClick={props.onClick}></button>
    )
}

export default Cell;