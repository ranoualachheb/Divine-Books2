
import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper, IconButton } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import useStyles from './styles';
import { addBook, updateBook } from '../../actions/books';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';


const useStyles1 = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Form = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({ creator: '', title: '', description: '', Genres: [''], authors: [''], selectedFile: '' })
    const book = useSelector((state) => (currentId ? state.booksReducer.find((book) => book._id === currentId) : null));
    const dispatch = useDispatch()
    const classes = useStyles()
    const classes1 = useStyles1()

    useEffect(() => {
        if (book) setPostData(book);
      }, [book]);

    const handleChange = (e) => setPostData({ ...postData, [e.target.name]: e.target.value })

    const handleNewAuthor = (e) => {
      setPostData({...postData, authors: Array.from(postData.authors).push('')});
    }

    const handleNewGenre = (e) => {
      setPostData({...postData, Genres: Array.from([...postData.Genres].push(''))});
    }

    const handleDeleteAuthor = (e) => {
      setPostData({...postData, authors: Array.from(postData.authors).filter(author => author !== e.target.value)});
    }

    const handleDeleteGenre = (e) => {
      setPostData({...postData, Genres: Array.from([...postData.Genres].filter(genre => genre !== e.target.value))});
    }

    const handleChangeAuthor = (e, id) => {
      const post = {...postData};
      post.authors[id] = e.target.value;
      setPostData(post);
    }

    const handleChangeGenre = (e, id) => {
      const post = {...postData};
      post.Genres[id] = e.target.value;
      setPostData(post);
    }

    const clear = () => {
        setCurrentId(0);
        setPostData({ creator: '', title: '', description: '', Genre: '', author:'', selectedFile: '' })
      }

    const handleSubmit = (e) => {
        e.preventDefault();
  
        if (currentId === 0) {
          dispatch(addBook(postData))
          clear();
        } else {
          dispatch(updateBook(currentId, postData));
          clear();
        // }
      }}


    return (
        <Paper className={classes.paper}>
        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
            <Typography variant="h6">{currentId ? `Edit "${book.title}"` : 'Add a book'}</Typography>
            <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange= {handleChange} />
            <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange= {handleChange} />
            <TextField name="description" variant="outlined" label="description" fullWidth multiline rows={4} value={postData.description} onChange= {handleChange} />
            {Array.from(postData.authors).map((_, i) => (
              <TextField key={i} name="author" variant="outlined" label="Author" fullWidth  value={postData.author} onChange={(e) => handleChangeAuthor(e, i)} endAdornment={<IconButton onClick={() => handleDeleteAuthor(i)}><HighlightOffIcon /></IconButton>} />
            ))}
            <Button variant="contained" color="secondary" size="small" onClick={handleNewAuthor} fullWidth>Add a new author</Button>
            {Array.from(postData.Genres).map((_, i) => (
              <TextField key={i} name="Genre" variant="outlined" label="Genre" fullWidth  value={postData.Genre} onChange= {(e) => handleChangeGenre(e, i)} endAdornment={<IconButton onClick={() => handleDeleteGenre(i)}><HighlightOffIcon /></IconButton>} />
            ))}
            <Button variant="contained" color="secondary" size="small" onClick={handleNewGenre} fullWidth>Add a new Genre</Button>
            <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
            <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
            <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
        </form>
      </Paper>
        )
}

export default Form