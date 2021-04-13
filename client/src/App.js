import React,{useState, useEffect} from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import Form from './components/Form/Form';
import Books from './components/Books/Books';
import useStyles from './styles';
import {useDispatch} from 'react-redux'
import { getAllBooks } from './actions/books'





const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
  dispatch(getAllBooks())
  }, [dispatch])


  return (
    <Container maxWidth="lg">
    <AppBar className={classes.appBar} position="static" color="inherit">
      <Typography className={classes.heading} variant="h2" align="center">Divine Library</Typography>
      {/* <img alt="bookpic" height="60" /> */}
      </AppBar>
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
    </Container>
  );
}

export default App;
