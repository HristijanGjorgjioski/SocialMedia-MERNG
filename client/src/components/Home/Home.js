import React, { useContext } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { Grid } from 'semantic-ui-react'

import PostCard from '../PostCard/PostCard'
import { AuthContext } from '../../context/auth' 
import PostForm from '../PostForm/PostForm'
import { FETCH_POSTS_QUERY } from '../../util/graphql'
import './styles.css'

const Home = () => {
    const { loading, data: { getPosts: posts } } = useQuery(FETCH_POSTS_QUERY)
    const { user } = useContext(AuthContext)

    return (
        <Grid columns={3}>
            <Grid.Row className='page-title'>
                <h1>Recent Posts</h1>
            </Grid.Row>
            <Grid.Row>
                {user && (
                    <Grid.Column>
                        <PostForm />
                    </Grid.Column>
                )}
                {loading ? (
                    <h1>Loading posts...</h1>
                ) : (
                    posts && posts.map(post => (
                        <Grid.Column key={post.id} style={{ marginBottom: '20px' }}>
                            <PostCard post={post} />
                        </Grid.Column>
                    ))
                )}
            </Grid.Row>
        </Grid>
    )
}

export default Home
