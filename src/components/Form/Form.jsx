import React from 'react'
import FormInput from '../FormInput/FormInput'

const Form = () => {
  return (
    <div className="app">
        <form>
            <FormInput placeholder="username" />
            <FormInput placeholder="name" />
            <FormInput placeholder="email"/>
            <FormInput placeholder="password"/>
            <FormInput placeholder="password again"/>
        </form>
    </div>
  )
}

export default Form