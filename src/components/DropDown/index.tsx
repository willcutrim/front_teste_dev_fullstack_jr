import React, { useState } from 'react';

type Props = {
    options: string[];
}

const Dropdown: React.FC<Props> = ({ options }) => {
    const [selectedOption, setSelectedOption] = useState(options[0]);

    return (
        <div>
            <select value={selectedOption} onChange={e => setSelectedOption(e.target.value)}>
                {options.map(option => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Dropdown;