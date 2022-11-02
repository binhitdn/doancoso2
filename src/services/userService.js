import axios from '../axios'
let handleLoginApi = (userEmail, userPassword) => {
    return axios.post('api/login', { email: userEmail, password: userPassword})

}
let handleCreateUserApi = (user) => {
    return axios.post('/api/create-new-user', user)
}

export { handleLoginApi,handleCreateUserApi }