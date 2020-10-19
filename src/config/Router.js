import { extend } from 'jquery'
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from '../containers/Home'
import Products from '../containers/Products'

class AppRouter extends React.Component{
    render(){
        return(
            <Router>
                <Route exact path='/' component={Home} />
                <Route path='/items' component={Products} />
            </Router>
        )
    }
}
export default AppRouter;