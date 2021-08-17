import React, { useState } from 'react'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks'
import { Button, Form } from 'semantic-ui-react'

import './styles.css'
import { useForm } from '../../util/hooks'

const Register = ({ history }) => {
    const [errors, setErrors] = useState({})
    const initialState = {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    const {  onChange, onSubmit, values } = useForm(addUser, {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const [addUser, { loading }] = useMutation(REGISTER_USER, {
        update(_, result) {
            console.log(result)
            history.push('/')
        },
        onError(err) {
            setErrors(err.graphQLErrors[0].extensions.exception.errors)
        },
        variables: values
    })

    const onSubmit = (event) => {
        event.preventDefault()
        addUser()
    }

    return (
        <div className='form-container'>
            <Form onSubmit={onSubmit} noValidate className={loading && "loading"}>
                <h1>Register</h1>
                <Form.Input label="Username" placeholder="Username" name="username" type="username" value={values.username} error={errors.username ? true : false} onChange={onChange} />
                <Form.Input label="Email" placeholder="Email" name="Email" type="email" value={values.email} error={errors.email ? true : false} onChange={onChange} />
                <Form.Input label="Password" placeholder="Password" name="password" type="password" value={values.password} error={errors.password ? true : false} onChange={onChange} />
                <Form.Input label="Confrim Password" placeholder="Confrim Password" name="confrimPassword" type="password" value={values.confirmPassword} error={errors.confirmPassword ? true : false} onChange={onChange} />
                <Button type="submit" primary>Register</Button>
            </Form>
            {Object.keys(errors).length > 0 && (
                <div className="ui error message">
                    <ul className="list">
                        {Object.values(errors).map(value => (
                            <li key={value}>{value}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

const REGISTER_USER = gql`
    mutation register(
        $username: String!
        $email: String!
        $password: String!
        $confirmPassword: String!
    ) {
        register(
            registerInput: {
                username: $username
                email: $email
                password: $password
                confirmPassowrd: $confirmPassowrd
            }
        ) {
            id
            email
            username
            createdAt
            token
        }
    }
`

export default Register
