import React from 'react';

const Result = (props) => {
    return (
        <>
            <button type="button" className="reset" onClick={props.onClick}>Заново</button>
            <p className="result">Победил {props.winner}</p>
        </>
    )
}

export default Result;