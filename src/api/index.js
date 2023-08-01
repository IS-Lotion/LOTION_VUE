import axios from 'axios'
// import {setInterceptors} from './common/interceptors'

function createrAxiosApi() {
    const axiosApi = axios.create({
        // baseURL: process.env.LOTION_API_URL
        baseURL: 'http://localhost:8080/',
    })
    // return setInterceptors(axiosApi)
    return axiosApi
}

const axiosApi = createrAxiosApi()

export {axiosApi}