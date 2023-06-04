import React, {useState} from 'react'
import FormInput from '../FormInput/FormInput'

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
          placeholder: "username"
        },
        {
          id: 2,
          name: "name",
          type: "text",
          placeholder: "name"
        },
        {
          id: 3,
          name: "email",
          type: "email",
          placeholder: "email"
        },
        {
          id: 4,
          name: "password",
          type: "password",
          placeholder: "password"
        },
        {
          id: 5,
          name: "verifyPassword",
          type: "password",
          placeholder: "verifyPassword"
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
            {
              inputs.map((input) => {
                return (
                <FormInput 
                key={input.id}
                label={input.name}
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