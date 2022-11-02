import axios from '../axios'
let handleCreateSpecialityApi = (speciality) => {
    return axios.post('/api/create-new-speciality', speciality)
}
let handleGetAllSpecialityApi = () => {
    return axios.get('/api/get-all-speciality')
}
export { handleCreateSpecialityApi ,handleGetAllSpecialityApi}