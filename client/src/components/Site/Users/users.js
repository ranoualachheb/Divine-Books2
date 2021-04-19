import React,{useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import { FormControlLabel, TextField, Typography, Checkbox, Grow, Container, Grid } from '@material-ui/core';
import { createNewUser, editUser, getAllUsers, deleteUser } from '../../../actions/user';
import useStyles from '../Form/styles';

const Users = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [admin, setAdmin] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [editing, setEditing] = useState(false);
    const [currUser, setCurrUser] = useState(0);
   
    const users = useSelector(state => state.users);
    const dispatch= useDispatch()
    const classes = useStyles()

    useEffect(() => {
        dispatch(getAllUsers())
    }, [])
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (editing) {
            if (password === confirmPassword) {
                dispatch(editUser({ _id: currUser, firstName, lastName, email, isAdmin: admin, password }))
                setEditing(false)
                setFirstName('')
                setLastName('')
                setEmail('')
                setAdmin('')
                setPassword('')
                setConfirmPassword('')
            } else {
                alert('Passwords do not match')
            }
        } else {
            if (password === confirmPassword) {
                dispatch(createNewUser({ firstName, lastName, email, isAdmin: admin, password }))
                setEditing(false)
                setFirstName('')
                setLastName('')
                setEmail('')
                setAdmin('')
                setPassword('')
                setConfirmPassword('')
            } else {
                alert('Passwords do not match')
            }
        }
    }
    
    const handleCreate = async () => {
        setEditing(false)
        setFirstName('')
        setLastName('')
        setEmail('')
        setAdmin(false)
        setPassword('')
        setConfirmPassword('')
    }

    const handleEdit = async (e, user) => {
        setEditing(true)
        console.log(currUser)
        setFirstName(user.name.split(' ')[0])
        setLastName(user.name.split(' ')[1])
        setEmail(user.email)
        setAdmin(user.isAdmin)
        setPassword('')
        setPassword('')
    }

    const handleDelete = async (id) => {
        dispatch(deleteUser(id))
        setEditing(false)
        setFirstName('')
        setLastName('')
        setEmail('')
        setAdmin('')
        setPassword('')
        setConfirmPassword('')
    }

    if (!users.length) {
        dispatch(getAllUsers());
    }

    return (
        <div>
            <Grow in>
                <Container>
                <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                <Grid item xs={12} sm={7}>
            <TableContainer component={Paper} styles={{'width': '50%'}}>
                <Table  aria-label='Users Table'>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align='right'>Email</TableCell>
                            <TableCell align='center'>Admin</TableCell>
                            <TableCell align='right'></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user) => (
                            <TableRow key={user._id}>
                                <TableCell component='th' scope='row'>{user.name}</TableCell>
                                <TableCell align='right'>{user.email}</TableCell>
                                <TableCell align='center'>{user.isAdmin ? 'Yes' : 'No'}</TableCell>
                                <TableCell>
                                    <IconButton aria-label='edit' size='small' id={user._id} onClick={(e) => {setCurrUser(user._id); handleEdit(e, user);}}>
                                        <EditIcon fontSize='small' />
                                    </IconButton>
                                    <IconButton aria-label='delete' size='small' onClick={() => handleDelete(user._id)}>
                                        <DeleteIcon fontSize='small' />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                        <TableRow key='new'>
                           <Button fullWidth  onClick={handleCreate}>Create a New User</Button>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            </Grid>
            <Grid item xs={12} sm={4}>
            <Paper className={classes.paper} styles={{'width': '30%'}}>
            <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{!editing ? 'Create' : 'Edit'} User</Typography>
                <TextField
                    name='firstName'
                    variant='outlined'
                    label='First Name'
                    fullWidth
                    required
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                />
                <TextField
                    name='lastName'
                    variant='outlined'
                    label='Last Name'
                    fullWidth
                    required
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                />
                <TextField
                    name='email'
                    variant='outlined'
                    label='Email'
                    type='email'
                    fullWidth
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <FormControlLabel
                    control={<Checkbox checked={admin} onChange={() => setAdmin(admin ? false : true)} name='admin' />}
                    label='Admin'
                />
                <TextField
                    name='password'
                    variant='outlined'
                    label='Password'
                    type='password'
                    fullWidth
                    required
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <TextField
                    name='confirmPassword'
                    variant='outlined'
                    label='Confirm Password'
                    type='password'
                    fullWidth
                    required
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                />
                <Button className={classes.buttonSubmit} type='submit' variant='contained' color='primary' size='large' fullWidth>Submit</Button>
            </form>
            </Paper>
            </Grid>
            </Grid>
            </Container>
            </Grow>
        </div>
    )
}

export default Users