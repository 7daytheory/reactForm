import React, {useState} from 'react'
import FormInput from '../FormInput/FormInput'

const Form = () => {
  //Set States
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");

  //Instead of useState you can use useRef()
    //const usernameRef = useRef();
      // - input rquires refer(usernameRef)
  
     const handleSubmit = (e) => {
      e.preventDefault();
      const data = new FormData(e.target);
      console.log(Object.fromEntries(data.entries()));
     }

  return (
    <div className="app">
        <form onSubmit={handleSubmit}>
            <FormInput name="username" placeholder="Username" setValue={setUsername} />
            <FormInput name="name" placeholder="Name" setValue={setName} />
            <FormInput name="email" placeholder="Email" setValue={setEmail} />
            <FormInput name="password" placeholder="Password" setValue={setPassword} />
            <FormInput name="verifyPassword" placeholder="Verify password" setValue={setVerifyPassword} />

            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Form