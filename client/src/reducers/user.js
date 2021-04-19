export default (users = [], action) => {
    let newState = [...users]

    switch(action.type) {
    case 'USERS':
        console.log(action.payload)
        return action.payload 
    case 'NEW_USER':
        return [...users, action.payload.data]
    case 'UPDATE_USER':
        let theNewState = newState.filter((user) => user._id !== action.payload.id)
        theNewState.push(action.payload.update.user)
        return theNewState
    case 'DELETE_USER':
        return users.filter((el) => el._id !== action.payload)    
    default : 
        return users
    }
}