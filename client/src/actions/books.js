import axios from "axios"

const url = 'http://localhost:5001/books';

export const getAllBooks = () => async(dispatch) => {
    try{
        const {data} = await axios.get(url)
        dispatch({type : 'GET_ALL', payload: data})
    }catch(error) {
        console.log(error)
    }
}