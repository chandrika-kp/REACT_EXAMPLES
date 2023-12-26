// Question: Build a Simple React Component

// Create a React component called Counter that displays a counter and provides two buttons: one for incrementing the counter and another for decrementing it. The initial value of the counter should be 0.

// The component should have the following features:

// Display the current count.
// Provide a button labeled "Increment" that increases the count by 1 when clicked.
// Provide a button labeled "Decrement" that decreases the count by 1 when clicked.
// Ensure that the count cannot go below 0.
// Additionally, include a brief explanation or comments in your code to describe how your component works.

// This question assesses the candidate's understanding of basic React concepts such as component creation, state management, event handling, and conditional rendering. Candidates are expected to demonstrate their ability to set up a React component, manage state, and handle user interactions.

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