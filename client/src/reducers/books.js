

export default (books = [], action) => {
    switch(action.type) {
    case 'GET_ALL':
        return action.payload
    case 'ADD_BOOK':
        return [...books, action.payload]
    default : 
        return books
    }
}