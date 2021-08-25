import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Label } from 'semantic-ui-react'

const LikeButton = ({ post: { id, likeCount, likes } }) => {
    const [liked, setLiked] = useState(false)

    useEffect(() => {
        if(user && likes.find(like => like.username === user.username)) {
            return setLiked(true)
        }
        return setLiked(false)
    }, [user, likes])

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
