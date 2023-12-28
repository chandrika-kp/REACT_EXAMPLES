import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);

    const decByOne = () => {
        //  the count cannot go below 0
        if (count <= 0) {
            setCount(count)
        } else {
            setCount(count - 1)
        }
    }
    const incByOne = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <button onClick={decByOne}>Decrement</button>
            <p>{count}</p>
            <button onClick={incByOne}>Increment</button>
        </div>
    )
}

export default Counter;