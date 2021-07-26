import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import 'semantic-ui-css/semantic.min.css'



const App = () => {
    return (
        <Router>
            <Router excat path='/' component={Home} />
        </Router>
    )
}

export default App
