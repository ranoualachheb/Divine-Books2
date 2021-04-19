
import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import useStyles from './styles';
import { addBook, updateBook } from '../../../actions/books';


const Form = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({ creator: '', title: '', description: '', Genre: '', author: '', selectedFile: '' })
    const book = useSelector((state) => (currentId ? state.booksReducer.find((book) => book._id === currentId) : null));
    const dispatch = useDispatch()
    const classes = useStyles()
    
    useEffect(() => {
      if (book) setPostData(book);
    }, [book]);
    
    const handleChange = (e) => {
      setPostData({ ...postData, [e.target.name]: e.target.value })
    }
    
    const clear = () => {
      setCurrentId(0);
      setPostData({ creator: '', title: '', description: '', Genre: '', author:'', selectedFile: '' })
    }
    
    const handleSubmit = async(e) => {
      e.preventDefault();      
      if (currentId === 0) {
         await dispatch(addBook(postData))
        clear();
        } else {
         await dispatch(updateBook(currentId, postData));
          clear();
      }}


    return (
        <Paper className={classes.paper}>
        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
            <Typography variant="h6">{currentId ? `Edit ${book.title}` : 'Add a book'}</Typography>
            <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange= {handleChange} />
            <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange= {handleChange} />
            <TextField  name="description" variant="outlined" label="description" fullWidth multiline rows={4} value={postData.description} onChange= {handleChange} />
            <TextField name="author" variant="outlined" label="author" fullWidth value={postData.author} onChange= {handleChange} />
            <TextField name="Genre" variant="outlined" label="Genre" fullWidth value={postData.Genre} onChange= {(e) => setPostData({ ...postData, Genre: e.target.value.split(',') })} />
            <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
            <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" disabled={!(postData.creator && postData.title && postData.description && postData.author && postData.Genre)}fullWidth>Submit</Button>
            <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
        </form>
      </Paper>
        )
}

export default Form