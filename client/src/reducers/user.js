export default (users = [], action) => {
    let newState = [...users]

    switch(action.type) {
    case 'USERS':
        console.log(action.payload)
        return action.payload 
    case 'NEW_USER':
        return [...users, action.payload.data]
    default : 
        return users
    }
}