import React from 'react'

function Counter(props) {
    const {
        number,
        onIncrease,
        onDecrease
    } = props; 

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>Increment</button>
            <button onClick={onDecrease}>Decrement</button>
        </div>
    )
}

export default Counter
