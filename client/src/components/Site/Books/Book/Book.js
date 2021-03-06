import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/'
import DeleteIcon from '@material-ui/icons/Delete'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import {  deleteBook } from '../../../../actions/books'
import useStyles from './styles'


const Book = ({ book, setCurrentId }) => {
    const dispatch = useDispatch();
    const classes = useStyles();

    return (
        <Card className={classes.card}>
      <CardMedia className={classes.media} image={book.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={book.title} />
      <div className={classes.overlay}>
        <Typography variant="h6">{book.title}</Typography>
        <Typography variant="body2">{moment(book.createdAt).fromNow()}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(book._id)}><MoreHorizIcon fontSize="default" /></Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2"><strong>Written By:</strong> {book.author}</Typography>
      </div>
      <div className={classes.details}>
      <Typography className={classes.Genre} color="blue" gutterBottom variant="body2"  component="h2"><strong>{book.Genre.map((genre) => `#${genre} `)}</strong></Typography>
      </div>
      <Typography className={classes.title} gutterBottom variant="h6" component="h2"> Added By: {book.creator}</Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p"><strong>Description:</strong> {book.description}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick ={() => dispatch(deleteBook(book._id))}><DeleteIcon fontSize="small" /> Delete</Button>
      </CardActions>
    </Card>
    )
}

export default Book
