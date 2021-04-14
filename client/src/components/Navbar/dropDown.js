import React,{useState, useEffect } from 'react'
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Popper from '@material-ui/core/Popper';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory, useLocation } from 'react-router-dom';

function randomColor() {
    let hex = Math.floor(Math.random() * 0xffffff);
    let color = '#' + hex.toString(16);
  
    return color;
  }

  const useStyles = makeStyles(() => ({
    root: {
      display: 'flex',
      '& > *': {
        // margin: theme.spacing(1),
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

  const AccountDropDown = props => {
    const dispatch = useDispatch()
    const history = useHistory()
    const location = useLocation()

    const isAdmin = useSelector((state) => state.authReducer?.user.isAdmin);
    
    const user = JSON.parse(localStorage.getItem('profile'));

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


      const handleLogOut = () => {
        localStorage.clear()
        handleClose();
        history.push('/auth')
    }

      const classes = useStyles()

      useEffect(() => {
        if (!user) {
          history.push('/auth')
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
            {!isAdmin ? null :
                <ListItem className={classes.dropDownStyle} button onClick={handleClose} component = {NavLink} to ='/Users' >Users</ListItem> }
            <ListItem className={classes.dropDownStyle} button onClick={handleClose}>Book Types</ListItem>
            <ListItem className={classes.dropDownStyle} button onClick={handleLogOut} >{!user ? 'signIn' : 'Logout'}</ListItem>
            </List>
          </Popper>
        </div>
      );
  }

  export default AccountDropDown