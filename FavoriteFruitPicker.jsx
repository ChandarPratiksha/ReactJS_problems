import React, { useState } from 'react';

const FavoriteFruitPicker = () => {
    const [fruit, setFruit] = useState('');

    return (
        <div>
            <select onChange={(e) => setFruit(e.target.value)}>
                <option value="">Select a fruit</option>
                <option value="Apple">Apple</option>
                <option value="Banana">Banana</option>
                <option value="Mango">Mango</option>
            </select>
            {fruit && <h1>Your favorite fruit is {fruit}</h1>}
        </div>
    );
};

export default FavoriteFruitPicker;
