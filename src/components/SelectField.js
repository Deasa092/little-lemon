import React from "react";
import "./styles/SelectField.css"

export default function SelectField({ label, name, value, options, onChange }) {
  return (
    <div className="select-field">
      {label && <label htmlFor={name}>{label}</label>}
      <select id={name} name={name} value={value} onChange={onChange}>
        <option value="">Select {label}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
