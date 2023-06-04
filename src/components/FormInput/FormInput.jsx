import React, {useState} from 'react'
import './FormInput.css';

const FormInput = (props) => {
  const {label, onChange, id, required, errorMessage, ...inputProps} = props;
  const [focused, setFocused] = useState(false);

  const handleFocus = (e) => {
    setFocused(true);
  }
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
          required={required}
          onBlur={handleFocus}
          onFocus={() => inputProps.name === "verifyPassword" && setFocused(true)}
          focused={focused.toString()}
        />
        <span>{errorMessage}</span>
    </div>
  )
}

export default FormInput