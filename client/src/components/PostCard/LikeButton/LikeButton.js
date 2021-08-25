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

    const likeButton = user ? (
        liked ? (
            <Button color='teal'><Icon name='heart' /></Button>
        ) : (
            <Button color='teal' basic><Icon name='heart' /></Button>
        )
    ) : (
        <Button as={Link} to="/login" color='teal' basic><Icon name='heart' /></Button>
    )

    return (
        <div>
            <Button as='div' labelPosition='right' onClick={likePost}>
                {likeButton}
                <Label basic color='teal' pointing='left'>{likeCount}</Label>
            </Button>
        </div>
    )
}

export default LikeButton
