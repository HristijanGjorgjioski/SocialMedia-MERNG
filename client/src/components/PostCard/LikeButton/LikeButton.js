import React from 'react'

const LikeButton = () => {
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
