import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react'

import Home from './components/Home/Home'
import Login from './components/Login/Login'
import MenuBar from './components/MenuBar/MenuBar'
import Register from './components/Register/Register'

const App = () => {
    return (
        <Router>
            <Container>
                <MenuBar />
                <Router excat path='/' component={Home} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/register' component={Register} />
            </Container>
        </Router>
    )
}

export default App
