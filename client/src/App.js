import React, {useEffect} from 'react'
import { Container } from '@material-ui/core'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Auth from './components/Auth/Auth'
import Users from './components/Users/users'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'









const App = () => {
 const history = useHistory()
//  const user = JSON.parse(localStorage.getItem('profile'))
const User = useSelector(state => state.authReducer?.user)
console.log(User)

  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <Navbar/>
          <Switch>
          {!User 
               ? <>
                  <Route path = '/auth' component={Auth}/>
                 </>
               : <>
                  <Route exact path = '/Users' component = {Users} />
                  <Route  path = '/' component={Home}/> 
               </>}
          </Switch>
      </Container>
    </BrowserRouter>
  )
}

export default App;
