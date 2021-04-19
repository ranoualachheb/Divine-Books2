import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import booksRoutes from './routes/books.js';
import authRoutes from './routes/auth.js';
import usersRoutes from './routes/user.js'

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/books', booksRoutes);
app.use('/auth', authRoutes);
app.use('/users', usersRoutes);




        const CONNECTION_URL = 'mongodb+srv://ranoua:God123@cluster0.vmi6v.mongodb.net/BooksLibrary?retryWrites=true&w=majority'

        
        const PORT = process.env.PORT || 8080
        mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => app.listen(PORT, ()=> console.log(`server runnning on port:${PORT}`)), console.log('mongo connected') )
        .catch((error)=> console.log(error.message))
        
        
        

