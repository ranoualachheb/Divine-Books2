import mongoose from 'mongoose'

const bookSchema = mongoose.Schema({
     id : Number,
     title: String,
     description: String,
     creator: String,
     author:String,
     Genre: [String],
     selectedFile: String,
     createdAt: {type : Date,
    default: new Date()
},

})

const books = mongoose.model('books', bookSchema)

export default books;