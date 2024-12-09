import React, { useState } from 'react';

const ChangeFontSize = () => {
    const [fontSize, setFontSize] = useState(16);
    
    function increaseFontSize() {
        setFontSize(fontSize + 1);
    }

    // Function to decrease font size
    function decreaseFontSize() {
        if (fontSize > 1) {
            setFontSize(fontSize - 1);
        }
    }

    return (
        <div>
            <p style={{ fontSize: `${fontSize}px` }}>Sample Text</p>
            <button onClick={increaseFontSize}>Increase Font Size</button>
            <button onClick={decreaseFontSize}>Decrease Font Size</button>
        </div>
    );
};

export default ChangeFontSize;
