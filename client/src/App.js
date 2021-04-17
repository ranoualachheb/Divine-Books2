import React from 'react'
import { Container } from '@material-ui/core'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Switch , Route } from 'react-router-dom'
import Auth from './components/Auth/Auth'
import { useSelector } from 'react-redux';
import Site from './components/Site/index';
import Users from './components/Site/Users/users';





const App = () => {
   let isLoggedIn = useSelector(state => state.authReducer.isLoggedIn);


   return (
      <BrowserRouter>
         <Container className ="container" maxwidth="lg">
            <Navbar />
            <Switch>
               <Route exact path='/' component={isLoggedIn ? Site : Auth} />
               {isLoggedIn
                  ? <Route exact path='/Users' component={Users} />
                  : null}
            </Switch>
         </Container>
      </BrowserRouter>
   )
}

export default App
