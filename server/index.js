import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import booksRoutes from './routes/books.js';
import authorRoutes from './routes/author.js';
import genreRoutes from './routes/Genre.js';
import authRoutes from './routes/auth.js';
import usersRoutes from './routes/user.js'

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/books', booksRoutes);
app.use('/books', authorRoutes);
app.use('/books', genreRoutes);
app.use('/auth', authRoutes);
app.use('/users', usersRoutes);



const connectDB = async ()=> {
    try{
        const CONNECTION_URL = 'mongodb://localhost:27017/BooksLibrary?readPreference=primary&appname=MongoDB%20Compass&ssl=false'
        await mongoose.connect( CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
        console.log('Mongo connected...')
    }catch(err) {
        console.error(err.message)
        // exit process with failure
        process.exit(1)
    }
}

connectDB()

const PORT = process.env.PORT|| 5001;
app.listen(PORT, () => console.log(` Server started on port ${PORT}`))

