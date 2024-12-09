import React, { useState } from 'react';

const ShowHidePassword = () => {
    const [password, setPassword] = useState('');
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div>
            <input
                type={isVisible ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
            />
            <button onClick={() => setIsVisible(!isVisible)}>
                {isVisible ? "Hide" : "Show"}
            </button>
        </div>
    );
};

export default ShowHidePassword;
