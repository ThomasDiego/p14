import { useEffect, useState } from "react";
import "./style.css";

export const DropdownMenu = ({ name, options, onSelect }) => {
    const [selectedOption, setSelectedOption] = useState('');

    useEffect(() => {
        setSelectedOption(options[0]);
        onSelect({ target: { name, value: options[0] } });
    }, []);

    const handleOptionChange = (e) => {
        const selectedValue = e.target.value;
        setSelectedOption(selectedValue);
        onSelect(e);
    };

    return (
        <div className="dropdown-container">
            <label style={{textTransform: "capitalize"}} htmlFor={name}>{name}</label>
            <select id={name} name={name} value={selectedOption} onChange={handleOptionChange}>
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            <div className="chevron"></div>
        </div>
    );
};