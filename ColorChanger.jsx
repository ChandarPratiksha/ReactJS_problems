import React, { useState } from 'react';

const ColorChanger = () => {
    const [color, setColor] = useState('White');

    return (
        <div>
            <select onChange={(e) => setColor(e.target.value)}>
                <option value="Red">Red</option>
                <option value="Blue">Blue</option>
                <option value="Green">Green</option>
            </select>
            <div style={{ backgroundColor: color, height: '100px', width: '100px' }}></div>
        </div>
    );
};

export default ColorChanger;
