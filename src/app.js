import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Error from './Error'
import Landing from './Landing'
import Login from './LogIn'
import Register from './signup'
import Nav from './Nav'
//import './app.css'




class App extends React.Component{
    render(){
        return(
            <div className='app'>
                <BrowserRouter>
                    <Nav />
                    <Switch>
                        <Route exact path='/' component={Landing} />
                        <Route path='/user/login' component={Login} />
                        <Route path='/signup' component={Register} />
                        <Route component={Error} />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;