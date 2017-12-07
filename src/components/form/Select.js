//External Dependancies
import React from 'react';

const Select = ({options, handleChange}) => {

  const optionsList = options.map((option) => {
    return (<option value={option} key={option}>{option}</option>)
  });

  return (
      <div className="select-wrapper">
        <select className="input-select" onChange={handleChange} defaultValue="">
          <option value="" disabled>Please select an option</option>
          {optionsList}
        </select>
      </div>
  );
}

export default Select;
