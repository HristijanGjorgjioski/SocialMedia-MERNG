import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Label } from 'semantic-ui-react'

const LikeButton = ({ post: { id, likeCount, likes } }) => {
    return (
        <div>
            <Button as='div' labelPosition='right' onClick={likePost}>
                <Button color='teal' basic><Icon name='heart' /></Button>
                <Label basic color='teal' pointing='left'>{likeCount}</Label>
            </Button>
        </div>
    )
}

export default LikeButton
