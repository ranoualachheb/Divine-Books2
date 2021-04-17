import axios from "axios"

const url = 'http://localhost:5001/users';  

export const getAllUsers = () => async(dispatch) => {
    try{
        const {data} = await axios.get(url)
        console.log(data)
        dispatch({type : 'GET_USERS', payload: data})
    }catch(error) {
        console.log(error)
    }
}