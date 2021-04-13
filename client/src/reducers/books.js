

export default (books = [], action) => {
    switch(action.type) {
    case 'GET_ALL':
        console.log(action.payload)
        return action.payload
        default : 
        return books
    }
}