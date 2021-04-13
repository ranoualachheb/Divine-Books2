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

export const addBook = (postData) => async (dispatch) => {
    try{
        const {data} = await axios.post(url, postData)
        dispatch({type: "ADD_BOOK", payload: data})
        console.log(data)
    }catch(error) {
        console.log(error)
    }
}