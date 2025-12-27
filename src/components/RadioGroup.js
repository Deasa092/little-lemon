import React from "react";
import "./styles/RadioGroup.css"

function RadioGroup({ legend, name, options, selected, onChange }) {
  return (
    <fieldset className="radio-group">
      <legend>{legend}</legend>
      <div className="radio-options">
        {options.map((option) => (
          <label key={option.value} className="radio-label">
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={selected === option.value}
              onChange={onChange}
            />
            {option.label}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export default RadioGroup;
