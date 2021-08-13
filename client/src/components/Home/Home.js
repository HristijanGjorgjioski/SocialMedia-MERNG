import React from 'react'
import gql from 'graphql'

const Home = () => {
    return (
        <div>
            Home
        </div>
    )
}

const FETCH_POSTS_QUERY = gql`
    getPosts{
        id body createdAt likeCount
        likes{
            username
        }
        commentCount
        comments{
            id username createdAt body
        }
    }
`

export default Home
