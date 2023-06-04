import React, {useState} from 'react'
import FormInput from '../FormInput/FormInput'

import './Form.css';

const Form = () => {
  //Set States
      // const [username, setUsername] = useState("");
      // const [name, setName] = useState("");
      // const [email, setEmail] = useState("");
      // const [password, setPassword] = useState("");
      // const [verifyPassword, setVerifyPassword] = useState("");

  //Instead of useState you can use useRef()
    //const usernameRef = useRef();
      // - input rquires refer(usernameRef)

      const [values, setValues] = useState({
        username: "",
        name: "",
        email: "",
        password: "",
        verifyPassword: ""
      })

      const inputs = [
        {
          id: 1,
          name: "username",
          type: "text",
          placeholder: "username",
          errorMessage: "Username should be 5-16 characters long and not include any special characters.",
          pattern: "^[A-za-z0-9]{5,16}$", //A-Z a-z 0-9 , 5 - 16 characters
          label: "Username"
        },
        {
          id: 2,
          name: "name",
          type: "text",
          placeholder: "name",
          errorMessage: "You must enter your name.",
          pattern: "",
          label: "Name"
        },
        {
          id: 3,
          name: "email",
          type: "email",
          placeholder: "email",
          errorMessage: "This must be a valid email.",
          pattern: "",
          label: "Email"
        },
        {
          id: 4,
          name: "password",
          type: "password",
          placeholder: "password",
          errorMessage: "Password should be 8-20 characters and include 1 letter, 1 number and 1 special character.",
          pattern: "",
          label: "Password"
        },
        {
          id: 5,
          name: "verifyPassword",
          type: "password",
          placeholder: "verifyPassword",
          errorMessage: "Passwords do not match.",
          pattern: "",
          label: "Verify Password"
        },
      ]
  
     const handleSubmit = (e) => {
      e.preventDefault();
      // const data = new FormData(e.target);
      // console.log(Object.fromEntries(data.entries()));
     }

     const onChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value })
     }

  return (
    <div className="app">
        <form onSubmit={handleSubmit}>
        <h1>Contact Form</h1>
            {
              inputs.map((input) => {
                return (
                <FormInput 
                key={input.id}
                label={input.label}
                {...input} 
                value={values[input.name]} 
                onChange={onChange}/>
              )})
            }

            <button type="submit">Submit</button>
        </form>
    </div>
  )
};

export default Form