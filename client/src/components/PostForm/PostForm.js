import React from 'react'
import { Button, Form } from 'semantic-ui-react'

import { useForm } from '../../util/hooks'

const PostForm = () => {
    const { values, onChange, onSubmit } = useForm(createPostCallback)

    return (
        <Form onSubmit={onSubmit}>
            <h2>Create a post:</h2>
            <Form.Field>
                <Form.Input
                    placeholder="MERNG"
                    name="body"
                    onChange={onChange}
                    value={values.body}
                />
                <Button type="submit" color="teal">Submit</Button>
                </Form.Field>
        </Form>
    )
}

export default PostForm
