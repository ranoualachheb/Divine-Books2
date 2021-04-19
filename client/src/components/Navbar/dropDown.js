import React,{ useEffect } from 'react'
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Popper from '@material-ui/core/Popper';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';

function randomColor() {
    let hex = Math.floor(Math.random() * 0xffffff);
    let color = '#' + hex.toString(16);
  
    return color;
  }

  const useStyles = makeStyles(() => ({
    root: {
      display: 'flex',
      '& > *': {
        padding: 0
      }
    },
    dropDown: {
      backgroundColor: 'white',
      border: '3px solid grey',
      borderRadius: '5px',
      width: '9em',
    },
    dropDownStyle: {
      padding: '1vw',
      textWrap: 'none',
      color: 'black',
      '&:hover': {
        backgroundColor: '#C8C8C8',
        color: 'black',
        fontWeight: 600,
      }
    }
  }));

  const color = randomColor();

  const AccountDropDown = () => {
    const dispatch = useDispatch()
    const history = useHistory()


    const user = useSelector(state => state.authReducer.isLoggedIn);
    const isAdmin = localStorage.getItem('admin')
    
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);



    const handleClick = (event) => {
        event.preventDefault();
        setAnchorEl(event.currentTarget)
        setOpen(!open);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
        setOpen(false)
      };


      const handleLogOut = async () => {
        await dispatch ({type: 'LOGOUT'})   
        handleClose();
        history.push('/')
      }

      const classes = useStyles()

      useEffect(() => {
        if (!user) {
          history.push('/')
        }
      }, [history]);

      return (
        <div>
          {user ?
          <IconButton
            aria-controls='simple-menu'
            aria-haspopup='true'
            onClick={handleClick}
          >
            <Avatar
              style={{
                backgroundColor: color,
              }}
              className={(classes.contrast, classes.root)}
            >
            </Avatar>
          </IconButton> : null }
          <Popper className={classes.dropDown} open={open} anchorEl={anchorEl}>
            <List id='simple-menu' keepMounted>
            {!isAdmin? null :
                <ListItem className={classes.dropDownStyle} button onClick={handleClose} component = {NavLink} to ='/Users' >Users</ListItem>
                 }
            <ListItem className={classes.dropDownStyle} button onClick={handleClose} component = {NavLink} to ='/'>Home</ListItem>
            <ListItem className={classes.dropDownStyle} button component={NavLink} to='/' onClick={handleLogOut} >{!user ? 'signIn' : 'Logout'}</ListItem>
            </List>
          </Popper>
        </div>
      );
  }

  export default AccountDropDown