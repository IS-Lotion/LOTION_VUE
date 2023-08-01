import { axiosApi } from "@/api";

export default {
    registerUser(userData) {
        return new Promise((resolve, reject) => {
            axiosApi
                .post('/signUp', userData)
                .then((res) => {
                    console.log('signUp service okay')
                    resolve(res)
                })
                .catch((err) => {
                    console.log('signUp service errer')
                    reject(err)
                })
        })
    }
}
