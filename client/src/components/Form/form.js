import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
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
    const [postData, setPostData] = useState({ creator: '', title: '', description: '', Genre: '', author:'', selectedFile: '' })
    const book = useSelector((state) => (currentId ? state.booksReducer.find((book) => book._id === currentId) : null));

    const dispatch = useDispatch()
    const classes = useStyles()
    const classes1 = useStyles1()

    useEffect(() => {
        if (book) setPostData(book);
      }, [book]);

    const handleChange = (e) => setPostData({ ...postData, [e.target.name]: e.target.value })

    const clear = () => {
        setCurrentId(0);
        setPostData({ creator: '', title: '', description: '', Genre: '', author:'', selectedFile: '' })
      };
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
            <FormControl variant="outlined" className={classes1.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">Auther</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    name="author"
                    value={postData.author}
                    onChange={handleChange}
                    label=""
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
            <FormControl variant="outlined" className={classes1.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">Genre</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    name="Genre"
                    value={postData.Genre}
                    onChange={handleChange}
                    label=""
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
            <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
            <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
            <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
        </form>
      </Paper>
        )
}

export default Form