import React from 'react'
import { toast } from 'react-toastify'
import { faunaQueries } from '../fauna/query-manager'

// Components
import Form from './../components/form'

const handleRegister = (event, username, password) => {
  faunaQueries
    .register(username, password)
    .then(e => {
      toast.success('User registered')
    })
    .catch(e => {
      if (e.error) {
        toast.error(e.error)
      } else {
        console.log(e)
        toast.error('Oops, something went wrong')
      }
    })
  event.preventDefault()
}

const Register = () => {
  return (
    <Form
      title="Register"
      formType="register"
      handleSubmit={(event, username, password) => handleRegister(event, username, password)}
    ></Form>
  )
}

export default Register
