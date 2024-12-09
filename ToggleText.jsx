import React, { useState } from 'react';

const ToggleText = () => {
    const [isVisible, setIsVisible] = useState(true);

    return (
        <div>
            <button onClick={() => setIsVisible(!isVisible)}>
                {isVisible ? "Hide" : "Show"}
            </button>
            {isVisible && <p>Hello World</p>}
        </div>
    );
};

export default ToggleText;
