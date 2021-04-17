import React, {useEffect} from 'react'
import {Container, Grow, Grid } from '@material-ui/core'
import {getAllUsers} from '../../../actions/user'
import {useDispatch} from 'react-redux'
import UsersForm from '../Users/usersForm'
import UsersTable from '../Users/usersTable'


const UsersPage = () => {
   const dispatch = useDispatch()

   useEffect(() => {
       dispatch(getAllUsers())
    }, [dispatch])
    return (
        <div>
            <Grow in>
                <Container>
                  <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7}>
                      <UsersForm/>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <UsersTable />
                    </Grid>
                  </Grid>
                </Container>
              </Grow>
          </div>
)
}

export default UsersPage