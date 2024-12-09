import React, { useState } from 'react';

const FahrenheitDisplay = ({ fahrenheit }) => <h2>{fahrenheit} °F</h2>;

const TemperatureConverter = () => {
    const [celsius, setCelsius] = useState('');

    const convertToFahrenheit = (celsius) => (celsius * 9) / 5 + 32;

    return (
        <div>
            <input
                type="number"
                value={celsius}
                onChange={(e) => setCelsius(e.target.value)}
                placeholder="Enter Celsius"
            />
            <label>{convertToFahrenheit(celsius)} F</label>
        </div>
    );
};

export default TemperatureConverter;
