import axios from "axios"

const url = 'http://localhost:8080/users';  

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

  export const deleteUser = (id) => async dispatch => {
    try {
      await axios.delete(`${url}/${id}`)
      dispatch({type: 'DELETE_USER', payload: id})
    } catch (error) {
      console.log(error)
    }
  }