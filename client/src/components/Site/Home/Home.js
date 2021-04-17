import React, {useState,useEffect} from 'react'
import {Container, Grow, Grid } from '@material-ui/core'
import Books from "../Books/Books"
import Form from "../Form/Form"
import {getAllBooks} from '../../../actions/books'
import {useDispatch} from 'react-redux'


const Home = () => {
    const [currentId, setCurrentId] = useState(null)
   const dispatch = useDispatch()




   useEffect(() => {

       dispatch(getAllBooks())
    }, [,currentId,dispatch])
    return (
        <div>
            <Grow in>
                <Container>
                  <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7}>
                      <Books setCurrentId={setCurrentId}/>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <Form currentId={currentId} setCurrentId={setCurrentId} />
                    </Grid>
                  </Grid>
                </Container>
              </Grow>
          </div>
)
}

export default Home


