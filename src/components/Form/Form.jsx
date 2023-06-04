import React, {useState} from 'react'
import FormInput from '../FormInput/FormInput'

const Form = () => {
  //Set States
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  return (
    <div className="app">
        <form>
            <FormInput placeholder="username" setUsername={setUsername} />
            <FormInput placeholder="name" setName={setName} />
            <FormInput placeholder="email" setEmail={setEmail} />
            <FormInput placeholder="password" setPassword={setPassword} />
            <FormInput placeholder="password again" setVerifyPassword={setVerifyPassword} />
        </form>
    </div>
  )
}

export default Form