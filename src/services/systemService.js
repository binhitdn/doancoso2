import axios from "../axios";

const handleGetAllCode = (typeInput) => {
    return axios.get(`/api/allcode?type=${typeInput}`)
}
export { handleGetAllCode }