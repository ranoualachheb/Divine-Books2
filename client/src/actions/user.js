import axios from "axios"

const url = 'http://localhost:5001/users';  

export const getAllUsers = () => async dispatch => {
    try {
      const data = await axios.get(url)
      console.log(data.data)
      await dispatch({ type: 'USERS', payload: data.data })
    } catch (error) {
      console.log(error)
    }
  }
  
  export const createNewUser = (formData) => async dispatch => {
    try {
      const data = await axios.post(url,formData)
      console.log(data)
      await dispatch({ type: 'NEW_USER', payload: data })
    } catch (error) {
      console.log(error)    
    }
  }