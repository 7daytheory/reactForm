import React from 'react'
import './FormInput.css';

const FormInput = (props) => {
  const {label, onChange, id, errorMessage, ...inputProps} = props;
  console.log(inputProps);
  console.log(`Label ${label} | On Change : ${onChange} | Id : ${id}`);
  return (
    <div className="formInput">
        {/* Using singular props
        /<label>Username</label>
        {/* <input placeholder={props.placeholder} 
          name={props.name}
          onChange={e=>props.setValue(e.target.value)} */}
          <label>{label}</label>
          <input
          {...inputProps}
          onChange={onChange}
          required
        />
        <span>{errorMessage}</span>
    </div>
  )
}

export default FormInput