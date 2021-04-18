

export default (books = [], action) => {
    switch(action.type) {
    case 'GET_ALL':
        return action.payload
    case 'ADD_BOOK':
        return [...books, action.payload]
    case 'UPDATE': 
        return books.map((book)=> (book._id === action.payload._id ? action.payload : book) )
    case 'DELETE':
        return books.filter((book) => (book._id !== action.payload))
    default : 
        return books
    }
}