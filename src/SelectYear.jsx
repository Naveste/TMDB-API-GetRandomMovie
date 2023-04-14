import React from 'react';

const SelectYear = ({setWhatYear}) => {

    const handleChange = (event) => {
        setWhatYear(event.target.value);
    };
    const returnOptions = () => {
        const options = [];

        const currentYear = new Date().getFullYear();
        for (let year = 1970; year <= currentYear; year++) {
            options.push(<option key={year} value={year}>{year}</option>);
        }
        return options;
    };

    return (
        <div>
            <select onChange={handleChange}>
                <option defaultValue="">
                    Filter by year
                </option>
                {returnOptions()}
            </select>
        </div>
    );
};

export default SelectYear;