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

  export const editUser = (formData) => async dispatch => {
    try {
      const data = await axios.put( `${url}/${formData._id}`, formData);
      console.log('HERE is the updated user data from request', data.data);
      await dispatch({ type: 'UPDATE_USER', payload: {update: data.data, id: formData._id} });
    } catch (error) {
      console.log(error);
    }
  }