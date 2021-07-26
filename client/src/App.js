import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import 'semantic-ui-css/semantic.min.css'

import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Register from './components/Register/Register'

const App = () => {
    return (
        <Router>
            <Router excat path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
        </Router>
    )
}

export default App
