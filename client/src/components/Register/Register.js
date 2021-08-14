import React, { useState } from 'react'
import { Form } from 'semantic-ui-react'

const Register = () => {
    const [values, setValues] = useState({
        username: '',
        password: '',
        email: '',
        confirmPassword: ''
    })

    return (
        <div>
            <Form onSubmit={onSubmit} noValidate>
                <h1>Register</h1>
                <Form.Input label="Username" placeholder="Username" name="username" value={values.username} onChange={onChange} />
            </Form>
        </div>
    )
}

export default Register
