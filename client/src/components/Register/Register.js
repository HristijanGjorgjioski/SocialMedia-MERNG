import gql from 'graphql-tag'
import React, { useState } from 'react'
import { Button, Form } from 'semantic-ui-react'

const Register = () => {
    const [values, setValues] = useState({
        username: '',
        password: '',
        email: '',
        confirmPassword: ''
    })

    const onChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value })
    }

    const onSubmit = (event) => {
        event.preventDefault()

    }

    return (
        <div>
            <Form onSubmit={onSubmit} noValidate>
                <h1>Register</h1>
                <Form.Input label="Username" placeholder="Username" name="username" value={values.username} onChange={onChange} />
                <Form.Input label="Email" placeholder="Email" name="Email" value={values.email} onChange={onChange} />
                <Form.Input label="Password" placeholder="Password" name="password" value={values.password} onChange={onChange} />
                <Form.Input label="Confrim Password" placeholder="Confrim Password" name="confrimPassword" value={values.confirmPassword} onChange={onChange} />
                <Button type="submit" primary>Register</Button>
            </Form>
        </div>
    )
}

const REGISTER_USER = gql`
    mutation register(
        
    )
`

export default Register
