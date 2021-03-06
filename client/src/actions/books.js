import axios from "axios"

const url = 'http://localhost:8080/books';

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
        dispatch({type: 'ADD_BOOK', payload: data})
    }catch(error) {
        console.log(error)
    }
}

export const updateBook = (id,updatedBook) => async (dispatch) => {
    try{
        const {data} = await axios.patch(`${url}/${id}`, updatedBook)
        dispatch({type: 'UPDATE', payload: data })
    }catch(error){
            console.log(error)
    }
}

export const deleteBook = (id) => async (dispatch) =>{
    try{
        await axios.delete(`${url}/${id}`)
        dispatch({type:'DELETE', payload: id })
    }catch(error){
        console.log(error)
    }
}