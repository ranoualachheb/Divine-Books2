import mongoose from 'mongoose'

const bookSchema = mongoose.Schema({
     title: String,
     //msg
     description: String,
     creator: String,
     //new
     author:String,
     //taggy
     types: String,
     selectedFile: String,
     likeCount: {
         type:Number,
         default: 0
     },
     createdAt: {type : Date,
    default: new Date()
},

})

const books = mongoose.model('books', bookSchema)

export default books;