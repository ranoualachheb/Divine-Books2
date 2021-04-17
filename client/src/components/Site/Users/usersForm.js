import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper, IconButton, Checkbox,FormControlLabel } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import useStyles from '../Form/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import HighlightOffIcon from '@material-ui/icons/HighlightOff'



const UsersForm = () => {
    const [postData, setPostData] = useState({firstName: '', lastName: '', email: '', password : '', confirmPassword:'', selectedFile: '' })
    const [admin, setAdmin] = useState(false);

    const handleChange = (e) => {
        setPostData({ ...postData, [e.target.name]: e.target.value })
      }
  
    const handleSubmit = () => {
    }

      const clear = () => {
          setPostData({ firstName: '', lastName: '', email: '', password : '', selectedFile: '' })
        }
        const classes = useStyles()
    return (
        <Paper className={classes.paper}>
        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
            <Typography variant="h6">create User</Typography>
            <TextField name="firstName" variant="outlined" label="firstName" fullWidth value={postData.firstName} onChange= {handleChange} />
            <TextField name="lastName" variant="outlined" label="lastName" fullWidth value={postData.lastName} onChange= {handleChange} />
            <TextField name="email" variant="outlined" label="email" type='email' fullWidth multiline rows={4} value={postData.email} onChange= {handleChange} />
            <FormControlLabel
                control={<Checkbox checked={admin} onChange={() => {console.log('IS THIS USER ADMIN???????', admin); setAdmin(admin ? false : true)}} name='admin' />}
                label='Admin'
            />
            <TextField name="password" variant="outlined" label="password" type='password' fullWidth multiline rows={4} value={postData.password} onChange= {handleChange} />
            <TextField name="confirmPassword" variant="outlined" label="confirmPassword" type='password' fullWidth multiline rows={4} value={postData.confirmPassword} onChange= {handleChange} />
            <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
            <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
            <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
        </form>
      </Paper>
    )
}

export default UsersForm