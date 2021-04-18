import axios from 'axios'
 const url = 'http://localhost:5001/auth'


export const signIn = (formData,router) => async (dispatch) => {
    try {
      const data = await axios.post(`${url}/signIn`,formData)
  
      dispatch({ type: 'AUTH', data })
      console.log(data)
      router.push('/')
    } catch (error) {
      console.log(error)
    }
  }
  
  export const signUp = (formData, router) => async (dispatch) => {
    try {
      const data = await axios.post(`${url}/signUp`,formData)
  
      dispatch({ type: 'AUTH', data })
  console.log(data)
      router.push('/')
    } catch (error) {
      console.log(error)
    }
  }