
const authReducer = (state = {isLoggedIn: false, user: null, token: ''}, action) => {
    switch (action.type) {
        case 'AUTH':
            localStorage.setItem('profile', JSON.stringify(action.data.data.token))
            return { ...state, isLoggedIn: true, user: action.data.data.user, token: action.data.data.token }
        case 'LOGOUT':
            localStorage.clear();
            return {...state, isLoggedIn: false, user: null, token: ''}
        default:
            return state    
    }
}

export default authReducer