import React from 'react'
import './FormInput.css';

const FormInput = (props) => {
  return (
    <div className="formInput">
        {/*<label>Username</label>*/}
        <input placeholder={props.placeholder} 
          name={props.name}
          onChange={e=>props.setValue(e.target.value)}
        />
    </div>
  )
}

export default FormInput