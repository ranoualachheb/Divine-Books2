import React from 'react'
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

export default UsersTable = () => {
    const users = useSelector(state => state.users)
    console.log(users)

    useEffect(() => {
        dispatch(getAllUsers())
     }, [])
    
    if (!users.length) {
        dispatch(getAllUsers());
    }
    return (
        <div>
            <TableContainer component={Paper}>
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
                                    <IconButton aria-label='edit' size='small' id={user._id} onClick={(e) => {}}>
                                        <EditIcon fontSize='small' />
                                    </IconButton>
                                    <IconButton aria-label='delete' size='small' onClick={() => {}}>
                                        <DeleteIcon fontSize='small' />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                        <TableRow key='new'>
                            <Button onClick={() => {}}>Create a New User</Button>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}