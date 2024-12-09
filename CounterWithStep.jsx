import React, { useState } from 'react';

const CounterWithStep = ({ step }) => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={() => setCount(count + step)}>Increase</button>
            <button onClick={() => setCount(count - step)}>Decrease</button>
        </div>
    );
};

export default CounterWithStep;
