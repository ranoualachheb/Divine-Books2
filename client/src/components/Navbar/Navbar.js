import React from 'react'
import { AppBar, Avatar, Typography,Toolbar,Button } from '@material-ui/core'
import useStyles from './styles'
import { Link, NavLink } from 'react-router-dom'
import AccountDropDown from './dropDown'


const Navbar = () => {

    const classes = useStyles() 

    return (
        <div>
           <AppBar className = {classes.appBar} position= "static" color = "inherit">
               <div className={classes.brandContainer}>
                 <Typography component={Link} to = "/" className={classes.heading} variant = "h2" align = "center">Memories</Typography>
               </div>
               <Toolbar className={classes.toolbar}>
                      <div className={classes.profile}>
                            <AccountDropDown/>
                      </div>
               </Toolbar>
           </AppBar> 
        </div>
    )
}

export default Navbar

