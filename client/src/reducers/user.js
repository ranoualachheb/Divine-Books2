
const authReducer = (state = null, action) => {
    switch (action.type) {
        case 'AUTH':
            localStorage.setItem('profile', JSON.stringify(action.data.data.token))
            console.log(action.data)
            return { ...state, ...action.data.data }
        default:
            return state    
    }
}

export default authReducer