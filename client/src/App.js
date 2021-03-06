import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react'

import Home from './components/Home/Home'
import Login from './components/Login/Login'
import MenuBar from './components/MenuBar/MenuBar'
import Register from './components/Register/Register'
import { AuthProvider } from './context/auth'
import AuthRoute from './util/AuthRoute'

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Container>
                    <MenuBar />
                    <AuthRoute excat path='/' component={Home} />
                    <AuthRoute exact path='/login' component={Login} />
                    <Route exact path='/register' component={Register} />
                </Container>
            </Router>
        </AuthProvider>
    )
}

export default App
