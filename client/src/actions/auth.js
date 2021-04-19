import axios from 'axios'
 const url = 'http://localhost:8080/auth'


export const signIn = (formData,router) => async (dispatch) => {
    try {
      const data = await axios.post(`${url}/signIn`,formData)
      dispatch({ type: 'AUTH', data })
      router.push('/')
    } catch (error) {
      console.log(error)
    }
  }
  
  export const signUp = (formData, router) => async (dispatch) => {
    try {
      const data = await axios.post(`${url}/signUp`,formData)
      dispatch({ type: 'AUTH', data })
      router.push('/')
    } catch (error) {
      console.log(error)
    }
  }