import React from 'react'
import { connect } from 'react-redux'
import { increaseAsync, decreaseAsync } from '../redux/counter'
import Counter from './Counter'

function CounterContainer(props) {
    const {
        number,
        increaseAsync,
        decreaseAsync
    } = props; 
    
    return (
        <div>
            <Counter
                number={number}
                onIncrease={increaseAsync}
                onDecrease={decreaseAsync}
            />
        </div>
    )
}

export default connect(
    state => ({number: state.counter}),
    {
        increaseAsync,
        decreaseAsync
    }
)(CounterContainer)
